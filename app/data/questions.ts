// app/data/questions.ts

export interface Question {
    id: number;
    question: string;
    options: string[];
    answer: string;
    category: 'Grammar' | 'Vocabulary' | 'Cloze' | 'Reading';
  }
  
  // Grouped by exam forms to handle multi-test selections natively (100 total questions)
  export const MET_EXAM_FORMS: Record<string, Question[]> = {
    "Form A": [
      // --- 1. GRAMMAR STRUCTURE SECTION (Items 1 - 15) ---
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
  
      // --- 2. VOCABULARY SECTION (Items 16 - 30) ---
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
  
      // --- 3. CLOZE TEXT INTEGRATION SECTION (Items 31 - 35) ---
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
  
      // --- 4. READING COMPREHENSION SECTION (Items 36 - 50) ---
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
    ],
    "Form B": [
      // --- 1. GRAMMAR STRUCTURE SECTION (Items 51 - 65) ---
      {
        id: 51,
        question: "Not only _______ the assignment on time, but she also scored a perfect mark on syntax.",
        options: ["she submitted", "did she submit", "had she submit", "she did submit"],
        answer: "did she submit",
        category: "Grammar"
      },
      {
        id: 52,
        question: "The admissions dean requested that the international files _______ re-evaluated instantly.",
        options: ["are", "must be", "be", "were"],
        answer: "be",
        category: "Grammar"
      },
      {
        id: 53,
        question: "I would appreciate _______ me updated on any sudden changes made to the scoring spreadsheet.",
        options: ["your keeping", "you to keep", "your keep", "to keep"],
        answer: "your keeping",
        category: "Grammar"
      },
      {
        id: 54,
        question: "The team leader spoke with such clarity _______ the candidates felt completely reassured.",
        options: ["than", "as", "that", "so"],
        answer: "that",
        category: "Grammar"
      },
      {
        id: 55,
        question: "Little _______ that the listening section parameters were altered right before launching.",
        options: ["did they know", "they knew", "had they know", "do they knew"],
        answer: "did they know",
        category: "Grammar"
      },
      {
        id: 56,
        question: "The administration would prefer _______ the digital response sheets rather than printing copies.",
        options: ["to archive", "archiving", "archive", "to be archiving"],
        answer: "to archive",
        category: "Grammar"
      },
      {
        id: 57,
        question: "Had the researchers gathered more descriptive telemetry, the final framework _______ sturdier.",
        options: ["would be", "will be", "would have been", "had been"],
        answer: "would have been",
        category: "Grammar"
      },
      {
        id: 58,
        question: "No sooner had the proctor sat down _______ a user encountered a severe connectivity crash.",
        options: ["when", "than", "then", "before"],
        answer: "than",
        category: "Grammar"
      },
      {
        id: 59,
        question: "The student Council recommended that the library _______ open twenty-four hours during finals.",
        options: ["remain", "remains", "remained", "to remain"],
        answer: "remain",
        category: "Grammar"
      },
      {
        id: 60,
        question: "Hardly _______ completed her grammar review when her laptop began installing firmware updates.",
        options: ["she had", "had she", "did she", "she did"],
        answer: "had she",
        category: "Grammar"
      },
      {
        id: 61,
        question: "The newly hired coordinator is looking forward to _______ the language assessment workshop.",
        options: ["attend", "attending", "attended", "be attending"],
        answer: "attending",
        category: "Grammar"
      },
      {
        id: 62,
        question: "The supervisor answers complex inquiries as though she _______ an expert on international laws.",
        options: ["is", "was", "were", "has been"],
        answer: "were",
        category: "Grammar"
      },
      {
        id: 63,
        question: "The technical committee raised several concerns _______ the stability of the servers.",
        options: ["regarding", "regards", "regarded", "regarding to"],
        answer: "regarding",
        category: "Grammar"
      },
      {
        id: 64,
        question: "It is vital that every applicant _______ their official registration papers prior to Friday.",
        options: ["uploads", "upload", "uploaded", "to upload"],
        answer: "upload",
        category: "Grammar"
      },
      {
        id: 65,
        question: "Marcela would rather her classmates _______ the review quiz before asking the instructor.",
        options: ["take", "took", "have taken", "will take"],
        answer: "took",
        category: "Grammar"
      },
  
      // --- 2. VOCABULARY SECTION (Items 66 - 80) ---
      {
        id: 66,
        question: "The board announced plans to _______ old testing techniques to optimize processing speed.",
        options: ["phase out", "bring up", "set aside", "take down"],
        answer: "phase out",
        category: "Vocabulary"
      },
      {
        id: 67,
        question: "Her contribution to the research team was absolutely _______, helping us reach our targets ahead of time.",
        options: ["invaluable", "redundant", "trivial", "negligible"],
        answer: "invaluable",
        category: "Vocabulary"
      },
      {
        id: 68,
        question: "The CEO requested a _______ report detailing only the key financial outcomes of the quarter.",
        options: ["verbose", "prolonged", "concise", "scattered"],
        answer: "concise",
        category: "Vocabulary"
      },
      {
        id: 69,
        question: "The company had to _______ its global strategy to better fit local regulatory requirements.",
        options: ["adopt", "adapt", "adept", "adorn"],
        answer: "adapt",
        category: "Vocabulary"
      },
      {
        id: 70,
        question: "The static noise coming from the intercom rendered the instructions completely _______.",
        options: ["inaudible", "illegible", "incredible", "unfeasible"],
        answer: "inaudible",
        category: "Vocabulary"
      },
      {
        id: 71,
        question: "The arguments presented in the editorial were quite _______, convincing most readers to change their minds.",
        options: ["flimsy", "compelling", "speculative", "ambiguous"],
        answer: "compelling",
        category: "Vocabulary"
      },
      {
        id: 72,
        question: "The manager's statement was highly _______, causing confusion among the engineering staff.",
        options: ["transparent", "ambiguous", "explicit", "coherent"],
        answer: "ambiguous",
        category: "Vocabulary"
      },
      {
        id: 73,
        question: "We need to _______ the structural layout of the server rooms before adding new hardware racks.",
        options: ["scrutinize", "glance", "overlook", "disregard"],
        answer: "scrutinize",
        category: "Vocabulary"
      },
      {
        id: 74,
        question: "The local government decided to _______ a new tax plan to help fund public transportation projects.",
        options: ["implement", "postpone", "abandon", "repeal"],
        answer: "implement",
        category: "Vocabulary"
      },
      {
        id: 75,
        question: "Her performance during the initial trial runs was quite _______, exceeding all our metrics.",
        options: ["mediocre", "exemplary", "substandard", "erratic"],
        answer: "exemplary",
        category: "Vocabulary"
      },
      {
        id: 76,
        question: "The legal department found several errors that might _______ the entire validity of the agreement.",
        options: ["jeopardize", "strengthen", "validate", "endorse"],
        answer: "jeopardize",
        category: "Vocabulary"
      },
      {
        id: 77,
        question: "The sudden drop in atmospheric pressure had a _______ effect on the flight navigation systems.",
        options: ["noticeable", "insignificant", "transparent", "lucrative"],
        answer: "noticeable",
        category: "Vocabulary"
      },
      {
        id: 78,
        question: "The developer gave a very _______ explanation, avoiding any technical jargon or codebase details.",
        options: ["superficial", "profound", "comprehensive", "exhaustive"],
        answer: "superficial",
        category: "Vocabulary"
      },
      {
        id: 79,
        question: "The project was temporarily put on _______ while the finance board reviewed the operational overhead.",
        options: ["hold", "break", "delay", "stop"],
        answer: "hold",
        category: "Vocabulary"
      },
      {
        id: 80,
        question: "The two tech startups decided to merge their assets to _______ a more dominant market share.",
        options: ["secure", "relinquish", "forfeit", "jeopardize"],
        answer: "secure",
        category: "Vocabulary"
      },
  
      // --- 3. CLOZE TEXT INTEGRATION SECTION (Items 81 - 85) ---
      {
        id: 81,
        question: "[Text Cloze Item 1] Environmental biology monitors delicate habitats. Rapid industrial urbanization has historically driven a major _______ of indigenous flora species.",
        options: ["depletion", "restoration", "cultivation", "preservation"],
        answer: "depletion",
        category: "Cloze"
      },
      {
        id: 82,
        question: "[Text Cloze Item 2] When local ecological patterns are disrupted, regional micro-climates become highly _______ to extreme drought spikes.",
        options: ["susceptible", "impervious", "shielded", "immune"],
        answer: "susceptible",
        category: "Cloze"
      },
      {
        id: 83,
        question: "[Text Cloze Item 3] To counteract these severe disruptions, conservation boards must _______ protective zoning mandates.",
        options: ["enact", "repeal", "ignore", "suspend"],
        answer: "enact",
        category: "Cloze"
      },
      {
        id: 84,
        question: "[Text Cloze Item 4] These restorative parameters must be managed _______ across state lines to avoid disjointed conservation efforts.",
        options: ["cohesively", "randomly", "scarcely", "erratically"],
        answer: "cohesively",
        category: "Cloze"
      },
      {
        id: 85,
        question: "[Text Cloze Item 5] Ultimately, delaying green architectural updates will cause structural damage that is completely _______.",
        options: ["irremediable", "negligible", "reversible", "beneficial"],
        answer: "irremediable",
        category: "Cloze"
      },
  
      // --- 4. READING COMPREHENSION SECTION (Items 86 - 100) ---
      {
        id: 86,
        question: "The primary intent of the passage is to _______ the classic misconceptions about quantum algorithms.",
        options: ["dispel", "propagate", "validate", "endorse"],
        answer: "dispel",
        category: "Reading"
      },
      {
        id: 87,
        question: "The transition into modern data automation frameworks has proven to be remarkably _______ for smaller centers.",
        options: ["advantageous", "hazardous", "detrimental", "tedious"],
        answer: "advantageous",
        category: "Reading"
      },
      {
        id: 88,
        question: "The research oversight committee managed to deliver a _______ verdict after reviewing the final telemetry data.",
        options: ["unanimous", "discordant", "hesitant", "divided"],
        answer: "unanimous",
        category: "Reading"
      },
      {
        id: 89,
        question: "Large-scale civil infrastructure projects often encounter massive delays when federal allocations become _______.",
        options: ["exhausted", "inflated", "surpassed", "replenished"],
        answer: "exhausted",
        category: "Reading"
      },
      {
        id: 90,
        question: "The author explicitly implies that the initial laboratory readings were far from _______.",
        options: ["conclusive", "arbitrary", "erroneous", "unreliable"],
        answer: "conclusive",
        category: "Reading"
      },
      {
        id: 91,
        question: "To safeguard fragile marine biomes, global coalitions must drastically scale back the _______ of maritime zones.",
        options: ["exploitation", "reclamation", "preservation", "nurturing"],
        answer: "exploitation",
        category: "Reading"
      },
      {
        id: 92,
        question: "The newly adopted trade model aims to simplify logistics, thereby _______ macro-economic development.",
        options: ["stimulating", "stifling", "curbing", "impeding"],
        answer: "stimulating",
        category: "Reading"
      },
      {
        id: 93,
        question: "The installation procedures detailed in the handbook were so lucid that any configuration ambiguity was _______.",
        options: ["obviated", "amplified", "maintained", "tolerated"],
        answer: "obviated",
        category: "Reading"
      },
      {
        id: 94,
        question: "Anthropologists argue that the ancient societies of that region were distinguished by their _______ architectural depth.",
        options: ["profound", "shallow", "trivial", "insignificant"],
        answer: "profound",
        category: "Reading"
      },
      {
        id: 95,
        question: "The exponential rise in sea level configurations poses a _______ threat to low-lying coastal townships.",
        options: ["formidable", "negligible", "harmless", "promising"],
        answer: "formidable",
        category: "Reading"
      },
      {
        id: 96,
        question: "According to section 4, what event directly triggered the massive restructuring of the clean energy grid?",
        options: ["The introduction of next-gen solar cells", "Strict tax policies on electric models", "A decrease in fossil fuel extraction limits", "Public outcries against nuclear arrays"],
        answer: "The introduction of next-gen solar cells",
        category: "Reading"
      },
      {
        id: 97,
        question: "Which of the following phrases best captures the author's stance on automated linguistic translations?",
        options: ["It is highly proficient but lacks emotional tone", "It will completely substitute human interpreters soon", "It struggles to process basic syntax structures", "It is expensive and mathematically flawed"],
        answer: "It is highly proficient but lacks emotional tone",
        category: "Reading"
      },
      {
        id: 98,
        question: "The word 'unprecedented' in line 22 is closest in meaning to _______.",
        options: ["unparalleled", "predictable", "customary", "reversible"],
        answer: "unparalleled",
        category: "Reading"
      },
      {
        id: 99,
        question: "Climatologists warn that the structural changes inside polar ice caps are completely _______.",
        options: ["irreversible", "minor", "temporary", "advantageous"],
        answer: "irreversible",
        category: "Reading"
      },
      {
        id: 100,
        question: "The author mentions the historical records in paragraph 2 primarily in order to _______.",
        options: ["provide context for the current paradigm shift", "disprove alternative archaeological theories", "expose flaws in ancient mathematical models", "criticize old logging documentation guidelines"],
        answer: "provide context for the current paradigm shift",
        category: "Reading"
      }
    ]
  };