'use client';
import React, { useState, useEffect } from 'react';
import { FiCheck, FiX, FiHelpCircle } from 'react-icons/fi';

import questions from '@/components/GameRightOrWrong/questions';
import TutorialModal from '@/components/Tutorial/tutorialModal';

interface Question {
  question: string;
  answer: boolean;
  imageSrc?: string;
}

const Quiz: React.FC = () => {
  const [shuffledQuestions, setShuffledQuestions] = useState<Question[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showTutorial, setShowTutorial] = useState(false);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [messageVisible, setMessageVisible] = useState(false);
  const [buttonsDisabled, setButtonsDisabled] = useState(false);

  const totalQuestions = questions.length;

  useEffect(() => {
    const shuffleArray = (array: Question[]): Question[] => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    };
    setShuffledQuestions(shuffleArray([...questions]));
  }, []);

  const handleAnswer = (isCorrect: boolean) => {
    if (buttonsDisabled) return;

    setButtonsDisabled(true);
    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
      setFeedback('Resposta correta!');
    } else {
      setFeedback('Resposta incorreta!');
    }

    setMessageVisible(true);
    setTimeout(() => {
      setMessageVisible(false);
      setCurrentQuestion((prev) => prev + 1);
      setButtonsDisabled(false);
    }, 2000);
  };

  const toggleTutorial = () => {
    setShowTutorial(!showTutorial);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShuffledQuestions(shuffledQuestions.sort(() => Math.random() - 0.5));
  };

  return (
    <main className="relative min-h-screen bg-secondary_100">
      <section className="flex flex-col h-screen items-center gap-8 py-10 px-5 md:px-36">
        <div className="flex flex-row w-full justify-between items-center">
          <h1 className="section-title text-primary_300 text-center flex-grow">
            Certo ou Errado
          </h1>
          <button onClick={toggleTutorial}>
            <FiHelpCircle className="text-primary_300 text-3xl" />
          </button>
        </div>
        {currentQuestion < totalQuestions ? (
          <div className="flex flex-col md:gap-10 w-full flex-grow">
            <div className="flex flex-col md:flex-row w-full gap-8 relative">
              {shuffledQuestions[currentQuestion]?.imageSrc && (
                <img
                  src={`${shuffledQuestions[currentQuestion].imageSrc}`}
                  alt="Imagem da pergunta"
                  className="md:w-1/2 rounded-xl"
                  style={{
                    maxWidth: '100%',
                    maxHeight: '300px'
                  }}
                />
              )}
              <h2 className="flex flex-row self-center justify-center text-center caption text-secondary_200 w-full">
                {shuffledQuestions[currentQuestion]?.question}
              </h2>
              <div className="absolute end-0 p-2 rounded-md bg-gray_500">
                <p className="text-secondary_200">
                  {currentQuestion + 1}/{totalQuestions}
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-2 md:gap-5 md:w-full fixed bottom-0 left-0 right-0 md:px-36 py-5 px-5">
              <button
                onClick={() =>
                  handleAnswer(shuffledQuestions[currentQuestion]?.answer)
                }
                disabled={buttonsDisabled}
                className={`flex flex-row self-center justify-center bg-success_200 hover:bg-success_500 text-success_400 hover:text-success_200 text-5xl rounded-xl w-full py-10 md:py-16 paragraph ${buttonsDisabled && 'opacity-50 cursor-not-allowed hover:bg-success_200 hover:text-success_400'}`}
              >
                <FiCheck />
              </button>
              <button
                onClick={() =>
                  handleAnswer(!shuffledQuestions[currentQuestion]?.answer)
                }
                disabled={buttonsDisabled}
                className={`flex flex-row self-center justify-center bg-danger_200 hover:bg-danger_400 text-danger_300 hover:text-danger_200 text-5xl rounded-xl w-full py-10 md:py-16 paragraph ${buttonsDisabled && 'opacity-50 cursor-not-allowed hover:bg-danger_200 hover:text-danger_300'}`}
              >
                <FiX />
              </button>
            </div>
            {messageVisible && (
              <div className="w-full text-center mt-6 md:mt-10">
                <p
                  className={`p-3 caption rounded animate-bounce ${
                    feedback === 'Resposta correta!'
                      ? 'bg-success_200 text-success_400'
                      : 'bg-danger_200 text-danger_400'
                  }`}
                >
                  {feedback}
                </p>
              </div>
            )}
          </div>
        ) : (
          <div className="flex flex-col items-center gap-3 pt-40">
            <h2 className="caption">Parabéns! Você completou o quiz.</h2>
            <p>
              Sua pontuação: {score} de {totalQuestions}
            </p>
            <button
              onClick={resetQuiz}
              className="mt-4 bg-primary_300 hover:bg-primary_500 text-secondary_100 py-2 px-4 rounded"
            >
              Jogar novamente
            </button>
          </div>
        )}
      </section>
      <TutorialModal
        show={showTutorial}
        onClose={toggleTutorial}
        instructions={[
          'Leia a pergunta atentamente.',
          'Clique no botão verde (✔) se a resposta for certa.',
          'Clique no botão vermelho (✖) se a resposta for errada.',
          'Tente acertar todas as perguntas para completar o quiz.'
        ]}
      />
    </main>
  );
};

export default Quiz;
