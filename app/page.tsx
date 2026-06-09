'use client';
import React, { useState } from 'react';

const MOCK_QUESTIONS = [
  {
    id: 1,
    question: "Choose the correct option: By the time Marcela finishes her studies, she _______ English fluently.",
    options: ["will speak", "will have spoken", "is speaking", "speaks"],
    answer: "will have spoken"
  },
  {
    id: 2,
    question: "If I _______ more time last night, I would have reviewed the MET listening sections.",
    options: ["had", "have had", "had had", "would have"],
    answer: "had had"
  },
  {
    id: 3,
    question: "The director insisted that the exam _______ postponed immediately.",
    options: ["be", "is", "was", "to be"],
    answer: "be"
  },
  {
    id: 4,
    question: "Rarely _______ such a comprehensive language assessment framework.",
    options: ["we have seen", "have we seen", "we saw", "do we saw"],
    answer: "have we seen"
  },
  {
    id: 5,
    question: "Marcela is looking forward to _______ her upcoming evaluation results.",
    options: ["receive", "receiving", "received", "be receiving"],
    answer: "receiving"
  },
  {
    id: 6,
    question: "Despite _______ hard all weekend, he still found the reading module challenging.",
    options: ["study", "studied", "studying", "he studied"],
    answer: "studying"
  },
  {
    id: 7,
    question: "I would rather you _______ the speaking task before the countdown ends.",
    options: ["finish", "finished", "have finished", "will finish"],
    answer: "finished"
  },
  {
    id: 8,
    question: "The exam instructions were _______ complex that many students asked for clarification.",
    options: ["such", "so", "too", "very"],
    answer: "so"
  },
  {
    id: 9,
    question: "Hardly had the listening audio started _______ the electricity went out.",
    options: ["than", "when", "then", "that"],
    answer: "when"
  },
  {
    id: 10,
    question: "She acted as though she _______ the answers to all the grammar items.",
    options: ["knows", "knowed", "knew", "has known"],
    answer: "knew"
  }
];

export default function Home() {
  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const currentQuestion = MOCK_QUESTIONS[currentQuestionIndex];

  const handleOptionClick = (option: string) => {
    // Prevent changing answer once selected for this question
    if (selectedAnswer !== null) return;
    setSelectedAnswer(option);
  };

  const handleNextClick = () => {
    if (selectedAnswer === currentQuestion.answer) {
      setScore((prev) => prev + 1);
    }

    setSelectedAnswer(null);

    if (currentQuestionIndex + 1 < MOCK_QUESTIONS.length) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      setIsFinished(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setScore(0);
    setIsFinished(false);
  };

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6 text-gray-800">
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-md p-8 border border-gray-100">
        <h1 className="text-2xl font-bold border-b pb-4 mb-6 text-blue-600">
          MET Simulator MVP 1 — Practice Form
        </h1>

        {!isFinished ? (
          <div>
            <div className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">
              Question {currentQuestionIndex + 1} of {MOCK_QUESTIONS.length}
            </div>

            <h2 className="text-xl font-medium mb-6">
              {currentQuestion.question}
            </h2>

            <div className="space-y-3 mb-8">
              {currentQuestion.options.map((option, index) => {
                const isSelected = selectedAnswer === option;
                const hasAnswered = selectedAnswer !== null;
                const isCorrectOption = option === currentQuestion.answer;

                // Dynamic Styling Logic for instant feedback
                let buttonStyle = "border-gray-200 hover:bg-gray-50 text-gray-700";
                
                if (hasAnswered) {
                  if (isCorrectOption) {
                    // Correct option always glows green once clicked
                    buttonStyle = "border-green-500 bg-green-50 font-medium text-green-700 shadow-sm";
                  } else if (isSelected) {
                    // If the user selected this one and it's wrong, turn it red
                    buttonStyle = "border-red-500 bg-red-50 font-medium text-red-700";
                  } else {
                    // Dull out the other wrong answers
                    buttonStyle = "border-gray-150 bg-gray-50 text-gray-400 opacity-60 cursor-not-allowed";
                  }
                } else {
                  // Normal unselected look
                  buttonStyle = "border-gray-200 hover:bg-gray-50 text-gray-700";
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

            <div className="flex justify-end">
              <button
                onClick={handleNextClick}
                disabled={!selectedAnswer}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-medium rounded-lg transition-colors shadow-sm"
              >
                {currentQuestionIndex + 1 === MOCK_QUESTIONS.length ? 'Finish Test' : 'Next Question'}
              </button>
            </div>
          </div>
        ) : (
          <div className="text-center py-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Simulation Complete!</h2>
            <p className="text-gray-500 mb-6">Here is how Marcela performed on this grammar run:</p>
            
            <div className="inline-block bg-blue-50 px-8 py-6 rounded-full mb-8">
              <span className="text-5xl font-black text-blue-600">{score}</span>
              <span className="text-xl text-blue-400 font-bold"> / {MOCK_QUESTIONS.length}</span>
            </div>

            <div>
              <button
                onClick={resetQuiz}
                className="px-6 py-2 border border-blue-600 text-blue-600 hover:bg-blue-50 font-medium rounded-lg transition-colors"
              >
                Try Again
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}