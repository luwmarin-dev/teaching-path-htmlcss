/**
 * State Management Module for CodeCraft JS (Kids)
 * Pure immutable state transitions for progress, badges, preferences,
 * and offline multi-student shift profile management.
 */

const STORAGE_KEY = 'codecraft_js_kids_v1_state';
const PROFILES_INDEX_KEY = 'codecraft_js_kids_profiles_index_v2';
const ACTIVE_PROFILE_ID_KEY = 'codecraft_js_kids_active_profile_id_v2';
const PROFILE_STATE_PREFIX = 'codecraft_js_kids_profile_state_';

export const CLASS_SHIFTS = [
  { id: 'shift-1', labelUz: '1-Smena (10:30 – 12:00)', labelEn: 'Shift 1 (10:30 – 12:00)', value: '1-Smena (10:30 - 12:00)', time: '10:30 - 12:00' },
  { id: 'shift-2', labelUz: '2-Smena (14:00 – 15:30)', labelEn: 'Shift 2 (14:00 – 15:30)', value: '2-Smena (14:00 - 15:30)', time: '14:00 - 15:30' },
  { id: 'shift-3', labelUz: '3-Smena (15:30 – 17:00)', labelEn: 'Shift 3 (15:30 – 17:00)', value: '3-Smena (15:30 - 17:00)', time: '15:30 - 17:00' }
];

export function createInitialState() {
  return {
    studentName: 'JS Ninja',
    studentAvatar: '⚡',
    shift: '1-Smena (10:30 - 12:00)',
    profileId: 'prof_default',
    stars: 0,
    completedLessons: [],
    badges: [],
    currentLessonId: 'js-1-console',
    teacherMode: false,
    audioEnabled: true,
    editorFirstMode: false,
    focusIdeMode: false,
    lang: 'en', // 'en' | 'uz'
    theme: 'dark',
    customSandboxCode: `// CodeCraft JS Free Sandbox
console.log("Xush kelibsiz!");
let score = 0;
for (let i = 1; i <= 5; i++) {
  console.log("Yulduzcha #" + i + " ⭐");
}
`
  };
}

export function completeLesson(state, lessonId, starsEarned = 3) {
  if (state.completedLessons.includes(lessonId)) {
    return state;
  }

  const updatedCompleted = [...state.completedLessons, lessonId];
  const updatedStars = state.stars + starsEarned;
  let updatedBadges = [...state.badges];

  if (updatedCompleted.length >= 1 && !updatedBadges.includes('apprentice')) {
    updatedBadges.push('apprentice');
  }
  if (updatedCompleted.length >= 5 && !updatedBadges.includes('star-coder')) {
    updatedBadges.push('star-coder');
  }
  if (updatedCompleted.length >= 10 && !updatedBadges.includes('master-crafter')) {
    updatedBadges.push('master-crafter');
  }
  if (updatedCompleted.length >= 24 && !updatedBadges.includes('js-wizard')) {
    updatedBadges.push('js-wizard');
  }

  return {
    ...state,
    completedLessons: updatedCompleted,
    stars: updatedStars,
    badges: updatedBadges
  };
}

export function isLessonCompleted(state, lessonId) {
  return state.completedLessons.includes(lessonId);
}

export function getTotalStars(state) {
  return state.stars;
}

export function unlockBadge(state, badgeId) {
  if (state.badges.includes(badgeId)) {
    return state;
  }
  return {
    ...state,
    badges: [...state.badges, badgeId]
  };
}

export function toggleTeacherMode(state) {
  return {
    ...state,
    teacherMode: !state.teacherMode
  };
}

export function toggleAudio(state) {
  return {
    ...state,
    audioEnabled: !state.audioEnabled
  };
}

export function toggleLanguage(state) {
  return {
    ...state,
    lang: state.lang === 'en' ? 'uz' : 'en'
  };
}

export function setLanguage(state, lang) {
  return {
    ...state,
    lang: lang === 'uz' ? 'uz' : 'en'
  };
}

export function setStudentProfile(state, { name, avatar }) {
  return {
    ...state,
    studentName: name !== undefined ? name : state.studentName,
    studentAvatar: avatar !== undefined ? avatar : state.studentAvatar
  };
}

export function toggleEditorFirstMode(state) {
  return {
    ...state,
    editorFirstMode: !state.editorFirstMode
  };
}

export function toggleFocusIdeMode(state) {
  return {
    ...state,
    focusIdeMode: !state.focusIdeMode
  };
}

export function setTheme(state, theme) {
  return {
    ...state,
    theme: theme || 'dark'
  };
}

/* ==========================================================================
   OFFLINE MULTI-STUDENT PROFILE & SHIFT PERSISTENCE (LocalStorage)
   ========================================================================== */

