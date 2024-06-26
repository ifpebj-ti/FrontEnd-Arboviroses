export const values = [
  '/GameMemory/card01.png',
  '/GameMemory/card02.png',
  '/GameMemory/card03.png',
  '/GameMemory/card04.png',
  '/GameMemory/card05.png',
  '/GameMemory/card06.png',
  '/GameMemory/card07.png',
  '/GameMemory/card08.png',
  '/GameMemory/card09.png',
  '/GameMemory/card10.png',
  '/GameMemory/card11.png',
  '/GameMemory/card12.png'
];

export const generateCards = () => {
  const cards = [...values, ...values].sort(() => Math.random() - 0.5);
  return cards.map((value, index) => ({
    id: index,
    value,
    isFlipped: false,
    isMatched: false
  }));
};
