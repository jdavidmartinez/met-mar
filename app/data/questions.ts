// app/data/questions.ts

export interface Question {
    id: number;
    question: string;
    options: string[];
    answer: string;
    category: 'Grammar' | 'Vocabulary' | 'Cloze' | 'Reading';
  }
  
  export const MET_BANK_QUESTIONS: Question[] = [
    // ==========================================
    // 1. GRAMMAR STRUCTURE SECTION (Questions 1 - 15)
    // ==========================================
    {
      id: 1,
      question: "By the time Marcela finishes her preparation course, she _______ all the modules.",
      options: ["will complete", "will have completed", "is completing", "completes"],
      answer: "will have completed",
      category: "Grammar"
    },
    {
      id: 2,
      question: "If the coordinator _______ the audio track earlier, the listening section wouldn't have failed.",
      options: ["tested", "has tested", "had tested", "would test"],
      answer: "had tested",
      category: "Grammar"
    },
    {
      id: 3,
      question: "The examiner recommended that every candidate _______ their ID on the desk.",
      options: ["place", "places", "placed", "to place"],
      answer: "place",
      category: "Grammar"
    },
    {
      id: 4,
      question: "Seldom _______ such an intensive evaluation framework in modern testing centers.",
      options: ["we witness", "witness we", "do we witness", "we do witness"],
      answer: "do we witness",
      category: "Grammar"
    },
    {
      id: 5,
      question: "Marcela objects to _______ the speaking section without checking her headphones first.",
      options: ["start", "starting", "started", "be starting"],
      answer: "starting",
      category: "Grammar"
    },
    {
      id: 6,
      question: "Despite _______ for over six hours, she felt she needed more practice with inversions.",
      options: ["studying", "studied", "study", "she studied"],
      answer: "studying",
      category: "Grammar"
    },
    {
      id: 7,
      question: "I would rather you _______ the essay within the 45 minutes allotted by the system.",
      options: ["submit", "submitted", "have submitted", "will submit"],
      answer: "submitted",
      category: "Grammar"
    },
    {
      id: 8,
      question: "The reading texts were _______ dense that many students struggled to manage their time.",
      options: ["such", "so", "too", "very"],
      answer: "so",
      category: "Grammar"
    },
    {
      id: 9,
      question: "No sooner had the test begun _______ the fire alarm started ringing in the hallway.",
      options: ["than", "when", "then", "that"],
      answer: "than",
      category: "Grammar"
    },
    {
      id: 10,
      question: "The professor speaks as though he _______ an authority on global macroeconomic trends.",
      options: ["is", "was", "were", "has been"],
      answer: "were",
      category: "Grammar"
    },
    {
      id: 11,
      question: "The university requires that all new research parameters _______ verified by a third party.",
      options: ["are", "be", "been", "to be"],
      answer: "be",
      category: "Grammar"
    },
    {
      id: 12,
      question: "Had we known the software required an upgrade, we _______ the digital exam yesterday.",
      options: ["will postpone", "would postpone", "would have postponed", "postponed"],
      answer: "would have postponed",
      category: "Grammar"
    },
    {
      id: 13,
      question: "Marcela is not used to _______ under such restrictive time limits, but she is adapting quickly.",
      options: ["write", "wrote", "writing", "be writing"],
      answer: "writing",
      category: "Grammar"
    },
    {
      id: 14,
      question: "Scarcely _______ downloaded the preparation booklet when the server went offline.",
      options: ["I had", "had I", "did I", "I did"],
      answer: "had I",
      category: "Grammar"
    },
    {
      id: 15,
      question: "The board members asked several questions _______ the newly proposed language policies.",
      options: ["concerning", "concerns", "concerned", "concerning to"],
      answer: "concerning",
      category: "Grammar"
    },
  
    // ==========================================
    // 2. VOCABULARY SECTION (Questions 16 - 30)
    // ==========================================
    {
      id: 16,
      question: "The new academic board decided to _______ the previous guidelines regarding test scoring.",
      options: ["amend", "demolish", "postpone", "abandon"],
      answer: "amend",
      category: "Vocabulary"
    },
    {
      id: 17,
      question: "Her thorough understanding of complex syntax was quite _______ during the advanced speaking task.",
      options: ["apparent", "vague", "superficial", "ambiguous"],
      answer: "apparent",
      category: "Vocabulary"
    },
    {
      id: 18,
      question: "The researcher's arguments were based on _______ evidence collected over a five-year study.",
      options: ["flimsy", "empirical", "speculative", "hypothetical"],
      answer: "empirical",
      category: "Vocabulary"
    },
    {
      id: 19,
      question: "The institution requires a _______ description of your professional background before the interview.",
      options: ["concise", "prolonged", "redundant", "scattered"],
      answer: "concise",
      category: "Vocabulary"
    },
    {
      id: 20,
      question: "Many local companies have decided to _______ new digital frameworks to streamline productivity.",
      options: ["adapt", "adopt", "adept", "adorn"],
      answer: "adopt",
      category: "Vocabulary"
    },
    {
      id: 21,
      question: "The speaker's voice was barely _______ due to the persistent static in the sound system.",
      options: ["audible", "credible", "feasible", "legible"],
      answer: "audible",
      category: "Vocabulary"
    },
    {
      id: 22,
      question: "The manager gave a _______ reply when asked about the budget cuts, avoiding any direct numbers.",
      options: ["vague", "vivid", "vigorous", "volatile"],
      answer: "vague",
      category: "Vocabulary"
    },
    {
      id: 23,
      question: "Due to unforeseen operational costs, the project development has been put on _______.",
      options: ["hold", "break", "delay", "stop"],
      answer: "hold",
      category: "Vocabulary"
    },
    {
      id: 24,
      question: "Marcela's dedication to her language studies has been absolutely _______ in achieving her high scores.",
      options: ["instrumental", "accidental", "incidental", "marginal"],
      answer: "instrumental",
      category: "Vocabulary"
    },
    {
      id: 25,
      question: "The old building's infrastructure was so _______ that the city ordered its immediate evacuation.",
      options: ["dilapidated", "sturdy", "immaculate", "renovated"],
      answer: "dilapidated",
      category: "Vocabulary"
    },
    {
      id: 26,
      question: "The contract contains several clauses that are highly _______, leading to potential legal disputes.",
      options: ["ambiguous", "transparent", "coherent", "explicit"],
      answer: "ambiguous",
      category: "Vocabulary"
    },
    {
      id: 27,
      question: "After hours of heavy debate, the two political factions finally managed to reach a _______.",
      options: ["compromise", "conflict", "confrontation", "contradiction"],
      answer: "compromise",
      category: "Vocabulary"
    },
    {
      id: 28,
      question: "The sudden spike in inflation had an extremely _______ effect on small business owners.",
      options: ["adverse", "beneficial", "neutral", "lucrative"],
      answer: "adverse",
      category: "Vocabulary"
    },
    {
      id: 29,
      question: "Her writing style is incredibly _______; she never uses three words when one would suffice.",
      options: ["succinct", "verbose", "rambling", "wordy"],
      answer: "succinct",
      category: "Vocabulary"
    },
    {
      id: 30,
      question: "The scientists need to _______ the dynamic behavior of the particles before publishing the paper.",
      options: ["scrutinize", "glance", "overlook", "disregard"],
      answer: "scrutinize",
      category: "Vocabulary"
    },
  
    // ==========================================
    // 3. CLOZE TEXT INTEGRATION SECTION (Questions 31 - 35)
    // Context: A short text about digital security frameworks.
    // ==========================================
    {
      id: 31,
      question: "[Text Cloze Item 1] Modern corporations face critical hurdles safeguarding data. Implementing rigid protocols can often _______ operational efficiency.",
      options: ["hinder", "boost", "accelerate", "neglect"],
      answer: "hinder",
      category: "Cloze"
    },
    {
      id: 32,
      question: "[Text Cloze Item 2] When administrative access keys are carelessly handled, networks become highly _______ to severe external breaches.",
      options: ["vulnerable", "immune", "resistant", "impenetrable"],
      answer: "vulnerable",
      category: "Cloze"
    },
    {
      id: 33,
      question: "[Text Cloze Item 3] To mitigate these security threats, security directors must _______ routine password evaluations.",
      options: ["enforce", "abolish", "dismiss", "postpone"],
      answer: "enforce",
      category: "Cloze"
    },
    {
      id: 34,
      question: "[Text Cloze Item 4] Security compliance parameters must be fully updated, ensuring that standard protocols are applied _______ across branches.",
      options: ["uniformly", "randomly", "scarcely", "erratically"],
      answer: "uniformly",
      category: "Cloze"
    },
    {
      id: 35,
      question: "[Text Cloze Item 5] Ultimately, neglecting these basic technical rules will lead to consequences that are virtually _______.",
      options: ["unavoidable", "preventable", "reversible", "insignificant"],
      answer: "unavoidable",
      category: "Cloze"
    },
  
    // ==========================================
    // 4. READING COMPREHENSION SECTION (Questions 36 - 50)
    // ==========================================
    {
      id: 36,
      question: "To prevent statistical distortion, analysts must ensure that all outlier parameters are _______.",
      options: ["excluded", "embraced", "magnified", "sustained"],
      answer: "excluded",
      category: "Reading"
    },
    {
      id: 37,
      question: "The transition from traditional methods to online software has been remarkably _______ for most centers.",
      options: ["seamless", "abrupt", "hazardous", "tedious"],
      answer: "seamless",
      category: "Reading"
    },
    {
      id: 38,
      question: "The committee reached a _______ decision after reviewing the final performance reports.",
      options: ["unanimous", "divided", "hesitant", "disputed"],
      answer: "unanimous",
      category: "Reading"
    },
    {
      id: 39,
      question: "Urban planning projects often face heavy delays when local budgets become _______.",
      options: ["depleted", "inflated", "surpassed", "restored"],
      answer: "depleted",
      category: "Reading"
    },
    {
      id: 40,
      question: "Environmentalists argue that the damage caused by industrial waste is completely _______.",
      options: ["irreversible", "negligible", "temporary", "beneficial"],
      answer: "irreversible",
      category: "Reading"
    },
    {
      id: 41,
      question: "The primary purpose of the text is to _______ the common myths surrounding cognitive development.",
      options: ["debunk", "endorse", "propagate", "validate"],
      answer: "debunk",
      category: "Reading"
    },
    {
      id: 42,
      question: "The author implies that initial experiments yielded results that were far from _______.",
      options: ["conclusive", "erroneous", "arbitrary", "flawed"],
      answer: "conclusive",
      category: "Reading"
    },
    {
      id: 43,
      question: "To preserve old ecosystems, governments must drastically reduce the _______ of natural resources.",
      options: ["exploitation", "conservation", "restoration", "cultivation"],
      answer: "exploitation",
      category: "Reading"
    },
    {
      id: 44,
      question: "The new commercial policy aims to facilitate trade, thereby _______ economic growth across provinces.",
      options: ["fostering", "impeding", "stifling", "curbing"],
      answer: "fostering",
      category: "Reading"
    },
    {
      id: 45,
      question: "The instructions provided in the guide were so clear that any ambiguity was entirely _______.",
      options: ["obviated", "heightened", "preserved", "tolerated"],
      answer: "obviated",
      category: "Reading"
    },
    {
      id: 46,
      question: "Historians note that the empires of that era were characterized by their _______ cultural diversity.",
      options: ["profound", "shallow", "trivial", "insignificant"],
      answer: "profound",
      category: "Reading"
    },
    {
      id: 47,
      question: "The sudden shift in climate patterns presents a _______ threat to agricultural stability.",
      options: ["formidable", "negligible", "harmless", "encouraging"],
      answer: "formidable",
      category: "Reading"
    },
    {
      id: 48,
      question: "According to paragraph 3, what factor triggered the structural transformation of the banking sector?",
      options: ["The arrival of digital currencies", "Strict local labor regulations", "An increase in real estate interest rates", "Public disapproval of classic procedures"],
      answer: "The arrival of digital currencies",
      category: "Reading"
    },
    {
      id: 49,
      question: "Which of the following statements best summarizes the author's point of view on remote education?",
      options: ["It is highly effective but demands self-discipline", "It will completely replace traditional schools", "It fails to deliver advanced technical knowledge", "It is cheaper but inherently flawed socially"],
      answer: "It is highly effective but demands self-discipline",
      category: "Reading"
    },
    {
      id: 50,
      question: "The word 'unprecedented' in line 14 is closest in meaning to _______.",
      options: ["never seen before", "highly predictable", "culturally significant", "completely reversible"],
      answer: "never seen before",
      category: "Reading"
    }
  ];