export function listStudentProfiles(storage = null) {
  try {
    const store = storage || (typeof window !== 'undefined' ? window.localStorage : null);
    if (!store || !store.getItem) return [];

    const raw = store.getItem(PROFILES_INDEX_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    }

    // Auto-migrate from legacy single state if present
    const legacyRaw = store.getItem(STORAGE_KEY);
    if (legacyRaw) {
      try {
        const legacy = JSON.parse(legacyRaw);
        const defaultProfile = {
          id: 'prof_default',
          name: legacy.studentName || 'JS Ninja',
          shift: legacy.shift || '1-Smena (10:30 - 12:00)',
          avatar: legacy.studentAvatar || '⚡',
          pin: '',
          createdAt: Date.now(),
          lastActiveAt: Date.now()
        };
        const profiles = [defaultProfile];
        if (store.setItem) {
          store.setItem(PROFILES_INDEX_KEY, JSON.stringify(profiles));
          store.setItem(ACTIVE_PROFILE_ID_KEY, 'prof_default');
          store.setItem(PROFILE_STATE_PREFIX + 'prof_default', JSON.stringify({
            ...legacy,
            profileId: 'prof_default',
            shift: defaultProfile.shift
          }));
        }
        return profiles;
      } catch (err) {}
    }
  } catch (e) {
    console.warn('Error reading student profiles:', e);
  }
  return [];
}

export function getActiveProfileId(storage = null) {
  try {
    const store = storage || (typeof window !== 'undefined' ? window.localStorage : null);
    if (store && store.getItem) {
      const id = store.getItem(ACTIVE_PROFILE_ID_KEY);
      if (id) return id;
    }
    const profiles = listStudentProfiles(store);
    return profiles.length > 0 ? profiles[0].id : 'prof_default';
  } catch (e) {
    return 'prof_default';
  }
}

export function setActiveProfileId(profileId, storage = null) {
  try {
    const store = storage || (typeof window !== 'undefined' ? window.localStorage : null);
    if (store && store.setItem) {
      store.setItem(ACTIVE_PROFILE_ID_KEY, profileId);
    }
  } catch (e) {}
}

export function registerStudentProfile({ name, shift, avatar, pin }, storage = null) {
  const store = storage || (typeof window !== 'undefined' ? window.localStorage : null);
  const profiles = listStudentProfiles(store);

  const cleanName = (name || '').trim() || 'JS Ninja';
  const cleanShift = shift || '1-Smena (10:30 - 12:00)';
  const cleanAvatar = avatar || '⚡';
  const cleanPin = (pin || '').trim();

  const id = 'prof_' + Date.now() + '_' + Math.random().toString(36).substring(2, 6);
  const newProfile = {
    id,
    name: cleanName,
    shift: cleanShift,
    avatar: cleanAvatar,
    pin: cleanPin,
    createdAt: Date.now(),
    lastActiveAt: Date.now()
  };

  const freshState = {
    ...createInitialState(),
    profileId: id,
    studentName: cleanName,
    studentAvatar: cleanAvatar,
    shift: cleanShift,
    stars: 0,
    completedLessons: [],
    badges: []
  };

  const updatedProfiles = [...profiles, newProfile];

  if (store && store.setItem) {
    store.setItem(PROFILES_INDEX_KEY, JSON.stringify(updatedProfiles));
    store.setItem(ACTIVE_PROFILE_ID_KEY, id);
    store.setItem(PROFILE_STATE_PREFIX + id, JSON.stringify(freshState));
    store.setItem(STORAGE_KEY, JSON.stringify(freshState));
  }

  return { profile: newProfile, state: freshState };
}

export function loginStudentProfile(profileId, pin = '', storage = null) {
  const store = storage || (typeof window !== 'undefined' ? window.localStorage : null);
  const profiles = listStudentProfiles(store);
  const target = profiles.find(p => p.id === profileId);

  if (!target) {
    return { success: false, error: 'NOT_FOUND' };
  }

  if (target.pin && target.pin !== pin) {
    return { success: false, error: 'INCORRECT_PIN' };
  }

  // Update last active
  const updatedProfiles = profiles.map(p => {
    if (p.id === profileId) {
      return { ...p, lastActiveAt: Date.now() };
    }
    return p;
  });

  if (store && store.setItem) {
    store.setItem(PROFILES_INDEX_KEY, JSON.stringify(updatedProfiles));
    store.setItem(ACTIVE_PROFILE_ID_KEY, profileId);
  }

  const loadedState = loadProfileState(profileId, store);
  if (store && store.setItem) {
    store.setItem(STORAGE_KEY, JSON.stringify(loadedState));
  }

  return { success: true, profile: target, state: loadedState };
}

