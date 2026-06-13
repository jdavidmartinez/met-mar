'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { MET_EXAM_FORMS, Question } from './data/questions';

// --- Constants ---
const EXAM_TIME_SECONDS = 3900; // 65 minutes

// --- Helpers & Static Logic ---
// Moved outside to prevent recreation on every render
const shuffleArray = (array: Question[]) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const getCategoryStyles = (category: string) => {
  switch (category) {
    case 'Grammar':
      return { bg: 'bg-indigo-50 border-indigo-100', text: 'text-indigo-700', label: 'Grammar Structure' };
    case 'Vocabulary':
      return { bg: 'bg-amber-50 border-amber-100', text: 'text-amber-700', label: 'Vocabulary & Collocations' };
    case 'Cloze':
      return { bg: 'bg-cyan-50 border-cyan-100', text: 'text-cyan-700', label: 'Cloze Passage Context' };
    case 'Reading':
      return { bg: 'bg-emerald-50 border-emerald-100', text: 'text-emerald-700', label: 'Reading Comprehension' };
    default:
      return { bg: 'bg-gray-50 border-gray-100', text: 'text-gray-700', label: 'General Evaluation' };
  }
};

const formatTime = (seconds: number) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
};

export default function Home() {
  // --- State ---
  const [studentName, setStudentName] = useState<string>('');
  const [nameInput, setNameInput] = useState<string>('');
  const [selectedForm, setSelectedForm] = useState<string>('Form A');
  const [testMode, setTestMode] = useState<'simulation' | 'practice'>('simulation');
  const [selectedCategory, setSelectedCategory] = useState<string>('Grammar');
  const [isExamStarted, setIsExamStarted] = useState<boolean>(false);
  const [shuffledQuestions, setShuffledQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [timeLeft, setTimeLeft] = useState(EXAM_TIME_SECONDS);

  // --- Derived State ---
  const currentQuestion = shuffledQuestions[currentQuestionIndex];
  
  // Memoize styles to avoid recalculation unless the current question changes
  const activeStyles = useMemo(() => 
    !isFinished && isExamStarted && currentQuestion 
      ? getCategoryStyles(currentQuestion.category) 
      : null
  , [isFinished, isExamStarted, currentQuestion]);

  // --- Effects ---
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

  // --- Handlers ---
  const prepareQuestions = () => {
    const targetQuestions = MET_EXAM_FORMS[selectedForm] || [];
    
    if (testMode === 'practice') {
      return shuffleArray(targetQuestions.filter(q => q.category === selectedCategory));
    }

    // Full Simulation: Isolate, shuffle independently, and reassemble in correct MET order
    const grammarSec = shuffleArray(targetQuestions.filter(q => q.category === 'Grammar'));
    const vocabSec = shuffleArray(targetQuestions.filter(q => q.category === 'Vocabulary'));
    const clozeSec = shuffleArray(targetQuestions.filter(q => q.category === 'Cloze'));
    const readingSec = shuffleArray(targetQuestions.filter(q => q.category === 'Reading'));

    return [...grammarSec, ...vocabSec, ...clozeSec, ...readingSec];
  };

  const handleStartExam = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nameInput.trim()) return;
    setStudentName(nameInput.trim());
    setShuffledQuestions(prepareQuestions());
    setIsExamStarted(true);
  };

  const handleOptionClick = (option: string) => {
    if (selectedAnswer !== null || isFinished) return;
    setSelectedAnswer(option);
  };

  const handleNextClick = () => {
    if (!currentQuestion) return;

    if (selectedAnswer === currentQuestion.answer) {
      setScore((prev) => prev + 1);
    }
    setSelectedAnswer(null);

    if (currentQuestionIndex + 1 < shuffledQuestions.length) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      setIsFinished(true);
    }
  };

  const resetQuiz = () => {
    setShuffledQuestions(prepareQuestions());
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setScore(0);
    setTimeLeft(EXAM_TIME_SECONDS);
    setIsFinished(false);
  };

  const handleLogOut = () => {
    setStudentName('');
    setNameInput('');
    setShuffledQuestions([]);
    setIsExamStarted(false);
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setScore(0);
    setTimeLeft(EXAM_TIME_SECONDS);
    setIsFinished(false);
  };

  // Memoize performance diagnostic report
  const resultData = useMemo(() => {
    if (!isFinished) return null;

    const name = studentName || 'The candidate';
    const totalItems = shuffledQuestions.length;
    if (totalItems === 0) return { level: 'N/A', color: 'bg-gray-50', desc: '' };
    
    const successRatio = score / totalItems;
    const scopeLabel = testMode === 'practice' ? `in this ${selectedCategory} module` : 'overall';

    if (successRatio >= 0.86) {
      return { 
        level: 'C1 (Advanced)', 
        color: 'text-emerald-700 bg-emerald-50 border-emerald-200', 
        desc: `${name} demonstrates an advanced and fluent command ${scopeLabel}, ideal for high-tier academic or professional standards.` 
      };
    }
    if (successRatio >= 0.64) {
      return { 
        level: 'B2 (Upper-Intermediate)', 
        color: 'text-blue-700 bg-blue-50 border-blue-200', 
        desc: `${name} displays a solid upper-intermediate capacity ${scopeLabel}. This matches the gold standard metric across most institutions.` 
      };
    }
    if (successRatio >= 0.40) {
      return { 
        level: 'B1 (Intermediate)', 
        color: 'text-amber-700 bg-amber-50 border-amber-200', 
        desc: `${name} handles the core fundamentals ${scopeLabel} but needs targeted iterations to patch up structural vulnerabilities.` 
      };
    }
    return { 
      level: 'A2 (Elementary or lower)', 
      color: 'text-rose-700 bg-rose-50 border-rose-200', 
      desc: `A baseline performance score. Comprehensive reviews and diagnostic vocabulary drills are recommended for ${name}.` 
    };
  }, [isFinished, score, studentName, shuffledQuestions.length, testMode, selectedCategory]);

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6 text-gray-800">
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-8 border border-gray-100">
        
        {/* --- SCREEN 1: Welcome / Advanced Configuration --- */}
        {!isExamStarted ? (
          <div className="py-4">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-black text-gray-900 tracking-tight mb-2">
                MET Exam Simulator
              </h1>
              <p className="text-gray-500 text-sm">
                Complete multi-form diagnostic evaluation portal
              </p>
            </div>

            <form onSubmit={handleStartExam} className="space-y-5 max-w-sm mx-auto">
              {/* Input Candidate Name */}
              <div>
                <label htmlFor="student-name" className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                  Enter Candidate Name
                </label>
                <input
                  id="student-name"
                  type="text"
                  required
                  value={nameInput}
                  onChange={(e) => setNameInput(e.target.value)}
                  placeholder="e.g., Marcela"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-base"
                />
              </div>

              {/* Select Exam Version */}
              <div>
                <label htmlFor="exam-form" className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                  Select Exam Form Version
                </label>
                <select
                  id="exam-form"
                  value={selectedForm}
                  onChange={(e) => setSelectedForm(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-base appearance-none cursor-pointer"
                >
                  {Object.keys(MET_EXAM_FORMS).map((formName) => (
                    <option key={formName} value={formName}>
                      {formName} (50 Questions)
                    </option>
                  ))}
                </select>
              </div>

              {/* NEW CHOOSE TEST MODE TOGGLE CONTROLS */}
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                  Choose Practice Target Mode
                </label>
                <div className="grid grid-cols-2 gap-2 p-1 bg-gray-100 rounded-lg">
                  <button
                    type="button"
                    onClick={() => setTestMode('simulation')}
                    className={`py-2 text-sm font-semibold rounded-md transition-all ${
                      testMode === 'simulation' 
                        ? 'bg-white text-blue-600 shadow-sm' 
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    Full Simulation
                  </button>
                  <button
                    type="button"
                    onClick={() => setTestMode('practice')}
                    className={`py-2 text-sm font-semibold rounded-md transition-all ${
                      testMode === 'practice' 
                        ? 'bg-white text-blue-600 shadow-sm' 
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    Section Practice
                  </button>
                </div>
              </div>

              {/* NEW CHOOSE CATEGORY TARGET SUB-DROPDOWN */}
              {testMode === 'practice' && (
                <div className="animate-fadeIn">
                  <label htmlFor="practice-category" className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                    Select Skill Section Focus
                  </label>
                  <select
                    id="practice-category"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-base appearance-none cursor-pointer"
                  >
                    <option value="Grammar">Grammar Structure (15 Qs)</option>
                    <option value="Vocabulary">Vocabulary & Collocations (15 Qs)</option>
                    <option value="Cloze">Cloze Passages Context (5 Qs)</option>
                    <option value="Reading">Reading Comprehension (15 Qs)</option>
                  </select>
                </div>
              )}

              <button
                type="submit"
                disabled={!nameInput.trim()}
                className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-all shadow-sm flex justify-center items-center space-x-2"
              >
                <span>
                  {testMode === 'simulation' ? `Launch ${selectedForm}` : `Practice ${selectedCategory}`}
                </span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </button>
            </form>
          </div>
        ) : (
          /* --- EXAM RENDERING INTERFACES --- */
          <div>
            {/* Simulator Header */}
            <div className="flex justify-between items-center border-b pb-4 mb-6">
              <div>
                <h1 className="text-xl font-bold text-gray-900 tracking-tight">
                  MET {testMode === 'simulation' ? `${selectedForm} Mode` : `${selectedCategory} Drill`}
                </h1>
                <span className="text-xs text-gray-400 font-medium block">
                  Candidate: <strong className="text-gray-700 font-semibold">{studentName}</strong>
                </span>
              </div>

              {/* Render countdown timer ONLY during full simulations */}
              {testMode === 'simulation' && !isFinished ? (
                <div className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-mono text-lg font-bold border transition-colors ${
                  timeLeft < 300 ? 'bg-rose-50 border-rose-200 text-rose-600 animate-pulse' : 'bg-gray-50 border-gray-200 text-gray-700'
                }`}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                  <span>{formatTime(timeLeft)}</span>
                </div>
              ) : (
                testMode === 'practice' && !isFinished && (
                  <span className="text-xs font-bold text-emerald-600 bg-emerald-50 border border-emerald-100 px-3 py-1.5 rounded-md uppercase tracking-wider">
                    Untimed Practice
                  </span>
                )
              )}
            </div>

            {/* --- SCREEN 2: Test Active Question Layout --- */}
            {!isFinished && activeStyles && currentQuestion ? (
              <div>
                {/* Active Exam Section Banner */}
                <div className={`w-full ${activeStyles.bg} border rounded-lg p-4 mb-6 flex justify-between items-center transition-all duration-300`}>
                  <div>
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block">
                      Current Section
                    </span>
                    <h2 className={`text-lg font-bold ${activeStyles.text}`}>
                      {activeStyles.label}
                    </h2>
                  </div>
                  <div className="text-sm font-bold bg-white px-3 py-1.5 rounded-md shadow-sm border border-gray-100">
                    Q. {currentQuestionIndex + 1} / {shuffledQuestions.length}
                  </div>
                </div>

                {/* NEW FIX: Shared Text Passage Box to resolve missing reading text context */}
                {currentQuestion.passage && (
                  <div className="w-full bg-slate-50 border border-slate-200 rounded-lg p-5 mb-6 max-h-64 overflow-y-auto shadow-inner text-sm leading-relaxed text-slate-700 whitespace-pre-line font-medium">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 sticky top-0 bg-slate-50 pb-1">
                      Reading Passage Context:
                    </div>
                    {currentQuestion.passage}
                  </div>
                )}

                {/* Question Text */}
                <h3 className="text-xl font-medium mb-6 leading-relaxed">
                  {currentQuestion.question}
                </h3>

                {/* Option Selection List */}
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
                        className={`w-full text-left px-5 py-4 rounded-lg border transition-all duration-150 ${buttonStyle}`}
                      >
                        <span className="inline-block mr-3 font-semibold">
                          {String.fromCharCode(65 + index)}.
                        </span>
                        {option}
                      </button>
                    );
                  })}
                </div>

                {/* Rationale / Explanation Box: Appears once an answer is selected */}
                {selectedAnswer !== null && currentQuestion.rationale && (
                  <div className="mb-8 p-5 bg-blue-50 border-l-4 border-blue-500 rounded-r-xl animate-in fade-in slide-in-from-top-4 duration-500">
                    <div className="flex items-center gap-2 mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-blue-600">
                        <path fillRule="evenodd" d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-7-4a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9 9a.75.75 0 0 0 0 1.5h.253a.25.25 0 0 1 .244.304l-.459 2.066A1.75 1.75 0 0 0 10.747 15H11a.75.75 0 0 0 0-1.5h-.253a.25.25 0 0 1-.244-.304l.459-2.066A1.75 1.75 0 0 0 9.253 9H9Z" clipRule="evenodd" />
                      </svg>
                      <h4 className="text-sm font-bold text-blue-800 uppercase tracking-wider">Expert Explanation</h4>
                    </div>
                    <p className="text-blue-900 text-sm leading-relaxed italic">
                      {currentQuestion.rationale}
                    </p>
                  </div>
                )}

                {/* Navigation Button Footer */}
                <div className="flex justify-end border-t pt-4">
                  <button
                    onClick={handleNextClick}
                    disabled={!selectedAnswer}
                    className="px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-medium rounded-lg transition-colors shadow-sm"
                  >
                    {currentQuestionIndex + 1 === shuffledQuestions.length ? 'Finish Session' : 'Next Question'}
                  </button>
                </div>
              </div>
            ) : (
              /* --- SCREEN 3: Final Performance Diagnostic Report --- */
              <div className="text-center py-6">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  {timeLeft <= 0 && testMode === 'simulation' ? 'Time is Up!' : 'Session Complete!'}
                </h2>
                <p className="text-gray-500 mb-8">Here is the estimated proficiency profile for {studentName}:</p>
                
                <div className="inline-block bg-gray-50 border border-gray-100 px-10 py-6 rounded-2xl mb-6 shadow-sm">
                  <span className="text-6xl font-black text-gray-900">{score}</span>
                  <span className="text-2xl text-gray-400 font-bold"> / {shuffledQuestions.length}</span>
                  <p className="text-xs text-gray-400 mt-2 uppercase tracking-wide font-semibold">Correct Answers</p>
                </div>

                {/* Dynamic CEFR Level Card */}
                {resultData && (
                  <div className={`w-full ${resultData.color} border rounded-xl p-6 mb-8 text-left max-w-md mx-auto shadow-sm`}>
                    <span className="text-xs font-bold uppercase tracking-wider opacity-60 block mb-1">
                      Estimated CEFR Level
                    </span>
                    <h3 className="text-2xl font-black mb-3">
                      {resultData.level}
                    </h3>
                    <p className="text-sm leading-relaxed font-medium opacity-90">
                      {resultData.desc}
                    </p>
                  </div>
                )}

                <div className="flex flex-col sm:flex-row justify-center items-center gap-3 mt-4">
                  <button
                    onClick={resetQuiz}
                    className="w-full sm:w-auto px-6 py-2.5 border border-blue-600 text-blue-600 hover:bg-blue-50 font-medium rounded-lg transition-colors"
                  >
                    Retake Session
                  </button>
                  <button
                    onClick={handleLogOut}
                    className="w-full sm:w-auto px-6 py-2.5 text-gray-500 hover:text-gray-700 font-medium rounded-lg transition-colors text-sm"
                  >
                    Return to Dashboard
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </main>
  );
}