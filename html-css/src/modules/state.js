/**
 * State Management Module
 * Pure immutable state transitions for progress, badges, preferences,
 * and offline multi-student shift profile management.
 */

const STORAGE_KEY = 'codecraft_kids_v1_state';
const PROFILES_INDEX_KEY = 'codecraft_kids_profiles_index_v2';
const ACTIVE_PROFILE_ID_KEY = 'codecraft_kids_active_profile_id_v2';
const PROFILE_STATE_PREFIX = 'codecraft_kids_profile_state_';

export const CLASS_SHIFTS = [
  { id: 'shift-1', labelUz: '1-Smena (10:30 – 12:00)', labelEn: 'Shift 1 (10:30 – 12:00)', value: '1-Smena (10:30 - 12:00)', time: '10:30 - 12:00' },
  { id: 'shift-2', labelUz: '2-Smena (14:00 – 15:30)', labelEn: 'Shift 2 (14:00 – 15:30)', value: '2-Smena (14:00 - 15:30)', time: '14:00 - 15:30' },
  { id: 'shift-3', labelUz: '3-Smena (15:30 – 17:00)', labelEn: 'Shift 3 (15:30 – 17:00)', value: '3-Smena (15:30 - 17:00)', time: '15:30 - 17:00' }
];

export function createInitialState() {
  return {
    studentName: 'Code Cadet',
    studentAvatar: '🚀',
    shift: '1-Smena (10:30 - 12:00)',
    profileId: 'prof_default',
    stars: 0,
    completedLessons: [],
    badges: [],
    currentLessonId: 'theme-1-tags',
    teacherMode: false,
    audioEnabled: true,
    editorFirstMode: false,
    focusIdeMode: false,
    lang: 'en', // 'en' | 'uz'
    theme: 'dark',
    customSandboxCode: `<!DOCTYPE html>
<html>
  <head>
    <style>
      body {
        font-family: sans-serif;
        background: #12131a;
        color: #f1f5f9;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
        margin: 0;
        text-align: center;
      }
      .card {
        background: #1c1e2f;
        padding: 30px;
        border-radius: 16px;
        border: 2px solid #7c6cf7;
        box-shadow: 0 10px 25px rgba(0,0,0,0.5);
        max-width: 320px;
      }
      h1 { color: #2dd4bf; }
      button {
        background: #7c6cf7;
        color: white;
        border: none;
        padding: 10px 20px;
        font-size: 16px;
        border-radius: 8px;
        cursor: pointer;
      }
    </style>
  </head>
  <body>
    <div class="card">
      <h1>Hello CodeCraft!</h1>
      <p>Edit this code in the sandbox to build anything you imagine!</p>
      <button onclick="alert('Great job!')">Click Me</button>
    </div>
  </body>
</html>`
  };
}

export function completeLesson(state, lessonId, starsEarned = 3) {
  if (state.completedLessons.includes(lessonId)) {
    return state;
  }

  const updatedCompleted = [...state.completedLessons, lessonId];
  const updatedStars = state.stars + starsEarned;

  let updatedBadges = [...state.badges];
  if (updatedCompleted.length >= 1 && !updatedBadges.includes('first-code')) {
    updatedBadges.push('first-code');
  }
  if (updatedCompleted.length >= 5 && !updatedBadges.includes('apprentice')) {
    updatedBadges.push('apprentice');
  }
  if (updatedCompleted.length >= 10 && !updatedBadges.includes('master-crafter')) {
    updatedBadges.push('master-crafter');
  }
  if (updatedCompleted.length >= 24 && !updatedBadges.includes('web-master')) {
    updatedBadges.push('web-master');
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
    lang: state.lang === 'uz' ? 'en' : 'uz'
  };
}

export function setLanguage(state, lang) {
  return {
    ...state,
    lang: lang === 'uz' ? 'uz' : 'en'
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
    theme
  };
}

