var hiddenTags = [];

//Specify APY URL
//const APY_URL = "https://beta.apertium.org/apy/";
const APY_URL = "http://localhost:2738/";

// POS Categories. Keys are according to Universal Dependencies
const POS_CATS = {
  verb: ["vblex", "v", "vbmod", "vbser", "vbhaver", "vbdo", "vaux"],
  noun: ["n"],
  nounproper: ["np"],
  adj: ["adj"],
  adv: ["adv", "preadv", "postadv"],
  det: ["det"],
  pron: ["prn"]
};

const POS_NAMES = {
  verb: "Verbs",
  verb_iv: "Intransitive verbs",
  verb_tv: "Transitive verbs",
  vaux: "Auxiliary verbs",
  verb_ia: "Intransitive Animate (IA) verbs",
  verb_ti: "Transitive Inanimate (TI) verbs",
  verb_ta: "Transitive Animate (TA) verbs",
  noun: "Nouns",
  nounproper: "Proper nouns",
  adj: "Adjectives",
  adv: "Adverbs",
  det: "Determiners",
  pron: "Pronouns"
};

const POS_SUBCATS = {
  kaz: {
    verb: { 
      verb_iv: ["v.iv"],
      verb_tv: ["v.tv"],
      vaux: ["vaux"]
    }
  },
  unm: {
    verb: { 
      verb_ia: ["v.iv.aa"],
      verb_ti: ["v.tv.nn"],
      verb_ta: ["v.tv.aa"]
    }
  }
}

/* const POS_SUPERCATS = {
  kaz: {
    verb: ["verb_iv", "verb_tv"]
  },
  unm: {
    verb: ["verb_ia", "verb_ti"]
  }
}; */

var LANGS = {
    grc: {name: "Ancient Greek", data: null, keeptags: []},
    kaz: {name: "Kazakh", data: null, keeptags: ['tv', 'iv']},
    hyx_hyw: {name: "Western Armenian", data: null, keeptags: ['tv', 'iv','inch','pass_listed','pass','caus','caus_listed','subst','ant','m','f','al','cog','top']},
    hyx_hye: {name: "Eastern Armenian", data: null, keeptags: ['tv', 'iv','inch','pass_listed','pass','caus','caus_listed','subst','ant','m','f','al','cog','top']},
    spa: {name: "Spanish", data: null, keeptags: []},
    unm: {name: "Lënape (Unami)", data: null, keeptags: ['iv', 'tv', 'aa', 'nn']}
};
