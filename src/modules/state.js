/**
 * State Management Module
 * Pure immutable state transitions for progress, badges, and preferences.
 */

const STORAGE_KEY = 'codecraft_kids_v1_state';

export function createInitialState() {
  return {
    studentName: 'Code Cadet',
    studentAvatar: '🚀',
    stars: 0,
    completedLessons: [],
    badges: [],
    currentLessonId: 'theme-1-tags',
    teacherMode: false,
    audioEnabled: true,
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
        font-weight: bold;
      }
      button:hover { background: #6957ea; }
    </style>
  </head>
  <body>
    <div class="card">
      <h1>🚀 My Secret Lab!</h1>
      <p>Build anything you imagine here!</p>
      <button onclick="alert('⚡ Superpower Activated!')">Click Me</button>
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

  const updatedBadges = [...state.badges];
  if (updatedCompleted.length >= 1 && !updatedBadges.includes('first-code')) {
    updatedBadges.push('first-code');
  }
  if (updatedCompleted.length >= 5 && !updatedBadges.includes('apprentice')) {
    updatedBadges.push('apprentice');
  }
  if (updatedCompleted.length >= 10 && !updatedBadges.includes('master-crafter')) {
    updatedBadges.push('master-crafter');
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
  const nextLang = state.lang === 'uz' ? 'en' : 'uz';
  return {
    ...state,
    lang: nextLang
  };
}

export function setLanguage(state, lang) {
  return {
    ...state,
    lang: lang === 'uz' ? 'uz' : 'en'
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

export function saveStateToStorage(state, storage = null) {
  try {
    const store = storage || (typeof window !== 'undefined' ? window.localStorage : null);
    if (store && store.setItem) {
      store.setItem(STORAGE_KEY, JSON.stringify(state));
    }
  } catch (e) {
    console.warn('Could not save state to storage:', e);
  }
}

export function loadStateFromStorage(storage = null) {
  try {
    const store = storage || (typeof window !== 'undefined' ? window.localStorage : null);
    if (store && store.getItem) {
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
