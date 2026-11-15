import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import {
  createInitialState,
  completeLesson,
  isLessonCompleted,
  getTotalStars,
  unlockBadge,
  toggleTeacherMode,
  toggleAudio,
  toggleLanguage,
  setLanguage,
  setStudentProfile,
  setTheme,
  saveStateToStorage,
  loadStateFromStorage,
  listStudentProfiles,
  registerStudentProfile,
  loginStudentProfile,
  saveProfileState,
  loadProfileState,
  deleteStudentProfile,
  exportClassroomBackup,
  importClassroomBackup
} from '../src/modules/state.js';

describe('State Management', () => {
  it('creates initial default state', () => {
    const state = createInitialState();
    assert.deepEqual(state.completedLessons, []);
    assert.equal(state.stars, 0);
    assert.equal(state.teacherMode, false);
    assert.equal(state.audioEnabled, true);
    assert.equal(state.studentName, 'Code Cadet');
  });

  it('completes a lesson and adds stars immutably', () => {
    const state = createInitialState();
    const nextState = completeLesson(state, 'html-intro', 3);

    // Verify immutability
    assert.equal(state.stars, 0);
    assert.equal(state.completedLessons.length, 0);

    // Verify new state
    assert.equal(nextState.stars, 3);
    assert.deepEqual(nextState.completedLessons, ['html-intro']);
    assert.equal(isLessonCompleted(nextState, 'html-intro'), true);
    assert.equal(getTotalStars(nextState), 3);
  });

  it('unlocks badges at milestones (1, 5, 10 lessons)', () => {
    let s = createInitialState();
    for (let i = 1; i <= 10; i++) {
      s = completeLesson(s, `lesson-${i}`, 3);
    }
    assert.equal(s.badges.includes('first-code'), true);
    assert.equal(s.badges.includes('apprentice'), true);
    assert.equal(s.badges.includes('master-crafter'), true);
  });

  it('does not duplicate completed lessons or re-add badges', () => {
    const state = createInitialState();
    const state1 = completeLesson(state, 'html-intro', 3);
    const state2 = completeLesson(state1, 'html-intro', 3);

    assert.equal(state2.completedLessons.length, 1);
    assert.equal(state2.stars, 3);

    const b1 = unlockBadge(state2, 'cool-coder');
    const b2 = unlockBadge(b1, 'cool-coder');
    assert.equal(b2.badges.filter(b => b === 'cool-coder').length, 1);
  });

  it('toggles and sets language between English and Uzbek cleanly', () => {
    const state = createInitialState();
    assert.equal(state.lang, 'en');

    const toggledUz = toggleLanguage(state);
    assert.equal(toggledUz.lang, 'uz');

    const toggledEn = toggleLanguage(toggledUz);
    assert.equal(toggledEn.lang, 'en');

    const setDirectUz = setLanguage(state, 'uz');
    assert.equal(setDirectUz.lang, 'uz');

    const setDirectEn = setLanguage(setDirectUz, 'en');
    assert.equal(setDirectEn.lang, 'en');
  });

  it('toggles teacher mode, audio settings, and themes', () => {
    const state = createInitialState();
    const teacherOn = toggleTeacherMode(state);
    assert.equal(teacherOn.teacherMode, true);

    const audioOff = toggleAudio(state);
    assert.equal(audioOff.audioEnabled, false);

    const spaceTheme = setTheme(state, 'space');
    assert.equal(spaceTheme.theme, 'space');
  });

  it('updates student profile avatar and name', () => {
    const state = createInitialState();
    const updated = setStudentProfile(state, { name: 'Luna', avatar: '🐱' });

    assert.equal(updated.studentName, 'Luna');
    assert.equal(updated.studentAvatar, '🐱');
  });

  it('saves and loads from storage cleanly', () => {
    const mockStorage = {
      data: {},
      setItem(k, v) { this.data[k] = v; },
      getItem(k) { return this.data[k] || null; }
    };

    const s = createInitialState();
    s.studentName = 'Alex';
    s.stars = 15;

    saveStateToStorage(s, mockStorage);
    const loaded = loadStateFromStorage(mockStorage);

    assert.equal(loaded.studentName, 'Alex');
    assert.equal(loaded.stars, 15);
  });

  it('gracefully handles missing or invalid storage', () => {
    const mockCorruptStorage = {
      getItem() { return 'INVALID JSON'; }
    };
    const loaded = loadStateFromStorage(mockCorruptStorage);
    assert.ok(loaded);
    assert.equal(loaded.studentName, 'Code Cadet');
  });
  it('registers multiple student profiles across shifts without collisions', () => {
    const mockStorage = {
      data: {},
      setItem(k, v) { this.data[k] = v; },
      getItem(k) { return this.data[k] || null; },
      removeItem(k) { delete this.data[k]; }
    };

    const s1 = registerStudentProfile({ name: 'Ali Karimov', shift: '1-Smena', avatar: '🚀' }, mockStorage);
    const s2 = registerStudentProfile({ name: 'Zebo Karimova', shift: '2-Smena', avatar: '🐱' }, mockStorage);

    const profiles = listStudentProfiles(mockStorage);
    assert.equal(profiles.length, 2);
    assert.equal(profiles[0].name, 'Ali Karimov');
    assert.equal(profiles[1].name, 'Zebo Karimova');
    assert.equal(profiles[1].shift, '2-Smena');
  });

  it('switches between students and preserves each student isolated progression', () => {
    const mockStorage = {
      data: {},
      setItem(k, v) { this.data[k] = v; },
      getItem(k) { return this.data[k] || null; },
      removeItem(k) { delete this.data[k]; }
    };

    const s1 = registerStudentProfile({ name: 'Ali', shift: '1-Smena', avatar: '🚀' }, mockStorage);
    const s2 = registerStudentProfile({ name: 'Zebo', shift: '2-Smena', avatar: '🐱' }, mockStorage);

    // Ali completes 2 lessons
    let aliState = loadProfileState(s1.profile.id, mockStorage);
    aliState.completedLessons = ['theme-1-tags', 'theme-2-structure'];
    aliState.stars = 6;
    saveProfileState(s1.profile.id, aliState, mockStorage);

    // Zebo logs in and starts with 0 lessons
    const loginZebo = loginStudentProfile(s2.profile.id, '', mockStorage);
    assert.equal(loginZebo.success, true);
    assert.equal(loginZebo.state.completedLessons.length, 0);
    assert.equal(loginZebo.state.stars, 0);

    // Ali logs back in and his 2 lessons & 6 stars are intact!
    const loginAli = loginStudentProfile(s1.profile.id, '', mockStorage);
    assert.equal(loginAli.success, true);
    assert.equal(loginAli.state.completedLessons.length, 2);
    assert.equal(loginAli.state.stars, 6);
  });

  it('exports all students to USB backup JSON and imports on another computer', () => {
    const pc1Storage = {
      data: {},
      setItem(k, v) { this.data[k] = v; },
      getItem(k) { return this.data[k] || null; }
    };

    registerStudentProfile({ name: 'Student 1', shift: '1-Smena' }, pc1Storage);
    registerStudentProfile({ name: 'Student 2', shift: '2-Smena' }, pc1Storage);

    const backupJson = exportClassroomBackup(pc1Storage);
    assert.ok(backupJson.includes('Student 1'));
    assert.ok(backupJson.includes('Student 2'));

    // PC 2 receives the USB backup
    const pc2Storage = {
      data: {},
      setItem(k, v) { this.data[k] = v; },
      getItem(k) { return this.data[k] || null; }
    };

    const res = importClassroomBackup(backupJson, pc2Storage);
    assert.equal(res.success, true);
    assert.equal(res.count, 2);

    const imported = listStudentProfiles(pc2Storage);
    assert.equal(imported.length, 2);
    assert.equal(imported[0].name, 'Student 1');
  });

  it('validates optional PIN protection on student login', () => {
    const mockStorage = {
      data: {},
      setItem(k, v) { this.data[k] = v; },
      getItem(k) { return this.data[k] || null; }
    };

    const s = registerStudentProfile({ name: 'Secret Agent', pin: '1234' }, mockStorage);
    const failLogin = loginStudentProfile(s.profile.id, '9999', mockStorage);
    assert.equal(failLogin.success, false);
    assert.equal(failLogin.error, 'INCORRECT_PIN');

    const passLogin = loginStudentProfile(s.profile.id, '1234', mockStorage);
    assert.equal(passLogin.success, true);
  });
});
