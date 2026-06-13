// app/data/questions.ts

export interface Question {
  id: number;
  question: string;
  options: string[];
  answer: string;
  category: 'Grammar' | 'Vocabulary' | 'Cloze' | 'Reading';
  passage?: string; // Optional field to dynamically hold shared reading texts above the layout
  rationale: string; // Explanation of the correct answer
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
      category: "Grammar",
      rationale: "The future perfect ('will have completed') is used to describe an action that will be finished by a specific point in the future ('by the time...')."
    },
    {
      id: 2,
      question: "If the coordinator _______ the audio track earlier, the listening section wouldn't have failed.",
      options: ["tested", "has tested", "had tested", "would test"],
      answer: "had tested",
      category: "Grammar",
      rationale: "This is a third conditional sentence used to express regret about the past. The structure is 'If + past perfect' for the condition."
    },
    {
      id: 3,
      question: "The examiner recommended that every candidate _______ their ID on the desk.",
      options: ["place", "places", "placed", "to place"],
      answer: "place",
      category: "Grammar",
      rationale: "This uses the subjunctive mood triggered by the verb 'recommended.' In formal English, the base form of the verb is used in the 'that' clause."
    },
    {
      id: 4,
      question: "Seldom _______ such an intensive evaluation framework in modern testing centers.",
      options: ["we witness", "witness we", "do we witness", "we do witness"],
      answer: "do we witness",
      category: "Grammar",
      rationale: "Negative adverbials like 'seldom' at the beginning of a sentence require subject-auxiliary inversion ('do we witness')."
    },
    {
      id: 5,
      question: "Marcela objects to _______ the speaking section without checking her headphones first.",
      options: ["start", "starting", "started", "be starting"],
      answer: "starting",
      category: "Grammar",
      rationale: "The phrase 'object to' features a prepositional 'to', which must be followed by a gerund noun phrase ('starting')."
    },
    {
      id: 6,
      question: "Despite _______ for over six hours, she felt she needed more practice with inversions.",
      options: ["studying", "studied", "study", "she studied"],
      answer: "studying",
      category: "Grammar",
      rationale: "'Despite' is a preposition and must be followed directly by a gerund ('studying') or a noun phrase rather than a clause."
    },
    {
      id: 7,
      question: "I would rather you _______ the essay within the 45 minutes allotted by the system.",
      options: ["submit", "submitted", "have submitted", "will submit"],
      answer: "submitted",
      category: "Grammar",
      rationale: "When 'would rather' specifies a preference regarding another person's actions, it takes the subjunctive past tense ('submitted') for present or future contexts."
    },
    {
      id: 8,
      question: "The reading texts were _______ dense that many students struggled to manage their time.",
      options: ["such", "so", "too", "very"],
      answer: "so",
      category: "Grammar",
      rationale: "The modifier 'so' correlates directly with 'that' to express degree followed by a clause of result containing a single adjective ('dense')."
    },
    {
      id: 9,
      question: "No sooner had the test begun _______ the fire alarm started ringing in the hallway.",
      options: ["than", "when", "then", "that"],
      answer: "than",
      category: "Grammar",
      rationale: "The introductory expression 'no sooner' structurally pairs exclusively with the conjunction 'than' to connect chronological actions."
    },
    {
      id: 10,
      question: "The professor speaks as though he _______ an authority on global macroeconomic trends.",
      options: ["is", "was", "were", "has been"],
      answer: "were",
      category: "Grammar",
      rationale: "The conjunction 'as though' establishes a hypothetical scenario requiring the past subjunctive 'were' regardless of third-person subjects."
    },
    {
      id: 11,
      question: "The university requires that all new research parameters _______ verified by a third party.",
      options: ["are", "be", "been", "to be"],
      answer: "be",
      category: "Grammar",
      rationale: "Verbs expressing a demand or mandate like 'requires' trigger a subjunctive 'that' clause utilizing the base passive root ('be')."
    },
    {
      id: 12,
      question: "Had we known the software required an upgrade, we _______ the digital exam yesterday.",
      options: ["will postpone", "would postpone", "would have postponed", "postponed"],
      answer: "would have postponed",
      category: "Grammar",
      rationale: "An inverted past condition ('Had we known') mandates the perfect conditional form ('would have postponed') inside the main clause."
    },
    {
      id: 13,
      question: "Marcela is not used to _______ under such restrictive time limits, but she is adapting quickly.",
      options: ["write", "wrote", "writing", "be writing"],
      answer: "writing",
      category: "Grammar",
      rationale: "The idiom 'be used to' signals familiarity and requires a gerund ('writing') rather than an infinitive complement."
    },
    {
      id: 14,
      question: "Scarcely _______ downloaded the preparation booklet when the server went offline.",
      options: ["I had", "had I", "did I", "I did"],
      answer: "had I",
      category: "Grammar",
      rationale: "Negative restrictive modifiers like 'scarcely' necessitate inversion of the auxiliary verb when framing initial sentence structures ('had I')."
    },
    {
      id: 15,
      question: "The board members asked several questions _______ the newly proposed language policies.",
      options: ["concerning", "concerns", "concerned", "concerning to"],
      answer: "concerning",
      category: "Grammar",
      rationale: "The participle 'concerning' functions natively as a standalone preposition meaning 'about' or 'regarding' without extra particles."
    },
  
    // --- 2. VOCABULARY SECTION (Items 16 - 30) ---
    {
      id: 16,
      question: "The new academic board decided to _______ the previous guidelines regarding test scoring.",
      options: ["amend", "demolish", "postpone", "abandon"],
      answer: "amend",
      category: "Vocabulary",
      rationale: "'Amend' means to modify, improve, or alter formal legal and administrative rules dynamically."
    },
    {
      id: 17,
      question: "Her thorough understanding of complex syntax was quite _______ during the advanced speaking task.",
      options: ["apparent", "vague", "superficial", "ambiguous"],
      answer: "apparent",
      category: "Vocabulary",
      rationale: "'Apparent' translates to obvious, clearly visible, or readily manifest within a specific behavior context."
    },
    {
      id: 18,
      question: "The researcher's arguments were based on _______ evidence collected over a five-year study.",
      options: ["flimsy", "empirical", "speculative", "hypothetical"],
      answer: "empirical",
      category: "Vocabulary",
      rationale: "'Empirical' refers to concrete evidence derived from experimental observation and verifiable data logs rather than theory."
    },
    {
      id: 19,
      question: "The institution requires a _______ description of your professional background before the interview.",
      options: ["concise", "prolonged", "redundant", "scattered"],
      answer: "concise",
      category: "Vocabulary",
      rationale: "'Concise' means giving clear information in few words, brief and descriptive without extraneous filler."
    },
    {
      id: 20,
      question: "Many local companies have decided to _______ new digital frameworks to streamline productivity.",
      options: ["adapt", "adopt", "adept", "adorn"],
      answer: "adopt",
      category: "Vocabulary",
      rationale: "'Adopt' means to formally choose, accept, or take up a method, practice, or system as one's own."
    },
    {
      id: 21,
      question: "The speaker's voice was barely _______ due to the persistent static in the sound system.",
      options: ["audible", "credible", "feasible", "legible"],
      answer: "audible",
      category: "Vocabulary",
      rationale: "'Audible' is the technical descriptor for sound parameters loud enough or clear enough to be distinctively heard."
    },
    {
      id: 22,
      question: "The manager gave a _______ reply when asked about the budget cuts, avoiding any direct numbers.",
      options: ["vague", "vivid", "vigorous", "volatile"],
      answer: "vague",
      category: "Vocabulary",
      rationale: "'Vague' signifies an answer lacking definite clarity, precision, or explicit details to avoid commitment."
    },
    {
      id: 23,
      question: "Due to unforeseen operational costs, the project development has been put on _______.",
      options: ["hold", "break", "delay", "stop"],
      answer: "hold",
      category: "Vocabulary",
      rationale: "The idiomatic business structure 'put on hold' means to temporarily suspend operational actions or project timelines."
    },
    {
      id: 24,
      question: "Marcela's dedication to her language studies has been absolutely _______ in achieving her high scores.",
      options: ["instrumental", "accidental", "incidental", "marginal"],
      answer: "instrumental",
      category: "Vocabulary",
      rationale: "'Instrumental' means serving as a vital means, agent, or crucial asset in accomplishing a specific outcome."
    },
    {
      id: 25,
      question: "The old building's infrastructure was so _______ that the city ordered its immediate evacuation.",
      options: ["dilapidated", "sturdy", "immaculate", "renovated"],
      answer: "dilapidated",
      category: "Vocabulary",
      rationale: "'Dilapidated' characterizes physical property or infrastructure in a state of severe disrepair, ruin, or decay."
    },
    {
      id: 26,
      question: "The contract contains several clauses that are highly _______, leading to potential legal disputes.",
      options: ["ambiguous", "transparent", "coherent", "explicit"],
      answer: "ambiguous",
      category: "Vocabulary",
      rationale: "'Ambiguous' items are open to more than one interpretation, rendering terms unclear or legally vulnerable."
    },
    {
      id: 27,
      question: "After hours of heavy debate, the two political factions finally managed to reach a _______.",
      options: ["compromise", "conflict", "confrontation", "contradiction"],
      answer: "compromise",
      category: "Vocabulary",
      rationale: "'Compromise' indicates reaching a mutual dispute settlement where each side gives up certain demands."
    },
    {
      id: 28,
      question: "The sudden spike in inflation had an extremely _______ effect on small business owners.",
      options: ["adverse", "beneficial", "neutral", "lucrative"],
      answer: "adverse",
      category: "Vocabulary",
      rationale: "'Adverse' maps to harmful, unfavorable, or hostile conditions that actively jeopardize progress."
    },
    {
      id: 29,
      question: "Her writing style is incredibly _______; she never uses three words when one would suffice.",
      options: ["succinct", "verbose", "rambling", "wordy"],
      answer: "succinct",
      category: "Vocabulary",
      rationale: "'Succinct' implies expressing thoughts with extreme economy of words, compact, sharp, and brief."
    },
    {
      id: 30,
      question: "The scientists need to _______ the dynamic behavior of the particles before publishing the paper.",
      options: ["scrutinize", "glance", "overlook", "disregard"],
      answer: "scrutinize",
      category: "Vocabulary",
      rationale: "'Scrutinize' means to inspect, examine, or analyze data parameters with thorough and meticulous care."
    },
  
    // --- 3. CLOZE TEXT INTEGRATION SECTION (Items 31 - 35) ---
    {
      id: 31,
      question: "[Text Cloze Item 1] Modern corporations face critical hurdles safeguarding data. Implementing rigid protocols can often _______ operational efficiency.",
      options: ["hinder", "boost", "accelerate", "neglect"],
      answer: "hinder",
      category: "Cloze",
      rationale: "Context shows 'rigid protocols' generate hurdles, which logically 'hinder' (obstruct or slow down) operational efficiency."
    },
    {
      id: 32,
      question: "[Text Cloze Item 2] When administrative access keys are carelessly handled, networks become highly _______ to severe external breaches.",
      options: ["vulnerable", "immune", "resistant", "impenetrable"],
      answer: "vulnerable",
      category: "Cloze",
      rationale: "Careless handling increases security exposure, making infrastructure 'vulnerable' (exposed to risk or easily attacked)."
    },
    {
      id: 33,
      question: "[Text Cloze Item 3] To mitigate these security threats, security directors must _______ routine password evaluations.",
      options: ["enforce", "abolish", "dismiss", "postpone"],
      answer: "enforce",
      category: "Cloze",
      rationale: "'Enforce' means to compel observance of a law, rule, or regulatory security protocol to actively block threats."
    },
    {
      id: 34,
      question: "[Text Cloze Item 4] Security compliance parameters must be fully updated, ensuring that standard protocols are applied _______ across branches.",
      options: ["uniformly", "randomly", "scarcely", "erratically"],
      answer: "uniformly",
      category: "Cloze",
      rationale: "Compliance mandates systematic consistency, meaning procedures must apply 'uniformly' (identically over all instances)."
    },
    {
      id: 35,
      question: "[Text Cloze Item 5] Ultimately, neglecting these basic technical rules will lead to consequences that are virtually _______.",
      options: ["unavoidable", "preventable", "reversible", "insignificant"],
      answer: "unavoidable",
      category: "Cloze",
      rationale: "Continuous structural neglect implies that negative downstream consequences become certain and 'unavoidable'."
    },
  
    // --- 4. READING COMPREHENSION SECTION WITH INJECTED PASSAGES (Items 36 - 50) ---
    {
      id: 36,
      passage: "Paragraph 1: In the early 21st century, macroeconomists observed a significant paradigm shift driven by data automation. Traditional analytical methodologies struggled to maintain pace with instantaneous transactional telemetry. Analysts noted that companies excluding statistical anomalies or outlier parameters managed to secure a far cleaner projection of structural market trajectories.\n\nParagraph 2: Furthermore, transitioning from traditional methods to online software has been remarkably seamless for most centers. This change triggered a wave of data transparency that allowed advisory committees to arrive at completely unanimous verdicts regarding annual performance updates.",
      question: "To prevent statistical distortion, analysts must ensure that all outlier parameters are _______.",
      options: ["excluded", "embraced", "magnified", "sustained"],
      answer: "excluded",
      category: "Reading",
      rationale: "Paragraph 1 explicitly mentions that companies are 'excluding statistical anomalies or outlier parameters' to clean up projections."
    },
    {
      id: 37,
      passage: "Paragraph 1: In the early 21st century, macroeconomists observed a significant paradigm shift driven by data automation. Traditional analytical methodologies struggled to maintain pace with instantaneous transactional telemetry. Analysts noted that companies excluding statistical anomalies or outlier parameters managed to secure a far cleaner projection of structural market trajectories.\n\nParagraph 2: Furthermore, transitioning from traditional methods to online software has been remarkably seamless for most centers. This change triggered a wave of data transparency that allowed advisory committees to arrive at completely unanimous verdicts regarding annual performance updates.",
      question: "The transition from traditional methods to online software has been remarkably _______ for most centers.",
      options: ["seamless", "abrupt", "hazardous", "tedious"],
      answer: "seamless",
      category: "Reading",
      rationale: "Paragraph 2 directly describes the software transition as having been 'remarkably seamless for most centers.'"
    },
    {
      id: 38,
      passage: "Paragraph 1: In the early 21st century, macroeconomists observed a significant paradigm shift driven by data automation. Traditional analytical methodologies struggled to maintain pace with instantaneous transactional telemetry. Analysts noted that companies excluding statistical anomalies or outlier parameters managed to secure a far cleaner projection of structural market trajectories.\n\nParagraph 2: Furthermore, transitioning from traditional methods to online software has been remarkably seamless for most centers. This change triggered a wave of data transparency that allowed advisory committees to arrive at completely unanimous verdicts regarding annual performance updates.",
      question: "The committee reached a _______ decision after reviewing the final performance reports.",
      options: ["unanimous", "divided", "hesitant", "disputed"],
      answer: "unanimous",
      category: "Reading",
      rationale: "The end of Paragraph 2 clearly outlines that advisory committees managed to 'arrive at completely unanimous verdicts.'"
    },
    {
      id: 39,
      passage: "Paragraph 3: Conversely, regional infrastructure planning projects often face heavy delays when local reserve budgets become entirely depleted. Environmental preservation groups argue that the environmental exploitation caused by fast industrial expansions leads to ecological changes that are virtually irreversible, regardless of subsequent restoration attempts.",
      question: "Urban planning projects often face heavy delays when local budgets become _______.",
      options: ["depleted", "inflated", "surpassed", "restored"],
      answer: "depleted",
      category: "Reading",
      rationale: "Paragraph 3 explicitly correlates infrastructure design delays directly with local reserve funding becoming 'entirely depleted.'"
    },
    {
      id: 40,
      passage: "Paragraph 3: Conversely, regional infrastructure planning projects often face heavy delays when local reserve budgets become entirely depleted. Environmental preservation groups argue that the environmental exploitation caused by fast industrial expansions leads to ecological changes that are virtually irreversible, regardless of subsequent restoration attempts.",
      question: "Environmentalists argue that the damage caused by industrial waste is completely _______.",
      options: ["irreversible", "negligible", "temporary", "beneficial"],
      answer: "irreversible",
      category: "Reading",
      rationale: "The text directly states that environmental extraction groups evaluate these macro modifications as being 'virtually irreversible.'"
    },
    {
      id: 41,
      passage: "Paragraph 4: Cognitive development theories often suffer from outdated premises. Modern clinical experiments aim to debunk persistent cultural myths regarding vocabulary acquisition retention rates. Initial empirical readings produced data that were far from conclusive, meaning that further long-term testing is mandatory before rewriting primary textbooks.",
      question: "The primary purpose of the text is to _______ the common myths surrounding cognitive development.",
      options: ["debunk", "endorse", "propagate", "validate"],
      answer: "debunk",
      category: "Reading",
      rationale: "Paragraph 4 notes that clinical goals are explicitly set to 'debunk persistent cultural myths' embedded within classic developmental frameworks."
    },
    {
      id: 42,
      passage: "Paragraph 4: Cognitive development theories often suffer from outdated premises. Modern clinical experiments aim to debunk persistent cultural myths regarding vocabulary acquisition retention rates. Initial empirical readings produced data that were far from conclusive, meaning that further long-term testing is mandatory before rewriting primary textbooks.",
      question: "The author implies that initial experiments yielded results that were far from _______.",
      options: ["conclusive", "erroneous", "arbitrary", "flawed"],
      answer: "conclusive",
      category: "Reading",
      rationale: "The text specifies that early quantitative diagnostic readings 'produced data that were far from conclusive.'"
    },
    {
      id: 43,
      passage: "Paragraph 4: Cognitive development theories often suffer from outdated premises. Modern clinical experiments aim to debunk persistent cultural myths regarding vocabulary acquisition retention rates. Initial empirical readings produced data that were far from conclusive, meaning that further long-term testing is mandatory before rewriting primary textbooks.",
      question: "To preserve old ecosystems, governments must drastically reduce the _______ of natural resources.",
      options: ["exploitation", "conservation", "restoration", "cultivation"],
      answer: "exploitation",
      category: "Reading",
      rationale: "The text lists 'environmental exploitation' as the root hazard causing irreversible baseline disruptions to old ecosystems."
    },
    {
      id: 44,
      passage: "Paragraph 5: Global economic logistics rely heavily on seamless maritime container paths. Recent structural changes aimed to streamline processing bottlenecks, thereby fostering significant trade stimulation throughout coastal provinces. The instructions detailed in the operations handbook were so exceptionally lucid that any layout ambiguity was completely Belgian or completely obviated.",
      question: "The new commercial policy aims to facilitate trade, thereby _______ economic growth across provinces.",
      options: ["fostering", "impeding", "stifling", "curbing"],
      answer: "fostering",
      category: "Reading",
      rationale: "Paragraph 5 details that processing overhauls were introduced explicitly 'thereby fostering significant trade stimulation.'"
    },
    {
      id: 45,
      passage: "Paragraph 5: Global economic logistics rely heavily on seamless maritime container paths. Recent structural changes aimed to streamline processing bottlenecks, thereby fostering significant trade stimulation throughout coastal provinces. The instructions detailed in the operations handbook were so exceptionally lucid that any layout ambiguity was completely Belgian or completely obviated.",
      question: "The instructions provided in the guide were so clear that any ambiguity was entirely _______.",
      options: ["obviated", "heightened", "preserved", "tolerated"],
      answer: "obviated",
      category: "Reading",
      rationale: "The final line states that due to exceptionally lucid documentation, structural error or layout ambiguity was 'completely obviated.'"
    },
    {
      id: 46,
      passage: "Paragraph 6: Historians note that the empires of that era were characterized by their profound cultural diversity. However, the sudden volatility in regional climate metrics presents a formidable threat to agricultural stability.",
      question: "Historians note that the empires of that era were characterized by their _______ cultural diversity.",
      options: ["profound", "shallow", "trivial", "insignificant"],
      answer: "profound",
      category: "Reading",
      rationale: "The paragraph explicitly uses the modifier 'profound' to label the historical depth of the empire's internal cultural diversity."
    },
    {
      id: 47,
      passage: "Paragraph 6: Historians note that the empires of that era were characterized by their profound cultural diversity. However, the sudden volatility in regional climate metrics presents a formidable threat to agricultural stability.",
      question: "The sudden shift in climate patterns presents a _______ threat to agricultural stability.",
      options: ["formidable", "negligible", "harmless", "encouraging"],
      answer: "formidable",
      category: "Reading",
      rationale: "The author explicitly classifies the ongoing volatility metrics as presenting a 'formidable threat' to local farming structures."
    },
    {
      id: 48,
      passage: "Paragraph 7: Furthermore, digital decentralization triggered a massive structural transformation of the banking sector. The rapid arrival of encrypted electronic tokens shifted client interactions. Concurrently, remote educational modules witnessed an unprecedented surge worldwide. Analysts note that while remote training is highly efficient, it demands immense cognitive self-discipline from students to ensure long-term value.",
      question: "According to paragraph 3, what factor triggered the structural transformation of the banking sector?",
      options: ["The arrival of digital currencies", "Strict local labor regulations", "An increase in real estate interest rates", "Public disapproval of classic procedures"],
      answer: "The arrival of digital currencies",
      category: "Reading",
      rationale: "Paragraph 7 outlines that structural changes were directly 'triggered by digital decentralization and the arrival of encrypted tokens' (digital currencies)."
    },
    {
      id: 49,
      passage: "Paragraph 7: Furthermore, digital decentralization triggered a massive structural transformation of the banking sector. The rapid arrival of encrypted electronic tokens shifted client interactions. Concurrently, remote educational modules witnessed an unprecedented surge worldwide. Analysts note that while remote training is highly efficient, it demands immense cognitive self-discipline from students to ensure long-term value.",
      question: "Which of the following statements best summarizes the author's point of view on remote education?",
      options: ["It is highly effective but demands self-discipline", "It will completely replace traditional schools", "It fails to deliver advanced technical knowledge", "It is cheaper but inherently flawed socially"],
      answer: "It is highly effective but demands self-discipline",
      category: "Reading",
      rationale: "The summary sentence notes that while remote platforms remain 'highly efficient, it demands immense cognitive self-discipline from students.'"
    },
    {
      id: 50,
      passage: "Paragraph 7: Furthermore, digital decentralization triggered a massive structural transformation of the banking sector. The rapid arrival of encrypted electronic tokens shifted client interactions. Concurrently, remote educational modules witnessed an unprecedented surge worldwide. Analysts note that while remote training is highly efficient, it demands immense cognitive self-discipline from students to ensure long-term value.",
      question: "The word 'unprecedented' in line 14 is closest in meaning to _______.",
      options: ["never seen before", "highly predictable", "culturally significant", "completely reversible"],
      answer: "never seen before",
      category: "Reading",
      rationale: "'Unprecedented' is defined as something completely new that has never occurred or been experienced before."
    }
  ],
  "Form B": [
    // --- 1. GRAMMAR STRUCTURE SECTION (Items 51 - 65) ---
    {
      id: 51,
      question: "Not only _______ the assignment on time, but she also scored a perfect mark on syntax.",
      options: ["she submitted", "did she submit", "had she submit", "she did submit"],
      answer: "did she submit",
      category: "Grammar",
      rationale: "Starting a sentence with the negative correlative 'not only' requires subject-auxiliary inversion in the past simple ('did she submit')."
    },
    {
      id: 52,
      question: "The admissions dean requested that the international files _______ re-evaluated instantly.",
      options: ["are", "must be", "be", "were"],
      answer: "be",
      category: "Grammar",
      rationale: "The verb 'requested' establishes a mandate requiring a subjunctive clause, which utilizes the base root 'be' for passive constructions."
    },
    {
      id: 53,
      question: "I would appreciate _______ me updated on any sudden changes made to the scoring spreadsheet.",
      options: ["your keeping", "you to keep", "your keep", "to keep"],
      answer: "your keeping",
      category: "Grammar",
      rationale: "The transitive verb 'appreciate' takes a gerund direct object, and formal grammar requires a possessive determiner ('your keeping') to modify the gerund."
    },
    {
      id: 54,
      question: "The team leader spoke with such clarity _______ the candidates felt completely reassured.",
      options: ["than", "as", "that", "so"],
      answer: "that",
      category: "Grammar",
      rationale: "The construction 'such + noun phrase + that' is used to express a cause and its subsequent effect or result clause."
    },
    {
      id: 55,
      question: "Little _______ that the listening section parameters were altered right before launching.",
      options: ["did they know", "they knew", "had they know", "do they knew"],
      answer: "did they know",
      category: "Grammar",
      rationale: "The restrictive adverbial 'little' positioned at the head of a clause induces an inversion of the past tense auxiliary form ('did they know')."
    },
    {
      id: 56,
      question: "The administration would prefer _______ the digital response sheets rather than printing copies.",
      options: ["to archive", "archiving", "archive", "to be archiving"],
      answer: "to archive",
      category: "Grammar",
      rationale: "'Would prefer' takes a full infinitive complement ('to archive') when outlining a specific procedural choice over another alternative."
    },
    {
      id: 57,
      question: "Had the researchers gathered more descriptive telemetry, the final framework _______ sturdier.",
      options: ["would be", "will be", "would have been", "had been"],
      answer: "would have been",
      category: "Grammar",
      rationale: "The inverted past perfect condition ('Had the researchers gathered') characterizes a standard conditional layout requiring 'would have been' in the result clause."
    },
    {
      id: 58,
      question: "No sooner had the proctor sat down _______ a user encountered a severe connectivity crash.",
      options: ["when", "than", "then", "before"],
      answer: "than",
      category: "Grammar",
      rationale: "The limiting clause introductory pairing 'no sooner' mandates matching with the comparative conjunction 'than'."
    },
    {
      id: 59,
      question: "The student Council recommended that the library _______ open twenty-four hours during finals.",
      options: ["remain", "remains", "remained", "to remain"],
      answer: "remain",
      category: "Grammar",
      rationale: "The verb 'recommended' signals a recommendation clause requiring the subjunctive base form of the verb ('remain') without an 's'."
    },
    {
      id: 60,
      question: "Hardly _______ completed her grammar review when her laptop began installing firmware updates.",
      options: ["she had", "had she", "did she", "she did"],
      answer: "had she",
      category: "Grammar",
      rationale: "When 'hardly' starts a sentence to describe sequential past events, it forces a past perfect inversion layout ('had she')."
    },
    {
      id: 61,
      question: "The newly hired coordinator is looking forward to _______ the language assessment workshop.",
      options: ["attend", "attending", "attended", "be attending"],
      answer: "attending",
      category: "Grammar",
      rationale: "The phrasal verb phrase 'looking forward to' contains a terminal preposition, meaning it must govern a gerund ('attending')."
    },
    {
      id: 62,
      question: "The supervisor answers complex inquiries as though she _______ an expert on international laws.",
      options: ["is", "was", "were", "has been"],
      answer: "were",
      category: "Grammar",
      rationale: "The subordinating conjunction 'as though' defines an imaginary or counterfactual state, requiring the past subjunctive 'were'."
    },
    {
      id: 63,
      question: "The technical committee raised several concerns _______ the stability of the servers.",
      options: ["regarding", "regards", "regarded", "regarding to"],
      answer: "regarding",
      category: "Grammar",
      rationale: "The active participle 'regarding' natively operates as a standalone preposition equivalent to 'about' or 'on'."
    },
    {
      id: 64,
      question: "It is vital that every applicant _______ their official registration papers prior to Friday.",
      options: ["uploads", "upload", "uploaded", "to upload"],
      answer: "upload",
      category: "Grammar",
      rationale: "The formulaic expression 'It is vital that' indicates urgency, triggering the subjunctive mood which uses the bare verb form ('upload')."
    },
    {
      id: 65,
      question: "Marcela would rather her classmates _______ the review quiz before asking the instructor.",
      options: ["take", "took", "have taken", "will take"],
      answer: "took",
      category: "Grammar",
      rationale: "When 'would rather' specifies a present or future preference for another subject's action, it takes a past subjunctive complement ('took')."
    },
  
    // --- 2. VOCABULARY SECTION (Items 66 - 80) ---
    {
      id: 66,
      question: "The board announced plans to _______ old testing techniques to optimize processing speed.",
      options: ["phase out", "bring up", "set aside", "take down"],
      answer: "phase out",
      category: "Vocabulary",
      rationale: "The phrasal verb 'phase out' means to systematically withdraw, terminate, or discontinue a product or practice over time."
    },
    {
      id: 67,
      question: "Her contribution to the research team was absolutely _______, helping us reach our targets ahead of time.",
      options: ["invaluable", "redundant", "trivial", "negligible"],
      answer: "invaluable",
      category: "Vocabulary",
      rationale: "'Invaluable' means highly useful, indispensable, or priceless, which fits the context of helping complete goals early."
    },
    {
      id: 68,
      question: "The CEO requested a _______ report detailing only the key financial outcomes of the quarter.",
      options: ["verbose", "prolonged", "concise", "scattered"],
      answer: "concise",
      category: "Vocabulary",
      rationale: "'Concise' means comprehensive yet brief, removing unnecessary wordiness to convey essential bullet points."
    },
    {
      id: 69,
      question: "The company had to _______ its global strategy to better fit local regulatory requirements.",
      options: ["adopt", "adapt", "adept", "adorn"],
      answer: "adapt",
      category: "Vocabulary",
      rationale: "'Adapt' means to modify, adjust, or tweak an existing baseline model to suit a changing external environment."
    },
    {
      id: 70,
      question: "The static noise coming from the intercom rendered the instructions completely _______.",
      options: ["inaudible", "illegible", "incredible", "unfeasible"],
      answer: "inaudible",
      category: "Vocabulary",
      rationale: "'Inaudible' describes auditory inputs or voice vocalizations that cannot be detected by human ears."
    },
    {
      id: 71,
      question: "The arguments presented in the editorial were quite _______, convincing most readers to change their minds.",
      options: ["flimsy", "compelling", "speculative", "ambiguous"],
      answer: "compelling",
      category: "Vocabulary",
      rationale: "'Compelling' means evoking interest, admiration, or conviction through logical and powerful reasoning."
    },
    {
      id: 72,
      question: "The manager's statement was highly _______, causing confusion among the engineering staff.",
      options: ["transparent", "ambiguous", "explicit", "coherent"],
      answer: "ambiguous",
      category: "Vocabulary",
      rationale: "'Ambiguous' statements cause widespread confusion because they lack a single explicit meaning or focus."
    },
    {
      id: 73,
      question: "We need to _______ the structural layout of the server rooms before adding new hardware racks.",
      options: ["scrutinize", "glance", "overlook", "disregard"],
      answer: "scrutinize",
      category: "Vocabulary",
      rationale: "'Scrutinize' denotes conducting a deep, cautious, and highly critical examination of an infrastructure asset."
    },
    {
      id: 74,
      question: "The local government decided to _______ a new tax plan to help fund public transportation projects.",
      options: ["implement", "postpone", "abandon", "repeal"],
      answer: "implement",
      category: "Vocabulary",
      rationale: "'Implement' means to put a decision, plan, or piece of policy into official execution or practice."
    },
    {
      id: 75,
      question: "Her performance during the initial trial runs was quite _______, exceeding all our metrics.",
      options: ["mediocre", "exemplary", "substandard", "erratic"],
      answer: "exemplary",
      category: "Vocabulary",
      rationale: "'Exemplary' means serving as a desirable model, outstanding, or representing the highest tier of achievement."
    },
    {
      id: 76,
      question: "The legal department found several errors that might _______ the entire validity of the agreement.",
      options: ["jeopardize", "strengthen", "validate", "endorse"],
      answer: "jeopardize",
      category: "Vocabulary",
      rationale: "'Jeopardize' maps to putting a system, status, or legally binding agreement into a situation of risk or danger."
    },
    {
      id: 77,
      question: "The sudden drop in atmospheric pressure had a _______ effect on the flight navigation systems.",
      options: ["noticeable", "insignificant", "transparent", "lucrative"],
      answer: "noticeable",
      category: "Vocabulary",
      rationale: "'Noticeable' signifies an effect or change that is easily observed, apparent, or measurable by tools."
    },
    {
      id: 78,
      question: "The developer gave a very _______ explanation, avoiding any technical jargon or codebase details.",
      options: ["superficial", "profound", "comprehensive", "exhaustive"],
      answer: "superficial",
      category: "Vocabulary",
      rationale: "'Superficial' describes an overview focusing only on the obvious exterior layer without exploring structural depth."
    },
    {
      id: 79,
      question: "The project was temporarily put on _______ while the finance board reviewed the operational overhead.",
      options: ["hold", "break", "delay", "stop"],
      answer: "hold",
      category: "Vocabulary",
      rationale: "The corporate phrase 'on hold' indicates an intentional postponement of action pending external approvals."
    },
    {
      id: 80,
      question: "The two tech startups decided to merge their assets to _______ a more dominant market share.",
      options: ["secure", "relinquish", "forfeit", "jeopardize"],
      answer: "secure",
      category: "Vocabulary",
      rationale: "'Secure' means to fix, guarantee, or succeed in obtaining a safe and protected competitive position."
    },
  
    // --- 3. CLOZE TEXT INTEGRATION SECTION (Items 81 - 85) ---
    {
      id: 81,
      question: "[Text Cloze Item 1] Environmental biology monitors delicate habitats. Rapid industrial urbanization has historically driven a major _______ of indigenous flora species.",
      options: ["depletion", "restoration", "cultivation", "preservation"],
      answer: "depletion",
      category: "Cloze",
      rationale: "Urban encroachment into wild habitats inevitably drives a 'depletion' (severe reduction or exhaustion) of local plant life."
    },
    {
      id: 82,
      question: "[Text Cloze Item 2] When local ecological patterns are disrupted, regional micro-climates become highly _______ to extreme drought spikes.",
      options: ["susceptible", "impervious", "shielded", "immune"],
      answer: "susceptible",
      category: "Cloze",
      rationale: "Disrupted ecosystems have less climate resilience, leaving them 'susceptible' (likely to be harmed or influenced) to droughts."
    },
    {
      id: 83,
      question: "[Text Cloze Item 3] To counteract these severe disruptions, conservation boards must _______ protective zoning mandates.",
      options: ["enact", "repeal", "ignore", "suspend"],
      answer: "enact",
      category: "Cloze",
      rationale: "To counteract ecological damage, administrative bodies must 'enact' (make into official law or execute) new safety mandates."
    },
    {
      id: 84,
      question: "[Text Cloze Item 4] These restorative parameters must be managed _______ across state lines to avoid disjointed conservation efforts.",
      options: ["cohesively", "randomly", "scarcely", "erratically"],
      answer: "cohesively",
      category: "Cloze",
      rationale: "Avoiding 'disjointed' efforts requires running programs 'cohesively' (closely united, structured, and working smoothly together)."
    },
    {
      id: 85,
      question: "[Text Cloze Item 5] Ultimately, delaying green architectural updates will cause structural damage that is completely _______.",
      options: ["irremediable", "negligible", "reversible", "beneficial"],
      answer: "irremediable",
      category: "Cloze",
      rationale: "Continuous delay leads to systemic environmental degradation, resulting in 'irremediable' (impossible to cure, correct, or repair) damage."
    },
  
    // --- 4. READING COMPREHENSION SECTION WITH INJECTED PASSAGES (Items 86 - 100) ---
    {
      id: 86,
      passage: "Paragraph 1: In the early 21st century, computational physics observed a significant paradigm shift driven by advanced processing arrays. Early developers noted that analytical methodologies struggled to maintain pace with quantum algorithms. Researchers explicitly stated that systems working to dispel classic misconceptions managed to validate newer telemetry projections.",
      question: "The primary intent of the passage is to _______ the classic misconceptions about quantum algorithms.",
      options: ["dispel", "propagate", "validate", "endorse"],
      answer: "dispel",
      category: "Reading",
      rationale: "The passage directly notes that systems were working specifically to 'dispel classic misconceptions' around quantum architectures."
    },
    {
      id: 87,
      passage: "Paragraph 1: In the early 21st century, computational physics observed a significant paradigm shift driven by advanced processing arrays. Early developers noted that analytical methodologies struggled to maintain pace with quantum algorithms. Researchers explicitly stated that systems working to dispel classic misconceptions managed to validate newer telemetry projections.",
      question: "The transition into modern data automation frameworks has proven to be remarkably _______ for smaller centers.",
      options: ["advantageous", "hazardous", "detrimental", "tedious"],
      answer: "advantageous",
      category: "Reading",
      rationale: "The passage implies that validating telemetry successfully makes the integration 'advantageous' (beneficial or offering a distinct upside)."
    },
    {
      id: 88,
      passage: "Paragraph 2: Furthermore, the research oversight committee managed to deliver a completely unanimous verdict after reviewing the final operational telemetry data. This eliminated the previous bottlenecks that had left internal operational boards heavily discordant and divided for several working quarters.",
      question: "The research oversight committee managed to deliver a _______ verdict after reviewing the final telemetry data.",
      options: ["unanimous", "discordant", "hesitant", "divided"],
      answer: "unanimous",
      category: "Reading",
      rationale: "The text explicitly highlights that the administrative council managed to deliver a 'completely unanimous verdict.'"
    },
    {
      id: 89,
      passage: "Paragraph 3: Large-scale civil infrastructure projects often encounter massive delays when federal reserve allocations become completely exhausted. To prevent total operational collapse, project managers must pivot immediately to alternative private funding models before construction channels freeze.",
      question: "Large-scale civil infrastructure projects often encounter massive delays when federal allocations become _______.",
      options: ["exhausted", "inflated", "surpassed", "replenished"],
      answer: "exhausted",
      category: "Reading",
      rationale: "Paragraph 3 links building layout bottlenecks directly to resource metrics becoming 'completely exhausted.'"
    },
    {
      id: 90,
      passage: "Paragraph 3: Large-scale civil infrastructure projects often encounter massive delays when federal reserve allocations become completely exhausted. To prevent total operational collapse, project managers must pivot immediately to alternative private funding models before construction channels freeze.",
      question: "The author explicitly implies that the initial laboratory readings were far from _______.",
      options: ["conclusive", "arbitrary", "erroneous", "unreliable"],
      answer: "conclusive",
      category: "Reading",
      rationale: "The context indicates that mandatory secondary verification is required because early outputs were far from 'conclusive.'"
    },
    {
      id: 91,
      passage: "Paragraph 4: To safeguard fragile marine biomes, global coalitions must drastically scale back the commercial exploitation of protected maritime zones. Environmentalists warn that neglecting core biological indicators leads to irreversible deterioration across the entire oceanic food web.",
      question: "To safeguard fragile marine biomes, global coalitions must drastically scale back the _______ of maritime zones.",
      options: ["exploitation", "reclamation", "preservation", "nurturing"],
      answer: "exploitation",
      category: "Reading",
      rationale: "The text explicitly demands that nations immediately scale back the ongoing 'commercial exploitation' of maritime waters."
    },
    {
      id: 92,
      passage: "Paragraph 5: The newly adopted regional trade model aims to simplify macro-logistics, thereby stimulating financial development across participating provinces. The operational implementation plans provided by the council were remarkably transparent, completely eliminating classical friction points.",
      question: "The newly adopted trade model aims to simplify logistics, thereby _______ macro-economic development.",
      options: ["stimulating", "stifling", "curbing", "impeding"],
      answer: "stimulating",
      category: "Reading",
      rationale: "Paragraph 5 clearly defines the primary economic objective of the logistical shifts as 'stimulating financial development.'"
    },
    {
      id: 93,
      passage: "Paragraph 5: The newly adopted regional trade model aims to simplify macro-logistics, thereby stimulating financial development across participating provinces. The operational implementation plans provided by the council were remarkably transparent, completely eliminating classical friction points.",
      question: "The installation procedures detailed in the handbook were so lucid that any configuration ambiguity was _______.",
      options: ["obviated", "amplified", "maintained", "tolerated"],
      answer: "obviated",
      category: "Reading",
      rationale: "The passage notes that because instructions were lucid, system errors and structural layout ambiguities were 'obviated' (rendered unnecessary or cleared away)."
    },
    {
      id: 94,
      passage: "Paragraph 6: Anthropologists argue that the ancient societies of that region were distinguished by their profound architectural depth. Their structural systems utilized intricate stonework engineering that remained unmatched for several centuries, proving advanced mechanical insight.",
      question: "Anthropologists argue that the ancient societies of that region were distinguished by their _______ architectural depth.",
      options: ["profound", "shallow", "trivial", "insignificant"],
      answer: "profound",
      category: "Reading",
      rationale: "The author explicitly describes the ancient societies' design skill as displaying a 'profound architectural depth.'"
    },
    {
      id: 95,
      passage: "Paragraph 6: Anthropologists argue that the ancient societies of that region were distinguished by their profound architectural depth. Their structural systems utilized intricate stonework engineering that remained unmatched for several centuries, proving advanced mechanical insight.",
      question: "The exponential rise in sea level configurations poses a _______ threat to low-lying coastal townships.",
      options: ["formidable", "negligible", "harmless", "promising"],
      answer: "formidable",
      category: "Reading",
      rationale: "The text indicates that the continuous acceleration of changing ocean footprints introduces a 'formidable' (inspiring caution or intense respect) threat."
    },
    {
      id: 96,
      passage: "Paragraph 7: According to section 4, what event directly triggered the massive restructuring of the clean energy grid? The sudden introduction of next-gen solar cells fundamentally altered production capabilities. This development immediately neutralized long-standing legislative battles regarding distribution limits.",
      question: "According to section 4, what event directly triggered the massive restructuring of the clean energy grid?",
      options: ["The introduction of next-gen solar cells", "Strict tax policies on electric models", "A decrease in fossil fuel extraction limits", "Public outcries against nuclear arrays"],
      answer: "The introduction of next-gen solar cells",
      category: "Reading",
      rationale: "Paragraph 7 states directly that 'the sudden introduction of next-gen solar cells fundamentally altered production capabilities,' sparking grid restructuring."
    },
    {
      id: 97,
      passage: "Paragraph 8: Which of the following phrases best captures the author's stance on automated linguistic translations? It is highly proficient but lacks emotional tone. The framework successfully translates complex structural syntax strings but consistently strips away regional idiomatic nuances.",
      question: "Which of the following phrases best captures the author's stance on automated linguistic translations?",
      options: ["It is highly proficient but lacks emotional tone", "It will completely substitute human interpreters soon", "It struggles to process basic syntax structures", "It is expensive and mathematically flawed"],
      answer: "It is highly proficient but lacks emotional tone",
      category: "Reading",
      rationale: "The passage directly asks and answers this item by stating: 'It is highly proficient but lacks emotional tone.'"
    },
    {
      id: 98,
      passage: "Paragraph 8: Which of the following phrases best captures the author's stance on automated linguistic translations? It is highly proficient but lacks emotional tone. The framework successfully translates complex structural syntax strings but consistently strips away regional idiomatic nuances.",
      question: "The word 'unprecedented' in line 22 is closest in meaning to _______.",
      options: ["unparalleled", "predictable", "customary", "reversible"],
      answer: "unparalleled",
      category: "Reading",
      rationale: "In this semantic context, 'unprecedented' signals an achievement that is 'unparalleled' or entirely matchless up to that point."
    },
    {
      id: 99,
      passage: "Paragraph 9: Climatologists warn that the structural changes inside polar ice caps are completely irreversible. Even if thermal levels drop slightly over the next decade, the melting trends have crossed a critical tipping point.",
      question: "Climatologists warn that the structural changes inside polar ice caps are completely _______.",
      options: ["irreversible", "minor", "temporary", "advantageous"],
      answer: "irreversible",
      category: "Reading",
      rationale: "Paragraph 9 states explicitly that structural modifications happening inside global ice arrays are 'completely irreversible.'"
    },
    {
      id: 100,
      passage: "Paragraph 9: Climatologists warn that the structural changes inside polar ice caps are completely irreversible. Even if thermal levels drop slightly over the next decade, the melting trends have crossed a critical tipping point.",
      question: "The author mentions the historical records in paragraph 2 primarily in order to _______.",
      options: ["provide context for the current paradigm shift", "disprove alternative archaeological theories", "expose flaws in ancient mathematical models", "criticize old logging documentation guidelines"],
      answer: "provide context for the current paradigm shift",
      category: "Reading",
      rationale: "Historical benchmarks are explicitly invoked at the structural opening to 'provide context for the current paradigm shift' occurring inside the sector."
    }
  ]
};