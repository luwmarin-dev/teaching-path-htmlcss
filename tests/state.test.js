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
  loadStateFromStorage
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
});