export function setStudentProfile(state, { name, avatar }) {
  return {
    ...state,
    studentName: name ?? state.studentName,
    studentAvatar: avatar ?? state.studentAvatar
  };
}

// ===================================================================
// Multi-Student Shift Profile & Storage Engine (100% Offline)
// ===================================================================

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
          name: legacy.studentName || 'Code Cadet',
          shift: legacy.shift || '1-Smena (10:30 - 12:00)',
          avatar: legacy.studentAvatar || '🚀',
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

  const cleanName = (name || '').trim() || 'Code Cadet';
  const cleanShift = shift || '1-Smena (10:30 - 12:00)';
  const cleanAvatar = avatar || '🚀';
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

  if (store && store.setItem) {
    const updatedProfiles = [...profiles, newProfile];
    store.setItem(PROFILES_INDEX_KEY, JSON.stringify(updatedProfiles));
    store.setItem(ACTIVE_PROFILE_ID_KEY, id);
    store.setItem(PROFILE_STATE_PREFIX + id, JSON.stringify(freshState));
    store.setItem(STORAGE_KEY, JSON.stringify(freshState)); // sync legacy
  }

  return { profile: newProfile, state: freshState };
}

export function loginStudentProfile(profileId, pin = '', storage = null) {
  const store = storage || (typeof window !== 'undefined' ? window.localStorage : null);
  const profiles = listStudentProfiles(store);
  const profile = profiles.find(p => p.id === profileId);

  if (!profile) {
    return { success: false, error: 'NOT_FOUND' };
  }

  if (profile.pin && profile.pin !== (pin || '').trim()) {
    return { success: false, error: 'INCORRECT_PIN' };
  }

  profile.lastActiveAt = Date.now();
  if (store && store.setItem) {
    store.setItem(PROFILES_INDEX_KEY, JSON.stringify(profiles));
    store.setItem(ACTIVE_PROFILE_ID_KEY, profileId);
  }

  const state = loadProfileState(profileId, store);
  if (store && store.setItem) {
    store.setItem(STORAGE_KEY, JSON.stringify(state)); // sync legacy
  }

  return { success: true, profile, state };
}

export function loadProfileState(profileId, storage = null) {
  try {
    const store = storage || (typeof window !== 'undefined' ? window.localStorage : null);
    if (store && store.getItem) {
      const data = store.getItem(PROFILE_STATE_PREFIX + profileId);
      if (data) {
        return {
          ...createInitialState(),
          ...JSON.parse(data)
        };
      }
    }
  } catch (e) {
    console.warn('Could not load profile state:', e);
  }
  return createInitialState();
}

export function saveProfileState(profileId, state, storage = null) {
  try {
    const store = storage || (typeof window !== 'undefined' ? window.localStorage : null);
    if (store && store.setItem) {
      store.setItem(PROFILE_STATE_PREFIX + profileId, JSON.stringify(state));
      const activeId = getActiveProfileId(store);
      if (activeId === profileId) {
        store.setItem(STORAGE_KEY, JSON.stringify(state));
      }
    }
  } catch (e) {
    console.warn('Could not save profile state:', e);
  }
}

export function deleteStudentProfile(profileId, storage = null) {
  try {
    const store = storage || (typeof window !== 'undefined' ? window.localStorage : null);
    if (!store || !store.setItem) return false;

    let profiles = listStudentProfiles(store);
    profiles = profiles.filter(p => p.id !== profileId);
    store.setItem(PROFILES_INDEX_KEY, JSON.stringify(profiles));

    if (store.removeItem) {
      store.removeItem(PROFILE_STATE_PREFIX + profileId);
    }

    const activeId = getActiveProfileId(store);
    if (activeId === profileId) {
      if (profiles.length > 0) {
        store.setItem(ACTIVE_PROFILE_ID_KEY, profiles[0].id);
        const nextState = loadProfileState(profiles[0].id, store);
        store.setItem(STORAGE_KEY, JSON.stringify(nextState));
      } else {
        if (store.removeItem) {
          store.removeItem(ACTIVE_PROFILE_ID_KEY);
          store.removeItem(STORAGE_KEY);
        }
      }
    }
    return true;
  } catch (e) {
    return false;
  }
}

