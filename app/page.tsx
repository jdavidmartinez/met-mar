'use client';

import React, { useState, useEffect } from 'react';

// Define the structure of the incoming API questions
interface Question {
  id: number;
  question: string;
  options: string[];
  answer: string;
  category: 'Grammar' | 'Vocabulary' | 'Cloze' | 'Reading';
  passage?: string;
  rationale: string;
}

export default function Home() {
  // --- State Definitions ---
  const [studentName, setStudentName] = useState<string>('');
  const [nameInput, setNameInput] = useState<string>('');
  const [testMode, setTestMode] = useState<'simulation' | 'practice'>('simulation');
  const [selectedCategory, setSelectedCategory] = useState<string>('Grammar');
  
  // Asynchronous API and data population states
  const [isExamStarted, setIsExamStarted] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [apiError, setApiError] = useState<string | null>(null);
  const [shuffledQuestions, setShuffledQuestions] = useState<Question[]>([]);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [timeLeft, setTimeLeft] = useState(3900); // 65 minutes = 3900 seconds

  const currentQuestion = shuffledQuestions[currentQuestionIndex];

  // Real-time countdown timer logic
  useEffect(() => {
    if (!isExamStarted || testMode !== 'simulation' || isFinished) return;
    if (timeLeft <= 0) {
      setIsFinished(true);
      return;
    }
    const timerInterval = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);
    return () => clearInterval(timerInterval);
  }, [timeLeft, isFinished, isExamStarted, testMode]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  // FIXED PARALLEL PAGINATED PIPELINE: Requests individual chunks and pieces them together safely
  const fetchFullMETSimulation = async () => {
    setIsLoading(true);
    setApiError(null);
    try {
      // Internal batch-fetching worker targeting specific categories
      const fetchSection = async (category: 'Grammar' | 'Vocabulary' | 'Cloze' | 'Reading', limit: number) => {
        const response = await fetch('/api/generate-questions', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ category, amount: limit }),
        });
        
        if (!response.ok) {
          throw new Error(`Failed loading ${category} section (Status ${response.status}).`);
        }
        return await response.json();
      };

      if (testMode === 'practice') {
        // Practice Mode: Single focused chunk target (5 for Cloze text, 15 for standard items)
        const targetCount = selectedCategory === 'Cloze' ? 5 : 15;
        const practiceData = await fetchSection(selectedCategory as any, targetCount);
        setShuffledQuestions(practiceData);
      } else {
        // Full Simulation Mode: Execute parallel server requests to generate each section block cleanly
        const [grammarBlock, vocabularyBlock, clozeBlock, readingBlock] = await Promise.all([
          fetchSection('Grammar', 15),
          fetchSection('Vocabulary', 15),
          fetchSection('Cloze', 5),
          fetchSection('Reading', 15)
        ]);

        // Merge components strictly in official chronological MET order
        const full50QuestionExam = [
          ...grammarBlock,
          ...vocabularyBlock,
          ...clozeBlock,
          ...readingBlock
        ];

        setShuffledQuestions(full50QuestionExam);
      }
      
      setIsExamStarted(true);
    } catch (err: any) {
      console.error("MET Pagination pipeline failed:", err);
      setApiError(err.message || "Could not assemble questions from Gemini. Check server logs.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleStartExam = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nameInput.trim()) return;
    setStudentName(nameInput.trim());
    
    // Execute our updated dynamic batched sequence
    fetchFullMETSimulation();
  };

  // STEP 1 & 2: Instant grading and color activation on option click
  const handleOptionClick = (option: string) => {
    if (selectedAnswer !== null) return;
    
    setSelectedAnswer(option);

    if (option === currentQuestion.answer) {
      setScore((prev) => prev + 1);
    }
  };

  // STEP 3: Simple Continue action to advance clean to the next question
  const handleNextClick = () => {
    setSelectedAnswer(null);
    
    if (currentQuestionIndex + 1 < shuffledQuestions.length) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      setIsFinished(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setScore(0);
    setTimeLeft(3900);
    setIsFinished(false);
    fetchFullMETSimulation();
  };

  const handleLogOut = () => {
    setStudentName('');
    setNameInput('');
    setShuffledQuestions([]);
    setIsExamStarted(false);
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setScore(0);
    setTimeLeft(3900);
    setIsFinished(false);
    setApiError(null);
  };

  const getCEFRLevel = (finalScore: number) => {
    const name = studentName || 'The candidate';
    const totalItems = shuffledQuestions.length;
    if (totalItems === 0) return { level: 'N/A', color: 'bg-gray-50', desc: '' };
    const successRatio = finalScore / totalItems;
    const scopeLabel = testMode === 'practice' ? `in this ${selectedCategory} module` : 'overall';

    if (successRatio >= 0.80) {
      return { level: 'C1 (Advanced)', color: 'text-emerald-700 bg-emerald-50 border-emerald-200', desc: `${name} demonstrates an advanced and fluent command ${scopeLabel}.` };
    }
    if (successRatio >= 0.60) {
      return { level: 'B2 (Upper-Intermediate)', color: 'text-blue-700 bg-blue-50 border-blue-200', desc: `${name} displays a solid upper-intermediate capacity ${scopeLabel}.` };
    }
    if (successRatio >= 0.40) {
      return { level: 'B1 (Intermediate)', color: 'text-amber-700 bg-amber-50 border-amber-200', desc: `${name} handles the core fundamentals ${scopeLabel} but needs targeted iterations.` };
    }
    return { level: 'A2 (Elementary or lower)', color: 'text-rose-700 bg-rose-50 border-rose-200', desc: `A baseline performance score. Reviews are recommended for ${name}.` };
  };

  const getCategoryStyles = (category: string) => {
    switch (category) {
      case 'Grammar': return { bg: 'bg-indigo-50 border-indigo-100', text: 'text-indigo-700', label: 'Grammar Structure' };
      case 'Vocabulary': return { bg: 'bg-amber-50 border-amber-100', text: 'text-amber-700', label: 'Vocabulary & Collocations' };
      case 'Cloze': return { bg: 'bg-cyan-50 border-cyan-100', text: 'text-cyan-700', label: 'Cloze Passage Context' };
      case 'Reading': return { bg: 'bg-emerald-50 border-emerald-100', text: 'text-emerald-700', label: 'Reading Comprehension' };
      default: return { bg: 'bg-gray-50 border-gray-100', text: 'text-gray-700', label: 'General Evaluation' };
    }
  };

  const activeStyles = !isFinished && isExamStarted && currentQuestion ? getCategoryStyles(currentQuestion.category) : null;
  const resultData = isFinished ? getCEFRLevel(score) : null;

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6 text-gray-800">
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-8 border border-gray-100">
        
        {/* --- SCREEN 1: Welcome & Setup Configuration --- */}
        {!isExamStarted ? (
          <div className="py-4">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-black text-gray-900 tracking-tight mb-2">MET Exam Simulator</h1>
              <p className="text-gray-500 text-sm">AI-Powered Dynamic Question Portal</p>
            </div>

            <form onSubmit={handleStartExam} className="space-y-5 max-w-sm mx-auto">
              {apiError && (
                <div className="p-4 rounded-lg bg-rose-50 border border-rose-200 text-rose-700 text-sm font-medium">
                  ⚠️ Error: {apiError}
                </div>
              )}

              <div>
                <label htmlFor="student-name" className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Candidate Name</label>
                <input id="student-name" type="text" required disabled={isLoading} value={nameInput} onChange={(e) => setNameInput(e.target.value)} placeholder="e.g., Marcela" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-base disabled:opacity-60" />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Choose Practice Target Mode</label>
                <div className="grid grid-cols-2 gap-2 p-1 bg-gray-100 rounded-lg">
                  <button type="button" disabled={isLoading} onClick={() => setTestMode('simulation')} className={`py-2 text-sm font-semibold rounded-md transition-all ${testMode === 'simulation' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}>Full Simulation</button>
                  <button type="button" disabled={isLoading} onClick={() => setTestMode('practice')} className={`py-2 text-sm font-semibold rounded-md transition-all ${testMode === 'practice' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}>Section Practice</button>
                </div>
              </div>

              {testMode === 'practice' && (
                <div className="animate-fadeIn">
                  <label htmlFor="practice-category" className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Select Skill Section Focus</label>
                  <select id="practice-category" value={selectedCategory} disabled={isLoading} onChange={(e) => setSelectedCategory(e.target.value)} className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-base cursor-pointer">
                    <option value="Grammar">Grammar Structure</option>
                    <option value="Vocabulary">Vocabulary & Collocations</option>
                    <option value="Cloze">Cloze Passages Context</option>
                    <option value="Reading">Reading Comprehension</option>
                  </select>
                </div>
              )}

              <button type="submit" disabled={!nameInput.trim() || isLoading} className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-all shadow-sm flex justify-center items-center space-x-2">
                {isLoading ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 border-2 border-gray-400 border-t-blue-600 rounded-full animate-spin"></div>
                    <span>Consulting Gemini AI Engine...</span>
                  </div>
                ) : (
                  <span>{testMode === 'simulation' ? 'Launch 50-Question Exam' : `Practice ${selectedCategory}`}</span>
                )}
              </button>
            </form>
          </div>
        ) : (
          /* --- SCREEN 2: Test Active Question Layout --- */
          <div>
            <div className="flex justify-between items-center border-b pb-4 mb-6">
              <div>
                <h1 className="text-xl font-bold text-gray-900 tracking-tight">MET {testMode === 'simulation' ? 'Simulation Mode' : `${selectedCategory} Drill`}</h1>
                <span className="text-xs text-gray-400 font-medium block">Candidate: <strong className="text-gray-700 font-semibold">{studentName}</strong></span>
              </div>

              {testMode === 'simulation' && !isFinished ? (
                <div className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-mono text-lg font-bold border transition-colors ${timeLeft < 300 ? 'bg-rose-50 border-rose-200 text-rose-600 animate-pulse' : 'bg-gray-50 border-gray-200 text-gray-700'}`}>
                  <span>{formatTime(timeLeft)}</span>
                </div>
              ) : (
                testMode === 'practice' && !isFinished && (
                  <span className="text-xs font-bold text-emerald-600 bg-emerald-50 border border-emerald-100 px-3 py-1.5 rounded-md uppercase tracking-wider">Untimed Practice</span>
                )
              )}
            </div>

            {!isFinished && activeStyles && currentQuestion ? (
              <div>
                <div className={`w-full ${activeStyles.bg} border rounded-lg p-4 mb-6 flex justify-between items-center transition-all duration-300`}>
                  <div>
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block">Current Section</span>
                    <h2 className={`text-lg font-bold ${activeStyles.text}`}>{activeStyles.label}</h2>
                  </div>
                  <div className="text-sm font-bold bg-white px-3 py-1.5 rounded-md shadow-sm border border-gray-100">
                    PROGRESS <strong className="text-gray-900 ml-1">{currentQuestionIndex + 1} / {shuffledQuestions.length}</strong>
                  </div>
                </div>

                {currentQuestion.passage && (
                  <div className="w-full bg-slate-50 border border-slate-200 rounded-lg p-5 mb-6 max-h-64 overflow-y-auto shadow-inner text-sm leading-relaxed text-slate-700 whitespace-pre-line font-medium">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 sticky top-0 bg-slate-50 pb-1">Reading Passage Context:</div>
                    {currentQuestion.passage}
                  </div>
                )}

                <h3 className="text-xl font-medium mb-6 leading-relaxed">{currentQuestion.question}</h3>

                <div className="space-y-3 mb-8">
                  {currentQuestion.options.map((option, index) => {
                    const isSelected = selectedAnswer === option;
                    const hasAnswered = selectedAnswer !== null;
                    const isCorrectOption = option === currentQuestion.answer;

                    let buttonStyle = "border-gray-200 hover:bg-gray-50 text-gray-700";
                    
                    if (hasAnswered) {
                      if (isCorrectOption) {
                        buttonStyle = "border-green-500 bg-green-50 font-medium text-green-700 shadow-sm";
                      } else if (isSelected) {
                        buttonStyle = "border-red-500 bg-red-50 font-medium text-red-700";
                      } else {
                        buttonStyle = "border-gray-150 bg-gray-50 text-gray-300 opacity-60 cursor-not-allowed";
                      }
                    }

                    return (
                      <button 
                        key={index} 
                        disabled={hasAnswered} 
                        onClick={() => handleOptionClick(option)} 
                        className={`w-full text-left px-5 py-4 rounded-lg border transition-all duration-150 flex items-center ${buttonStyle}`}
                      >
                        <span className={`inline-flex items-center justify-center mr-3 font-semibold rounded-full w-6 h-6 text-sm ${
                          hasAnswered && isCorrectOption 
                            ? 'bg-green-600 text-white' 
                            : hasAnswered && isSelected 
                            ? 'bg-red-600 text-white' 
                            : 'bg-gray-100 text-gray-500'
                        }`}>
                          {String.fromCharCode(65 + index)}
                        </span>
                        {option}
                      </button>
                    );
                  })}
                </div>

                {selectedAnswer !== null && currentQuestion.rationale && (
                  <div className="p-4 mb-6 rounded-lg bg-blue-50 border border-blue-100 text-sm text-blue-800 leading-relaxed animate-fadeIn">
                    <strong>Explanation:</strong> {currentQuestion.rationale}
                  </div>
                )}

                <div className="flex flex-col border-t pt-4">
                  <button 
                    onClick={handleNextClick} 
                    disabled={selectedAnswer === null} 
                    className="w-full py-3.5 bg-slate-900 hover:bg-slate-800 disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed text-white font-medium rounded-lg transition-colors shadow-sm text-center"
                  >
                    {currentQuestionIndex + 1 === shuffledQuestions.length ? 'Finish Session' : 'Continue'}
                  </button>
                </div>
              </div>
            ) : (
              /* --- SCREEN 3: Final Performance Diagnostic Dashboard --- */
              <div className="text-center py-6">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Session Complete!</h2>
                <p className="text-gray-500 mb-8">Proficiency Profile for {studentName}:</p>
                
                <div className="inline-block bg-gray-50 border border-gray-100 px-10 py-6 rounded-2xl mb-6 shadow-sm">
                  <span className="text-6xl font-black text-gray-900">{score}</span>
                  <span className="text-2xl text-gray-400 font-bold"> / {shuffledQuestions.length}</span>
                </div>

                {resultData && (
                  <div className={`w-full ${resultData.color} border rounded-xl p-6 mb-8 text-left max-w-md mx-auto shadow-sm`}>
                    <span className="text-xs font-bold uppercase tracking-wider opacity-60 block mb-1">Estimated Level</span>
                    <h3 className="text-2xl font-black mb-3">{resultData.level}</h3>
                    <p className="text-sm leading-relaxed font-medium opacity-90">{resultData.desc}</p>
                  </div>
                )}

                <div className="flex flex-col sm:flex-row justify-center items-center gap-3 mt-4">
                  <button onClick={resetQuiz} className="w-full sm:w-auto px-6 py-2.5 border border-blue-600 text-blue-600 hover:bg-blue-50 font-medium rounded-lg transition-colors">Generate New Exam</button>
                  <button onClick={handleLogOut} className="w-full sm:w-auto px-6 py-2.5 text-gray-500 hover:text-gray-700 font-medium rounded-lg transition-colors text-sm">Return to Dashboard</button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </main>
  );
}