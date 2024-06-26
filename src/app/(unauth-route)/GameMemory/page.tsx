'use client';
import React, { useState, useEffect } from 'react';
import { FiHelpCircle } from 'react-icons/fi';

import Card from '@/components/GameMemory/Card';
import { generateCards } from '@/components/GameMemory/Values';
import TutorialModal from '@/components/Tutorial/tutorialModal';

const GameMemory: React.FC = () => {
  const [cards, setCards] = useState(generateCards());
  const [firstCard, setFirstCard] = useState<number | null>(null);
  const [secondCard, setSecondCard] = useState<number | null>(null);
  const [isClient, setIsClient] = useState(false);
  const [isAllMatched, setIsAllMatched] = useState(false);
  const [showTutorial, setShowTutorial] = useState(false);
  const [moves, setMoves] = useState(0);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleCardClick = (id: number) => {
    if (firstCard === null) {
      setFirstCard(id);
      setCards((prevCards) =>
        prevCards.map((card) =>
          card.id === id ? { ...card, isFlipped: true } : card
        )
      );
    } else if (secondCard === null) {
      setSecondCard(id);
      setCards((prevCards) =>
        prevCards.map((card) =>
          card.id === id ? { ...card, isFlipped: true } : card
        )
      );
      setMoves((prevMoves) => prevMoves + 1);
    }
  };

  useEffect(() => {
    if (firstCard !== null && secondCard !== null) {
      const firstCardValue = cards.find((card) => card.id === firstCard)?.value;
      const secondCardValue = cards.find(
        (card) => card.id === secondCard
      )?.value;

      if (firstCardValue === secondCardValue) {
        setCards((prevCards) =>
          prevCards.map((card) =>
            card.id === firstCard || card.id === secondCard
              ? { ...card, isMatched: true }
              : card
          )
        );
      } else {
        setTimeout(() => {
          setCards((prevCards) =>
            prevCards.map((card) =>
              card.id === firstCard || card.id === secondCard
                ? { ...card, isFlipped: false }
                : card
            )
          );
        }, 1000);
      }

      setFirstCard(null);
      setSecondCard(null);
    }
  }, [cards, firstCard, secondCard]);

  useEffect(() => {
    if (cards.every((card) => card.isMatched)) {
      setIsAllMatched(true);
    }
  }, [cards]);

  const handleRestart = () => {
    setCards(generateCards());
    setFirstCard(null);
    setSecondCard(null);
    setIsAllMatched(false);
    setMoves(0);
  };

  if (!isClient) {
    return null;
  }

  const toggleTutorial = () => {
    setShowTutorial(!showTutorial);
  };

  return (
    <main className="relative min-h-screen bg-secondary_100">
      <section className="flex flex-col h-screen items-center gap-8 py-10 px-5 md:px-36">
        <div className="flex flex-row w-full justify-between items-center">
          <h1 className="section-title text-primary_300 text-center flex-grow">
            Jogo da Memória
          </h1>
          <button onClick={toggleTutorial}>
            <FiHelpCircle className="text-primary_300 text-3xl" />
          </button>
        </div>
        {isAllMatched ? (
          <div className="flex flex-col items-center gap-3 pt-40">
            <h2 className="caption">
              Parabéns! Você completou o Jogo da Memória.
            </h2>
            <p>Seu número de movimentos: {moves}</p>
            <button
              className="mt-4 bg-primary_300 hover:bg-primary_500 text-secondary_100 py-2 px-4 rounded"
              onClick={handleRestart}
            >
              Jogar novamente
            </button>
          </div>
        ) : (
          <div className="grid md:grid-cols-6 md:gap-8 grid-cols-4 gap-5">
            {cards.map((card) => (
              <Card
                key={card.id}
                id={card.id}
                value={card.value}
                isFlipped={card.isFlipped || card.isMatched}
                onClick={handleCardClick}
              />
            ))}
          </div>
        )}
      </section>
      <TutorialModal
        show={showTutorial}
        onClose={toggleTutorial}
        instructions={[
          'Clique em duas cartas para virá-las.',
          'Se as cartas forem iguais, elas permanecem viradas.',
          'Se as cartas forem diferentes, elas são viradas de volta.',
          'Complete o jogo virando todas as cartas.'
        ]}
      />
    </main>
  );
};

export default GameMemory;
