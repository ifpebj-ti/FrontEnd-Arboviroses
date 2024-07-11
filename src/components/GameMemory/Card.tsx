import React from 'react';

interface CardProps {
  id: number;
  value: string;
  isFlipped: boolean;
  onClick: (id: number) => void;
}

const Card: React.FC<CardProps> = ({ id, value, isFlipped, onClick }) => {
  return (
    <div
      className={`md:w-32 md:h-32 w-20 h-20 cursor-pointer flex items-center justify-center ${
        isFlipped
          ? 'bg-white text-black border-2 border-primary_100 rounded-lg'
          : 'bg-primary_100 text-transparent rounded-lg hover:bg-primary_200'
      }`}
      onClick={() => onClick(id)}
    >
      <img
        src={value}
        alt={`Card ${id}`}
        className="w-full h-full object-cover rounded-lg"
        style={{ visibility: isFlipped ? 'visible' : 'hidden' }}
      />
    </div>
  );
};

export default Card;
