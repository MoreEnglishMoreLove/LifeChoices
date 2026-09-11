/**
 * MORE ENGLISH MORE LOVE - Cryptographic / Mathematical Validation Engine
 * Teacher: Jaidaa Saqer (جيداء صقر)
 *
 * Fully client-side, zero external servers, zero API costs.
 * Generates and mathematically validates exclusive activation codes in MEML-XXXX-XXXX format.
 */

// Secret internal mathematical salt known only to the application logic
const INTERNAL_SECRET_SALT = "MEML_JAIDAA_SAQER_MATH_SALT_V1_2026_SECURE_KEY";

// Safe alphabet excluding ambiguous characters like 0/O, 1/I/L
const ALPHABET = "23456789ABCDEFGHJKMNPQRSTUVWXYZ";

/**
 * Normalizes student name to prevent validation mismatch from minor typos,
 * Arabic hamza variations, spaces, or diacritics.
 */
export function normalizeStudentName(rawName: string): string {
  if (!rawName) return "";

  let name = rawName.trim().toLowerCase();

  // Remove Arabic diacritics (tashkeel)
  name = name.replace(/[\u064B-\u065F\u0670]/g, "");

  // Normalize Arabic letters
  name = name
    .replace(/[أإآء]/g, "ا")
    .replace(/ة/g, "ه")
    .replace(/ى/g, "ي")
    .replace(/ؤ/g, "و")
    .replace(/ئ/g, "ي");

  // Collapse multiple spaces into single space
  name = name.replace(/\s+/g, " ");

  return name;
}

/**
 * Deterministic mathematical 64-bit mixer based on FNV-1a & Murmur-style bit rotations
 */
function computeMathHash(input: string, seed: number = 0x811c9dc5): { h1: number; h2: number } {
  let h1 = seed >>> 0;
  let h2 = 0x9e3779b9 >>> 0;

  for (let i = 0; i < input.length; i++) {
    const code = input.charCodeAt(i);

    // Round 1
    h1 ^= code;
    h1 = Math.imul(h1, 0x5bd1e995);
    h1 ^= h1 >>> 15;
    h1 = (h1 << 5) | (h1 >>> 27);

    // Round 2
    h2 ^= code ^ (h1 >>> 8);
    h2 = Math.imul(h2, 0xcc9e2d51);
    h2 ^= h2 >>> 13;
    h2 = (h2 << 7) | (h2 >>> 25);
  }

  // Final avalanche mix
  h1 ^= h2 >>> 16;
  h1 = Math.imul(h1, 0x85ebca6b);
  h1 ^= h1 >>> 13;
  h1 = Math.imul(h1, 0xc2b2ae35);
  h1 ^= h1 >>> 16;

  h2 ^= h1 >>> 16;
  h2 = Math.imul(h2, 0x7feb352d);
  h2 ^= h2 >>> 15;
  h2 = Math.imul(h2, 0x846ca68b);
  h2 ^= h2 >>> 16;

  return { h1: h1 >>> 0, h2: h2 >>> 0 };
}

/**
 * Generates an exclusive activation code for a student name.
 * Format: MEML-XXXX-XXXX
 */
export function generateStudentCode(studentName: string): string {
  const normalized = normalizeStudentName(studentName);
  if (!normalized) return "";

  const salted = `${INTERNAL_SECRET_SALT}::${normalized}::${INTERNAL_SECRET_SALT}`;
  const { h1, h2 } = computeMathHash(salted);

  const base = ALPHABET.length; // 30 characters
  let part1 = "";
  let part2 = "";

  let v1 = h1;
  for (let i = 0; i < 4; i++) {
    part1 += ALPHABET[v1 % base];
    v1 = Math.floor(v1 / base);
  }

  let v2 = h2;
  for (let i = 0; i < 4; i++) {
    part2 += ALPHABET[v2 % base];
    v2 = Math.floor(v2 / base);
  }

  return `MEML-${part1}-${part2}`;
}

/**
 * Validates a student name against an entered code.
 * Tolerates case differences, spaces, and missing dashes.
 */
