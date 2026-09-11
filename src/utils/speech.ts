/**
 * Web Speech API wrapper for native English pronunciation
 * Works offline, completely free, with no API keys.
 */

let speechSynth: SpeechSynthesis | null = null;
if (typeof window !== "undefined" && "speechSynthesis" in window) {
  speechSynth = window.speechSynthesis;
}

export function speakEnglish(text: string, rate: number = 0.9): Promise<void> {
  return new Promise((resolve) => {
    if (!speechSynth || !text) {
      resolve();
      return;
    }

    try {
      speechSynth.cancel(); // Stop any currently playing audio

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "en-US";
      utterance.rate = rate; // slightly slower for educational clarity

      // Attempt to pick an English voice if available
      const voices = speechSynth.getVoices();
      const englishVoice = voices.find(
        (v) => (v.lang.startsWith("en-GB") || v.lang.startsWith("en-US")) && !v.name.includes("Google")
      ) || voices.find((v) => v.lang.startsWith("en"));

      if (englishVoice) {
        utterance.voice = englishVoice;
      }

      utterance.onend = () => resolve();
      utterance.onerror = () => resolve();

      speechSynth.speak(utterance);
    } catch {
      resolve();
    }
  });
}

export function stopSpeaking(): void {
  if (speechSynth) {
    try {
      speechSynth.cancel();
    } catch {
      // ignore
    }
  }
}
