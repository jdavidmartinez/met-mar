'use client';

import React, { useState, useEffect } from 'react';
import { MET_BANK_QUESTIONS } from './data/questions';

export default function Home() {
  // --- State Definitions ---
  const [studentName, setStudentName] = useState<string>('');
  const [nameInput, setNameInput] = useState<string>('');
  const [isExamStarted, setIsExamStarted] = useState<boolean>(false);

  // NEW STATE: Stores the randomized subset of questions for the active session
  const [shuffledQuestions, setShuffledQuestions] = useState<typeof MET_BANK_QUESTIONS>([]);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  
  // Time management in seconds (65 minutes = 3900 seconds)
  const [timeLeft, setTimeLeft] = useState(3900);

  // MODIFIED: Extract the active question from the dynamic shuffled array instead of the static bank
  const currentQuestion = shuffledQuestions[currentQuestionIndex];

  // --- Effects ---
  // Real-time countdown timer logic
  useEffect(() => {
    if (!isExamStarted || isFinished) return;

    if (timeLeft <= 0) {
      setIsFinished(true);
      return;
    }

    const timerInterval = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timerInterval);
  }, [timeLeft, isFinished, isExamStarted]);

  // --- Helper Functions ---
  // Formats total seconds into a readable "MM:SS" string
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  // NEW HELPER: Fisher-Yates shuffle algorithm to randomize questions unbiasedly
  const shuffleArray = (array: typeof MET_BANK_QUESTIONS) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // Triggers the exam initialization, including the background question randomization
  const handleStartExam = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nameInput.trim()) return;
    
    setStudentName(nameInput.trim());
    
    // Randomize the centralized question bank before launching the test screen
    const randomizedQuestions = shuffleArray(MET_BANK_QUESTIONS);
    setShuffledQuestions(randomizedQuestions);
    
    setIsExamStarted(true);
  };

  const handleOptionClick = (option: string) => {
    if (selectedAnswer !== null) return;
    setSelectedAnswer(option);
  };

  const handleNextClick = () => {
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

  // Resets the simulator and shuffles the bank again for a completely new sequence
  const resetQuiz = () => {
    const randomizedQuestions = shuffleArray(MET_BANK_QUESTIONS);
    setShuffledQuestions(randomizedQuestions);
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setScore(0);
    setTimeLeft(3900);
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
    setTimeLeft(3900);
    setIsFinished(false);
  };

  // Maps score to CEFR level dynamically using the student's name
  const getCEFRLevel = (finalScore: number) => {
    const name = studentName || 'The candidate';
    if (finalScore >= 43) {
      return { 
        level: 'C1 (Advanced)', 
        color: 'text-emerald-700 bg-emerald-50 border-emerald-200', 
        desc: `${name} demonstrates an advanced and fluent command of the language, ideal for highly demanding professional environments or international postgraduate studies.` 
      };
    }
    if (finalScore >= 32) {
      return { 
        level: 'B2 (Upper-Intermediate)', 
        color: 'text-blue-700 bg-blue-50 border-blue-200', 
        desc: `${name} has a solid upper-intermediate level. This is the gold standard required by most global universities and corporations.` 
      };
    }
    if (finalScore >= 20) {
      return { 
        level: 'B1 (Intermediate)', 
        color: 'text-amber-700 bg-amber-50 border-amber-200', 
        desc: `${name} understands the core points of the exam but needs to reinforce complex vocabulary and advanced grammatical structures.` 
      };
    }
    return { 
      level: 'A2 (Elementary or lower)', 
      color: 'text-rose-700 bg-rose-50 border-rose-200', 
      desc: `A baseline evaluation level. An exhaustive review of grammatical foundations is highly recommended for ${name} before taking the official test.` 
    };
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

  const activeStyles = !isFinished && isExamStarted && currentQuestion ? getCategoryStyles(currentQuestion.category) : null;
  const resultData = isFinished ? getCEFRLevel(score) : null;

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6 text-gray-800">
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-8 border border-gray-100">
        
        {/* --- SCREEN 1: Welcome / Name Registration --- */}
        {!isExamStarted ? (
          <div className="py-4">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-black text-gray-900 tracking-tight mb-2">
                MET Exam Simulator
              </h1>
              <p className="text-gray-500 text-sm">
                Complete 50-question baseline diagnostics portal
              </p>
            </div>

            <form onSubmit={handleStartExam} className="space-y-5 max-w-sm mx-auto">
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
                  placeholder="e.g., Marcela Martinez"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all text-base"
                />
              </div>

              <button
                type="submit"
                disabled={!nameInput.trim()}
                className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-all shadow-sm flex justify-center items-center space-x-2"
              >
                <span>Initialize Simulation</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </button>
            </form>
          </div>
        ) : (
          /* --- EXAM RENDERING INTERFACES --- */
          <div>
            {/* Simulator Header with Integrated Countdown Timer */}
            <div className="flex justify-between items-center border-b pb-4 mb-6">
              <div>
                <h1 className="text-xl font-bold text-gray-900 tracking-tight">
                  MET Exam Simulator
                </h1>
                <span className="text-xs text-gray-400 font-medium block">
                  Candidate: <strong className="text-gray-700 font-semibold">{studentName}</strong>
                </span>
              </div>

              {/* Dynamic Timer Component */}
              {!isFinished && (
                <div className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-mono text-lg font-bold border transition-colors ${
                  timeLeft < 300 
                    ? 'bg-rose-50 border-rose-200 text-rose-600 animate-pulse' 
                    : 'bg-gray-50 border-gray-200 text-gray-700'
                }`}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                  <span>{formatTime(timeLeft)}</span>
                </div>
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

                {/* Navigation Button Footer */}
                <div className="flex justify-end border-t pt-4">
                  <button
                    onClick={handleNextClick}
                    disabled={!selectedAnswer}
                    className="px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-medium rounded-lg transition-colors shadow-sm"
                  >
                    {currentQuestionIndex + 1 === shuffledQuestions.length ? 'Finish Test' : 'Next Question'}
                  </button>
                </div>
              </div>
            ) : (
              /* --- SCREEN 3: Final Performance Diagnostic Report --- */
              <div className="text-center py-6">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  {timeLeft <= 0 ? 'Time is Up!' : 'Simulation Complete!'}
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
                    Retake Full Test
                  </button>
                  <button
                    onClick={handleLogOut}
                    className="w-full sm:w-auto px-6 py-2.5 text-gray-500 hover:text-gray-700 font-medium rounded-lg transition-colors text-sm"
                  >
                    Change Candidate
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