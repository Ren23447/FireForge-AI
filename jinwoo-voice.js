// ============================================================
//  JINWOO SUNG — VOICE AUDIO MANIFEST
//  Each entry: (raw GitHub link) [filename] (spoken text)
//  The app plays the MP3 when Jinwoo speaks that line.
//  Mouth animation starts on play, stops when audio ends.
//  If an MP3 fails to load, the app falls back to TTS voice.
// ============================================================

const JINWOO_VOICE_MANIFEST = [

  // ── GREETINGS ─────────────────────────────────────────────
  {
    dialogueId: "greet_1",
    url:  "https://raw.githubusercontent.com/Ren23447/Jinwoo-Sung-s-voice/main/JS-greet_1.mp3",
    name: "JS-greet_1",
    text: "You made it. Let's not waste the daylight."
  },
  {
    dialogueId: "greet_2",
    url:  "https://raw.githubusercontent.com/Ren23447/Jinwoo-Sung-s-voice/main/JS-greet_2.mp3",
    name: "JS-greet_2",
    text: "Good. Standing here means you haven't quit yet."
  },
  {
    dialogueId: "greet_3",
    url:  "https://raw.githubusercontent.com/Ren23447/Jinwoo-Sung-s-voice/main/JS-greet_3.mp3",
    name: "JS-greet_3",
    text: "Back again. That's exactly the kind of consistency that separates hunters from everyone else."
  },
  {
    dialogueId: "greet_4",
    url:  "https://raw.githubusercontent.com/Ren23447/Jinwoo-Sung-s-voice/main/JS-greet_4.mp3",
    name: "JS-greet_4",
    text: "I was wondering when you'd show up."
  },
  {
    dialogueId: "greet_5",
    url:  "https://raw.githubusercontent.com/Ren23447/Jinwoo-Sung-s-voice/main/JS-greeting.mp3",
    name: "JS-greeting",
    text: "No need to bow. Just show up, and work."
  },

  // ── OPENING / START TRAINING ───────────────────────────────
  {
    dialogueId: "opening_1",
    url:  "https://raw.githubusercontent.com/Ren23447/Jinwoo-Sung-s-voice/main/JS-opening1.mp3",
    name: "JS-opening1",
    text: "Then let's begin. Every session is another gate you clear."
  },
  {
    dialogueId: "opening_2",
    url:  "https://raw.githubusercontent.com/Ren23447/Jinwoo-Sung-s-voice/main/JS-opening2.mp3",
    name: "JS-opening2",
    text: "Good. Weakness only stays in a body that stops moving."
  },
  {
    dialogueId: "opening_3",
    url:  "https://raw.githubusercontent.com/Ren23447/Jinwoo-Sung-s-voice/main/JS-opening3.mp3",
    name: "JS-opening3",
    text: "Today's training starts now. No hesitation."
  },
  {
    dialogueId: "opening_4",
    url:  "https://raw.githubusercontent.com/Ren23447/Jinwoo-Sung-s-voice/main/JS-opening4.mp3",
    name: "JS-opening4",
    text: "Focus. The real growth happens here — not in the talking."
  },

  // ── ENCOURAGEMENT ─────────────────────────────────────────
  {
    dialogueId: "enc_1",
    url:  "https://raw.githubusercontent.com/Ren23447/Jinwoo-Sung-s-voice/main/JS-ENC1.mp3",
    name: "JS-ENC1",
    text: "Excellent. That's the kind of effort that turns an E-rank into an S-rank."
  },
  {
    dialogueId: "enc_2",
    url:  "https://raw.githubusercontent.com/Ren23447/Jinwoo-Sung-s-voice/main/JS-ENC2.mp3",
    name: "JS-ENC2",
    text: "Stay consistent. Power like mine wasn't given to me — it was built, one day at a time."
  },
  {
    dialogueId: "enc_5",
    url:  "https://raw.githubusercontent.com/Ren23447/Jinwoo-Sung-s-voice/main/JS-ENC5.mp3",
    name: "JS-ENC5",
    text: "Discipline always wins. Talent only decides how fast."
  },

  // ── COMPLETION ────────────────────────────────────────────
  {
    dialogueId: "complete_1",
    url:  "https://raw.githubusercontent.com/Ren23447/Jinwoo-Sung-s-voice/main/JS-COMPLETE1.mp3",
    name: "JS-COMPLETE1",
    text: "Mission complete. Rest now — even monarchs recover."
  },
  {
    dialogueId: "complete_2",
    url:  "https://raw.githubusercontent.com/Ren23447/Jinwoo-Sung-s-voice/main/JS-COMPLETE2.mp3",
    name: "JS-COMPLETE2",
    text: "Good work. Recover well; tomorrow asks more of you."
  },

  // ── INACTIVITY / SKIPPED ──────────────────────────────────
  {
    dialogueId: "inactivity_1",
    url:  "https://raw.githubusercontent.com/Ren23447/Jinwoo-Sung-s-voice/main/JS-INACTIVE1.mp3",
    name: "JS-INACTIVE1",
    text: "You missed today's training. Noted. Now get back up."
  },
  {
    dialogueId: "inactivity_2",
    url:  "https://raw.githubusercontent.com/Ren23447/Jinwoo-Sung-s-voice/main/JS-INACTIVE2.mp3",
    name: "JS-INACTIVE2",
    text: "Tomorrow is another opportunity. I've wasted worse days than this one."
  },
  {
    dialogueId: "inactivity_4",
    url:  "https://raw.githubusercontent.com/Ren23447/Jinwoo-Sung-s-voice/main/JS-INACTIVE4.mp3",
    name: "JS-INACTIVE4",
    text: "Giving up? I've been closer to the end than you'll ever know. Get up."
  },

  // ── IDENTITY ──────────────────────────────────────────────
  {
    dialogueId: "identity_1",
    url:  "https://raw.githubusercontent.com/Ren23447/Jinwoo-Sung-s-voice/main/JS-IDENTITY1.mp3",
    name: "JS-IDENTITY1",
    text: "I am Sung Jinwoo. Once the World's Weakest Hunter. Now, I'm here to make sure you never have to be."
  },
  {
    dialogueId: "identity_2",
    url:  "https://raw.githubusercontent.com/Ren23447/Jinwoo-Sung-s-voice/main/JS-IDENTITY2.mp3",
    name: "JS-IDENTITY2",
    text: "They called me the World's Weakest Hunter. I wore that name until it broke under the weight of how far I climbed."
  },

  // ── SPECIAL ───────────────────────────────────────────────
  {
    dialogueId: "training_awaits",
    url:  "https://raw.githubusercontent.com/Ren23447/Jinwoo-Sung-s-voice/main/JS-trainingAwaits.mp3",
    name: "JS-trainingAwaits",
    text: "Training awaits."
  },

];

// ── Quick lookup map: dialogueId → entry ──────────────────
// Used by the app: JINWOO_AUDIO_MAP["greet_1"].url  →  the raw MP3 link
const JINWOO_AUDIO_MAP = Object.fromEntries(
  JINWOO_VOICE_MANIFEST.map(entry => [entry.dialogueId, entry])
);

// ── How the app uses this file ────────────────────────────
//
//  speak(id, fallbackText) {
//    const entry = JINWOO_AUDIO_MAP[id];
//    if (entry) {
//      const audio = new Audio(entry.url);      // play the real recording
//      audio.onplay   = () => { isSpeaking = true;  }; // start mouth anim
//      audio.onended  = () => { isSpeaking = false; }; // stop  mouth anim
//      audio.onerror  = () => speakFallback(fallbackText); // TTS backup
//      audio.play();
//    } else {
//      speakFallback(fallbackText);             // no clip → device TTS
//    }
//  }
