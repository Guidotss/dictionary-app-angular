

export interface Definition {
  word:       string;
  phonetic:   string;
  phonetics:  Phonetic[];
  meanings:   Meaning[];
  license:    License;
  sourceUrls: string[];
}

export interface License {
  name: string;
  url:  string;
}

export interface Meaning {
  partOfSpeech: string;
  definitions:  DefinitionElement[];
  synonyms:     string[];
  antonyms:     any[];
}

export interface DefinitionElement {
  definition: string;
  synonyms:   any[];
  antonyms:   any[];
  example?:   string;
}

export interface Phonetic {
  text:       string;
  audio:      string;
  sourceUrl?: string;
  license?:   License;
}
