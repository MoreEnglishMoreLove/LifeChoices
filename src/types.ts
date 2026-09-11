export interface StudentSession {
  studentName: string;
  activationCode: string;
  activatedAt: number; // timestamp in ms
  expiresAt: number;   // timestamp in ms (activatedAt + 180 days)
  deviceId: string;
}

export interface GeneratedCodeRecord {
  id: string;
  studentName: string;
  normalizedName: string;
  code: string;
  createdAt: number;
  notes?: string;
}

export interface VocabularyItem {
  id: string;
  word: string;
  pos: string; // part of speech: n., v., adj., adv.
  meaningAr: string;
  exampleEn?: string;
  exampleAr?: string;
  pronunciation?: string;
}

export interface PhrasalVerbItem {
  id: string;
  verb: string;
  meaningEn: string;
  meaningAr: string;
  exampleEn: string;
  exampleAr: string;
}

export interface WordFamilyItem {
  root: string;
  meaningAr: string;
  forms: {
    word: string;
    pos: string;
    meaningAr: string;
  }[];
}

export interface HomophonePair {
  id: string;
  word1: string;
  meaning1Ar: string;
  word2: string;
  meaning2Ar: string;
  word3?: string;
  meaning3Ar?: string;
  exampleSentence: string;
  exampleSentenceAr: string;
  correctWord: string;
  options: string[];
}

export interface GrammarRule {
  id: string;
  titleEn: string;
  titleAr: string;
  structure: string;
  usageAr: string;
  examples: {
    en: string;
    ar: string;
    highlight?: string;
  }[];
  keyWords?: string[];
}

export interface DialogueSpeaker {
  speaker: string;
  textEn: string;
  textAr: string;
  audioTime?: number;
}

export interface ComprehensionQuestion {
  id: string;
  questionEn: string;
  questionAr: string;
  modelAnswerEn: string;
  modelAnswerAr: string;
  options?: string[];
  correctOptionIndex?: number;
}

export interface WorksheetItem {
  id: number;
  titleEn: string;
  titleAr: string;
  descriptionEn: string;
  descriptionAr: string;
  sections: {
    title: string;
    instructionsEn: string;
    instructionsAr: string;
    content: any;
  }[];
}
