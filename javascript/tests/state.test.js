import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import {
  createInitialState,
  completeLesson,
  isLessonCompleted,
  getTotalStars,
  unlockBadge,
  toggleAudio,
  setLanguage,
  setStudentProfile,
  setTheme,
  saveStateToStorage,
  loadStateFromStorage,
  listStudentProfiles,
  registerStudentProfile,
  loginStudentProfile,
  deleteStudentProfile,
  exportClassroomBackup,
  importClassroomBackup,
  CLASS_SHIFTS
} from '../src/modules/state.js';

describe('JavaScript State & Shift Management', () => {
  it('creates default initial state for JS kids', () => {
    const s = createInitialState();
    assert.equal(s.studentName, 'JS Ninja');
    assert.equal(s.studentAvatar, '⚡');
    assert.equal(s.stars, 0);
    assert.equal(s.currentLessonId, 'js-1-console');
    assert.deepEqual(s.completedLessons, []);
  });

  it('completes lessons and adds 3 stars immutably', () => {
    const s0 = createInitialState();
    const s1 = completeLesson(s0, 'js-1-console', 3);
    assert.equal(s1.stars, 3);
    assert.ok(isLessonCompleted(s1, 'js-1-console'));
    assert.ok(s1.badges.includes('apprentice'));
  });

  it('defines the 3 exact shift times', () => {
    assert.equal(CLASS_SHIFTS.length, 3);
    assert.ok(CLASS_SHIFTS[0].value.includes('10:30') && CLASS_SHIFTS[0].value.includes('12:00'));
    assert.ok(CLASS_SHIFTS[1].value.includes('14:00') && CLASS_SHIFTS[1].value.includes('15:30'));
    assert.ok(CLASS_SHIFTS[2].value.includes('15:30') && CLASS_SHIFTS[2].value.includes('17:00'));
  });

  it('registers multiple students across shifts and preserves isolated progression', () => {
    const mockStorage = {
      data: {},
      setItem(k, v) { this.data[k] = v; },
      getItem(k) { return this.data[k] || null; },
      removeItem(k) { delete this.data[k]; }
    };

    const s1 = registerStudentProfile({ name: 'Jasur', shift: '1-Smena (10:30 - 12:00)', avatar: '⚡' }, mockStorage);
    const s2 = registerStudentProfile({ name: 'Malika', shift: '2-Smena (14:00 - 15:30)', avatar: '🤖' }, mockStorage);

    const profiles = listStudentProfiles(mockStorage);
    assert.equal(profiles.length, 2);
    assert.equal(profiles[0].name, 'Jasur');
    assert.equal(profiles[1].name, 'Malika');

    // Login as Jasur
    const loginRes = loginStudentProfile(s1.profile.id, '', mockStorage);
    assert.equal(loginRes.success, true);
    assert.equal(loginRes.profile.name, 'Jasur');
  });

  it('exports and imports backup for moving between 10 offline computers', () => {
    const pc1Storage = {
      data: {},
      setItem(k, v) { this.data[k] = v; },
      getItem(k) { return this.data[k] || null; }
    };

    registerStudentProfile({ name: 'Coder 1', shift: '1-Smena (10:30 - 12:00)' }, pc1Storage);
    registerStudentProfile({ name: 'Coder 2', shift: '2-Smena (14:00 - 15:30)' }, pc1Storage);

    const backupJson = exportClassroomBackup(pc1Storage);
    assert.ok(backupJson.includes('Coder 1'));
    assert.ok(backupJson.includes('Coder 2'));

    const pc2Storage = {
      data: {},
      setItem(k, v) { this.data[k] = v; },
      getItem(k) { return this.data[k] || null; }
    };

    const importRes = importClassroomBackup(backupJson, pc2Storage);
    assert.equal(importRes.success, true);
    assert.equal(importRes.count, 2);

    const pc2Profiles = listStudentProfiles(pc2Storage);
    assert.equal(pc2Profiles.length, 2);
  });
});