export function loadProfileState(profileId, storage = null) {
  try {
    const store = storage || (typeof window !== 'undefined' ? window.localStorage : null);
    if (!store || !store.getItem) return createInitialState();

    const raw = store.getItem(PROFILE_STATE_PREFIX + profileId);
    if (raw) {
      const parsed = JSON.parse(raw);
      return {
        ...createInitialState(),
        ...parsed,
        profileId
      };
    }
  } catch (e) {
    console.warn(`Error loading profile state ${profileId}:`, e);
  }
  return createInitialState();
}

export function saveProfileState(profileId, state, storage = null) {
  try {
    const store = storage || (typeof window !== 'undefined' ? window.localStorage : null);
    if (store && store.setItem) {
      const toSave = {
        ...state,
        profileId
      };
      store.setItem(PROFILE_STATE_PREFIX + profileId, JSON.stringify(toSave));
    }
  } catch (e) {
    console.warn(`Error saving profile state ${profileId}:`, e);
  }
}

export function deleteStudentProfile(profileId, storage = null) {
  const store = storage || (typeof window !== 'undefined' ? window.localStorage : null);
  if (!store) return false;

  const profiles = listStudentProfiles(store);
  const filtered = profiles.filter(p => p.id !== profileId);

  if (store.setItem) {
    store.setItem(PROFILES_INDEX_KEY, JSON.stringify(filtered));
  }
  if (store.removeItem) {
    store.removeItem(PROFILE_STATE_PREFIX + profileId);
  }

  const activeId = getActiveProfileId(store);
  if (activeId === profileId) {
    const fallbackId = filtered.length > 0 ? filtered[0].id : 'prof_default';
    setActiveProfileId(fallbackId, store);
  }
  return true;
}

export function exportClassroomBackup(storage = null) {
  const store = storage || (typeof window !== 'undefined' ? window.localStorage : null);
  const profiles = listStudentProfiles(store);
  const backup = {
    app: 'CodeCraft_JS_Offline',
    version: '2.0',
    exportedAt: new Date().toISOString(),
    profiles: profiles.map(p => {
      const pState = loadProfileState(p.id, store);
      return {
        profile: p,
        state: pState
      };
    })
  };
  return JSON.stringify(backup, null, 2);
}

export function importClassroomBackup(jsonString, storage = null) {
  try {
    const data = JSON.parse(jsonString);
    if (!data || !Array.isArray(data.profiles)) {
      return { success: false, error: 'INVALID_BACKUP_FORMAT' };
    }

    const store = storage || (typeof window !== 'undefined' ? window.localStorage : null);
    if (!store || !store.setItem) return { success: false, error: 'NO_STORAGE' };

    const existingProfiles = listStudentProfiles(store);
    const existingIds = new Set(existingProfiles.map(p => p.id));

    let importedCount = 0;
    const mergedProfiles = [...existingProfiles];

    for (const item of data.profiles) {
      if (!item.profile || !item.profile.id) continue;
      const p = item.profile;
      const s = item.state || createInitialState();

      if (!existingIds.has(p.id)) {
        mergedProfiles.push(p);
        existingIds.add(p.id);
      }
      store.setItem(PROFILE_STATE_PREFIX + p.id, JSON.stringify(s));
      importedCount++;
    }

    store.setItem(PROFILES_INDEX_KEY, JSON.stringify(mergedProfiles));
    return { success: true, count: importedCount };
  } catch (e) {
    return { success: false, error: e.message };
  }
}

export function saveStateToStorage(state, storage = null) {
  try {
    const store = storage || (typeof window !== 'undefined' ? window.localStorage : null);
    if (store && store.setItem) {
      store.setItem(STORAGE_KEY, JSON.stringify(state));
      if (state.profileId) {
        saveProfileState(state.profileId, state, store);
      }
    }
  } catch (e) {
    console.warn('Could not save state to storage:', e);
  }
}

export function loadStateFromStorage(storage = null) {
  try {
    const store = storage || (typeof window !== 'undefined' ? window.localStorage : null);
    if (!store || !store.getItem) {
      return createInitialState();
    }

    const activeId = getActiveProfileId(store);
    if (activeId) {
      const pState = loadProfileState(activeId, store);
      if (pState && pState.studentName) {
        return pState;
      }
    }

    const saved = store.getItem(STORAGE_KEY);
    if (!saved) {
      return createInitialState();
    }

    const parsed = JSON.parse(saved);
    return {
      ...createInitialState(),
      ...parsed
    };
  } catch (e) {
    console.warn('Could not load state from storage:', e);
    return createInitialState();
  }
}
