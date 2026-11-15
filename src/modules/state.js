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
    currentLessonId: 'html-bones',
    teacherMode: false,
    audioEnabled: true,
    theme: 'candy', // 'candy' | 'arcade' | 'space' | 'sunshine'
    customSandboxCode: `<!DOCTYPE html>
<html>
  <head>
    <style>
      body {
        font-family: 'Comic Sans MS', 'Chalkboard SE', cursive, sans-serif;
        background: linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%);
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 0;
        text-align: center;
      }
      .card {
        background: white;
        padding: 30px;
        border-radius: 20px;
        box-shadow: 0 10px 25px rgba(0,0,0,0.15);
        max-width: 320px;
      }
      h1 { color: #ff4757; }
      button {
        background: #2ed573;
        color: white;
        border: none;
        padding: 12px 24px;
        font-size: 18px;
        border-radius: 12px;
        cursor: pointer;
        transition: transform 0.2s;
      }
      button:hover {
        transform: scale(1.1);
      }
    </style>
  </head>
  <body>
    <div class="card">
      <h1>🚀 My Secret Lab!</h1>
      <p>I can build anything here!</p>
      <button onclick="alert('Superpower Activated! ⚡')">Press Me</button>
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

  // Check for auto-unlocked badges
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