export function saveStateToStorage(state, storage = null) {
  try {
    const store = storage || (typeof window !== 'undefined' ? window.localStorage : null);
    if (store && store.setItem) {
      const profileId = state.profileId || getActiveProfileId(store) || 'prof_default';
      store.setItem(PROFILE_STATE_PREFIX + profileId, JSON.stringify(state));
      store.setItem(STORAGE_KEY, JSON.stringify(state));

      // Update profile metadata if exists
      const raw = store.getItem(PROFILES_INDEX_KEY);
      if (raw) {
        try {
          const profiles = JSON.parse(raw);
          const p = profiles.find(x => x.id === profileId);
          if (p) {
            p.lastActiveAt = Date.now();
            p.name = state.studentName || p.name;
            p.avatar = state.studentAvatar || p.avatar;
            p.shift = state.shift || p.shift;
            store.setItem(PROFILES_INDEX_KEY, JSON.stringify(profiles));
          }
        } catch (err) {}
      }
    }
  } catch (e) {
    console.warn('Could not save state to storage:', e);
  }
}

export function loadStateFromStorage(storage = null) {
  try {
    const store = storage || (typeof window !== 'undefined' ? window.localStorage : null);
    if (store && store.getItem) {
      const activeId = getActiveProfileId(store);
      if (activeId) {
        const profileState = store.getItem(PROFILE_STATE_PREFIX + activeId);
        if (profileState) {
          return {
            ...createInitialState(),
            ...JSON.parse(profileState)
          };
        }
      }

      // Legacy fallback
      const data = store.getItem(STORAGE_KEY);
      if (data) {
        return {
          ...createInitialState(),
          ...JSON.parse(data)
        };
      }
    }
  } catch (e) {
    console.warn('Could not load state from storage:', e);
  }
  return createInitialState();
}

export function exportClassroomBackup(storage = null) {
  const store = storage || (typeof window !== 'undefined' ? window.localStorage : null);
  const profiles = listStudentProfiles(store);
  const states = {};
  profiles.forEach(p => {
    states[p.id] = loadProfileState(p.id, store);
  });
  return JSON.stringify({
    version: 2,
    exportDate: new Date().toISOString(),
    profiles,
    states
  }, null, 2);
}

export function importClassroomBackup(jsonString, storage = null) {
  const store = storage || (typeof window !== 'undefined' ? window.localStorage : null);
  if (!store || !store.setItem) return { success: false, error: 'NO_STORAGE' };

  try {
    const parsed = typeof jsonString === 'string' ? JSON.parse(jsonString) : jsonString;
    if (!parsed || !parsed.profiles || !Array.isArray(parsed.profiles)) {
      return { success: false, error: 'INVALID_FORMAT' };
    }

    const existingProfiles = listStudentProfiles(store);
    const existingMap = new Map(existingProfiles.map(p => [p.id, p]));

    let importedCount = 0;
    parsed.profiles.forEach(p => {
      existingMap.set(p.id, p);
      if (parsed.states && parsed.states[p.id]) {
        store.setItem(PROFILE_STATE_PREFIX + p.id, JSON.stringify(parsed.states[p.id]));
      }
      importedCount++;
    });

    const mergedProfiles = Array.from(existingMap.values());
    store.setItem(PROFILES_INDEX_KEY, JSON.stringify(mergedProfiles));

    if (parsed.profiles.length > 0) {
      const firstId = parsed.profiles[0].id;
      store.setItem(ACTIVE_PROFILE_ID_KEY, firstId);
      if (parsed.states && parsed.states[firstId]) {
        store.setItem(STORAGE_KEY, JSON.stringify(parsed.states[firstId]));
      }
    }

    return { success: true, count: importedCount };
  } catch (e) {
    return { success: false, error: e.message };
  }
}
