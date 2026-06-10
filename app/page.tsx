'use client';

import React, { useState, useEffect } from 'react';
import { MET_BANK_QUESTIONS } from './data/questions';

export default function Home() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  // NUEVO ESTADO: Tiempo en segundos (65 minutos = 3900 segundos)
  const [timeLeft, setTimeLeft] = useState(3900);

  const currentQuestion = MET_BANK_QUESTIONS[currentQuestionIndex];

  // NUEVO EFECTO: Controlador del temporizador en tiempo real
  useEffect(() => {
    // Si el examen ya terminó, no seguimos descontando tiempo
    if (isFinished) return;

    // Si el tiempo se agota, forzamos la finalización del examen
    if (timeLeft <= 0) {
      setIsFinished(true);
      return;
    }

    // Configurar el intervalo para que reste 1 segundo cada 1000ms
    const timerInterval = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    // Limpieza del intervalo para evitar fugas de memoria al desmontar el componente
    return () => clearInterval(timerInterval);
  }, [timeLeft, isFinished]);

  // NUEVA FUNCIÓN: Formatea los segundos en un string legible "MM:SS"
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
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

    if (currentQuestionIndex + 1 < MET_BANK_QUESTIONS.length) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      setIsFinished(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setScore(0);
    setTimeLeft(3900); // Reiniciar el reloj a 65 minutos
    setIsFinished(false);
  };

  const getCEFRLevel = (finalScore: number) => {
    if (finalScore >= 43) {
      return { level: 'C1 (Advanced)', color: 'text-emerald-700 bg-emerald-50 border-emerald-200', desc: 'Marcela demuestra un dominio avanzado y fluido del idioma, ideal para entornos profesionales de alta exigencia o postgrados internacionales.' };
    }
    if (finalScore >= 32) {
      return { level: 'B2 (Upper-Intermediate)', color: 'text-blue-700 bg-blue-50 border-blue-200', desc: 'Nivel intermedio-alto sólido. Es el estándar dorado exigido por la mayoría de las universidades y empresas globales.' };
    }
    if (finalScore >= 20) {
      return { level: 'B1 (Intermediate)', color: 'text-amber-700 bg-amber-50 border-amber-200', desc: 'Nivel intermedio. Marcela entiende los puntos principales del examen, pero necesita reforzar vocabulario complejo y estructuras gramaticales avanzadas.' };
    }
    return { level: 'A2 (Elementary or lower)', color: 'text-rose-700 bg-rose-50 border-rose-200', desc: 'Nivel básico. Se requiere un repaso exhaustivo de las bases gramaticales y lectura antes de presentar la prueba oficial.' };
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

  const activeStyles = !isFinished ? getCategoryStyles(currentQuestion.category) : null;
  const resultData = isFinished ? getCEFRLevel(score) : null;

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6 text-gray-800">
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-8 border border-gray-100">
        
        {/* Encabezado con el Reloj Integrado */}
        <div className="flex justify-between items-center border-b pb-4 mb-6">
          <div>
            <h1 className="text-xl font-bold text-gray-900 tracking-tight">
              MET Exam Simulator
            </h1>
            <span className="text-xs text-gray-400 font-medium block">
              Full Reading & Grammar Block
            </span>
          </div>

          {/* NUEVO UI COMPONENT: Reloj Dinámico */}
          {!isFinished && (
            <div className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-mono text-lg font-bold border transition-colors ${
              timeLeft < 300 
                ? 'bg-rose-50 border-rose-200 text-rose-600 animate-pulse' // Alerta roja si quedan menos de 5 minutos
                : 'bg-gray-50 border-gray-200 text-gray-700'
            }`}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              <span>{formatTime(timeLeft)}</span>
            </div>
          )}
        </div>

        {!isFinished && activeStyles ? (
          <div>
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
                Q. {currentQuestionIndex + 1} / {MET_BANK_QUESTIONS.length}
              </div>
            </div>

            <h3 className="text-xl font-medium mb-6 leading-relaxed">
              {currentQuestion.question}
            </h3>

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

            <div className="flex justify-end border-t pt-4">
              <button
                onClick={handleNextClick}
                disabled={!selectedAnswer}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-medium rounded-lg transition-colors shadow-sm"
              >
                {currentQuestionIndex + 1 === MET_BANK_QUESTIONS.length ? 'Finish Test' : 'Next Question'}
              </button>
            </div>
          </div>
        ) : (
          /* Reporte Final de Resultados */
          <div className="text-center py-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              {timeLeft <= 0 ? 'Time is Up!' : 'Simulation Complete!'}
            </h2>
            <p className="text-gray-500 mb-8">Here is Marcela's estimated English proficiency profile:</p>
            
            <div className="inline-block bg-gray-50 border border-gray-100 px-10 py-6 rounded-2xl mb-6 shadow-sm">
              <span className="text-6xl font-black text-gray-900">{score}</span>
              <span className="text-2xl text-gray-400 font-bold"> / {MET_BANK_QUESTIONS.length}</span>
              <p className="text-xs text-gray-400 mt-2 uppercase tracking-wide font-semibold">Correct Answers</p>
            </div>

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

            <div>
              <button
                onClick={resetQuiz}
                className="px-6 py-2.5 border border-blue-600 text-blue-600 hover:bg-blue-50 font-medium rounded-lg transition-colors"
              >
                Retake Full Test
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}