/* Strands: language list and settings. Course data loads per language from data/<code>.js. */
window.LANGDATA={
 "de": {
  "name": "German",
  "native": "Deutsch",
  "tts": "de-DE",
  "flag": "DE",
  "nounArticles": {
   "der": "m",
   "die": "f",
   "das": "n"
  },
  "nounCaps": true,
  "chars": [
   "ä",
   "ö",
   "ü",
   "ß"
  ],
  "checks": [
   "Verb second.",
   "Nouns: article, capital letter.",
   "Verb last after weil, dass, wenn."
  ],
  "exampleNoun": "die Katze",
  "words": 5192,
  "phrases": 400,
  "grammar": 461,
  "texts": 120,
  "bank": 2030,
  "letters": 0
 },
 "fr": {
  "name": "French",
  "native": "Français",
  "tts": "fr-FR",
  "flag": "FR",
  "nounArticles": {
   "le": "m",
   "la": "f",
   "les": null,
   "l'": null
  },
  "chars": [
   "é",
   "è",
   "ê",
   "à",
   "â",
   "ç",
   "î",
   "ô",
   "û",
   "ù",
   "ë",
   "ï",
   "œ"
  ],
  "checks": [
   "Article and adjective agree with the noun.",
   "Verb ending matches the subject.",
   "Ne … pas around the verb."
  ],
  "exampleNoun": "la chaise",
  "words": 5139,
  "phrases": 400,
  "grammar": 257,
  "texts": 120,
  "bank": 2002,
  "letters": 0
 },
 "ru": {
  "name": "Russian",
  "native": "Русский",
  "tts": "ru-RU",
  "flag": "RU",
  "stressMark": "`",
  "chars": [],
  "checks": [
   "No ‘to be’ in the present.",
   "Possessive and adjective agree in gender.",
   "Feminine object: -а becomes -у."
  ],
  "exampleNoun": "",
  "words": 5122,
  "phrases": 0,
  "grammar": 265,
  "texts": 5,
  "bank": 1983,
  "letters": 33
 },
 "es": {
  "name": "Spanish",
  "native": "Español",
  "tts": "es-ES",
  "flag": "ES",
  "nounArticles": {
   "el": "m",
   "la": "f",
   "los": "m",
   "las": "f"
  },
  "chars": [
   "á",
   "é",
   "í",
   "ó",
   "ú",
   "ñ",
   "ü",
   "¿",
   "¡"
  ],
  "checks": [
   "Ser for what something is, estar for where or how it is.",
   "Article and adjective agree with the noun.",
   "Verb ending matches the subject; the pronoun can be dropped."
  ],
  "exampleNoun": "la silla",
  "words": 5130,
  "phrases": 400,
  "grammar": 252,
  "texts": 120,
  "bank": 2002,
  "letters": 0
 },
 "it": {
  "name": "Italian",
  "native": "Italiano",
  "tts": "it-IT",
  "flag": "IT",
  "nounArticles": {
   "il": "m",
   "lo": "m",
   "la": "f",
   "i": "m",
   "gli": "m",
   "le": "f",
   "l'": null
  },
  "chars": [
   "à",
   "è",
   "é",
   "ì",
   "ò",
   "ù"
  ],
  "checks": [
   "Article and adjective agree with the noun.",
   "Verb ending matches the subject; the pronoun can be dropped.",
   "è (is) has an accent; e (and) doesn't."
  ],
  "exampleNoun": "la sedia",
  "words": 5130,
  "phrases": 0,
  "grammar": 260,
  "texts": 4,
  "bank": 2002,
  "letters": 0
 },
 "pt": {
  "name": "Portuguese",
  "native": "Português",
  "tts": "pt-BR",
  "flag": "BR",
  "nounArticles": {
   "o": "m",
   "a": "f",
   "os": "m",
   "as": "f"
  },
  "chars": [
   "á",
   "â",
   "ã",
   "à",
   "ç",
   "é",
   "ê",
   "í",
   "ó",
   "ô",
   "õ",
   "ú"
  ],
  "checks": [
   "Ser for what something is, estar for where or how it is.",
   "Article and adjective agree with the noun.",
   "Verb ending matches the subject (você takes the ele/ela form).",
   "Contractions: de + o = do, em + a = na."
  ],
  "exampleNoun": "o livro",
  "words": 5130,
  "phrases": 400,
  "grammar": 293,
  "texts": 120,
  "bank": 2002,
  "letters": 0
 },
 "so": {
  "name": "Somali",
  "native": "Soomaali",
  "tts": "so",
  "flag": "SO",
  "chars": [
   "'"
  ],
  "checks": [
   "The verb usually comes last.",
   "A focus word (waa, baa, ayaa) in each sentence.",
   "'The' is a suffix: -ka for masculine, -ta for feminine."
  ],
  "exampleNoun": "buug",
  "noVoice": true,
  "small": true,
  "note": "Unverified word list from Wiktionary, ordered by how common each English meaning is. Few example sentences and no audio. The opening lessons were written for Strands and haven't been checked by a native speaker.",
  "words": 944,
  "phrases": 0,
  "grammar": 3,
  "texts": 0,
  "bank": 0,
  "letters": 0
 },
 "mnc": {
  "name": "Manchu",
  "native": "ᠮᠠᠨᠵᡠ",
  "tts": "mnc",
  "flag": "",
  "chars": [
   "ū",
   "š",
   "ž"
  ],
  "checks": [
   "The verb comes last.",
   "Particles follow the noun: be, de, i, ci.",
   "Suffix vowels match the word."
  ],
  "exampleNoun": "bithe",
  "noVoice": true,
  "small": true,
  "script": "mnc",
  "note": "Unverified word list for reading, from Wiktionary, in Manchu script with Möllendorff romanization. No audio and few sentences.",
  "words": 1736,
  "phrases": 0,
  "grammar": 3,
  "texts": 0,
  "bank": 0,
  "letters": 0
 }
};