export function verifyStudentCode(studentName: string, enteredCode: string): boolean {
  if (!studentName || !enteredCode) return false;

  const expectedCode = generateStudentCode(studentName);
  if (!expectedCode) return false;

  // Clean entered code
  const cleanEntered = enteredCode
    .trim()
    .toUpperCase()
    .replace(/[^A-Z0-9]/g, "");

  const cleanExpected = expectedCode.replace(/[^A-Z0-9]/g, "");

  return cleanEntered === cleanExpected;
}

/**
 * Standard duration for student subscription: 180 days (6 months) in milliseconds
 */
export const SUBSCRIPTION_DURATION_MS = 180 * 24 * 60 * 60 * 1000;

const STORAGE_KEY_SESSION = "meml_student_session";
const STORAGE_KEY_DEVICE = "meml_device_signature";
const STORAGE_KEY_HISTORY = "meml_teacher_generated_history";

/**
 * Retrieves or initializes unique device fingerprint
 */
export function getOrCreateDeviceId(): string {
  let deviceId = localStorage.getItem(STORAGE_KEY_DEVICE);
  if (!deviceId) {
    deviceId = "DEV-" + Math.random().toString(36).substring(2, 10).toUpperCase() + "-" + Date.now().toString(36).toUpperCase();
    localStorage.setItem(STORAGE_KEY_DEVICE, deviceId);
  }
  return deviceId;
}

/**
 * Saves authenticated student session to localStorage
 */
export function saveStudentSession(studentName: string, activationCode: string): {
  studentName: string;
  activationCode: string;
  activatedAt: number;
  expiresAt: number;
  deviceId: string;
} {
  const now = Date.now();
  const session = {
    studentName: studentName.trim(),
    activationCode: activationCode.trim().toUpperCase(),
    activatedAt: now,
    expiresAt: now + SUBSCRIPTION_DURATION_MS,
    deviceId: getOrCreateDeviceId(),
  };

  localStorage.setItem(STORAGE_KEY_SESSION, JSON.stringify(session));
  return session;
}

/**
 * Reads stored session and validates if it is still valid and not expired
 */
export function getStoredStudentSession(): {
  isValid: boolean;
  isExpired: boolean;
  session: {
    studentName: string;
    activationCode: string;
    activatedAt: number;
    expiresAt: number;
    deviceId: string;
  } | null;
  remainingMs: number;
} {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_SESSION);
    if (!raw) {
      return { isValid: false, isExpired: false, session: null, remainingMs: 0 };
    }

    const session = JSON.parse(raw);
    if (!session || !session.studentName || !session.activationCode || !session.expiresAt) {
      return { isValid: false, isExpired: false, session: null, remainingMs: 0 };
    }

    // Verify mathematical validity
    const mathValid = verifyStudentCode(session.studentName, session.activationCode);
    if (!mathValid) {
      return { isValid: false, isExpired: false, session: null, remainingMs: 0 };
    }

    const now = Date.now();
    const remainingMs = session.expiresAt - now;

    if (remainingMs <= 0) {
      return { isValid: false, isExpired: true, session, remainingMs: 0 };
    }

    return { isValid: true, isExpired: false, session, remainingMs };
  } catch {
    return { isValid: false, isExpired: false, session: null, remainingMs: 0 };
  }
}

/**
 * Clear session (logout)
 */
export function clearStudentSession(): void {
  localStorage.removeItem(STORAGE_KEY_SESSION);
}

/**
 * Teacher Admin PIN specified by user: b13a15m17
 */
export const TEACHER_ADMIN_PIN = "b13a15m17";

/**
 * Teacher WhatsApp number
 */
export const TEACHER_WHATSAPP_NUMBER = "+963933036079";
export const TEACHER_WHATSAPP_LINK = "https://wa.me/963933036079";

/**
 * Saved codes history for teacher
 */
export function getTeacherCodesHistory(): Array<{
  id: string;
  studentName: string;
  code: string;
  createdAt: number;
}> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_HISTORY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveTeacherCodeToHistory(studentName: string, code: string): void {
  try {
    const history = getTeacherCodesHistory();
    // Prepend new item
    const newItem = {
      id: "REC-" + Date.now().toString(36),
      studentName: studentName.trim(),
      code,
      createdAt: Date.now(),
    };
    // Keep last 200 items
    const updated = [newItem, ...history.filter(h => h.code !== code)].slice(0, 200);
    localStorage.setItem(STORAGE_KEY_HISTORY, JSON.stringify(updated));
  } catch {
    // ignore
  }
}
