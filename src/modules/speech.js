/**
 * Speech Narrator Module
 * Uses Web Speech API to read lessons and challenge missions aloud to kids.
 */

let currentUtterance = null;

export function speakText(text, onEndCallback = null) {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    console.warn('Speech synthesis not supported in this environment');
    return;
  }

  // Stop any ongoing speech
  window.speechSynthesis.cancel();

  if (!text) return;

  // Clean HTML tags or formatting
  const plainText = text.replace(/<[^>]+>/g, '').replace(/[#*`_]/g, '');

  const utterance = new SpeechSynthesisUtterance(plainText);
  utterance.rate = 0.95; // slightly slower, clear for kids
  utterance.pitch = 1.1; // friendly, upbeat

  // Pick a friendly English voice if available
  const voices = window.speechSynthesis.getVoices();
  const friendlyVoice = voices.find(
    v => (v.name.includes('Google') || v.name.includes('Samantha') || v.name.includes('Natural') || v.name.includes('Zira')) && v.lang.startsWith('en')
  ) || voices.find(v => v.lang.startsWith('en'));

  if (friendlyVoice) {
    utterance.voice = friendlyVoice;
  }

  utterance.onend = () => {
    currentUtterance = null;
    if (onEndCallback) onEndCallback();
  };

  utterance.onerror = () => {
    currentUtterance = null;
    if (onEndCallback) onEndCallback();
  };

  currentUtterance = utterance;
  window.speechSynthesis.speak(utterance);
}

export function stopSpeaking() {
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    currentUtterance = null;
  }
}

export function isSpeaking() {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) return false;
  return window.speechSynthesis.speaking;
}
