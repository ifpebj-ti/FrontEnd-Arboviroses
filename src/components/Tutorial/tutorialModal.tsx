import React from 'react';
import { FiX } from 'react-icons/fi';

interface TutorialModalProps {
  show: boolean;
  onClose: () => void;
  instructions: string[];
}

const TutorialModal: React.FC<TutorialModalProps> = ({
  show,
  onClose,
  instructions
}) => {
  if (!show) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-secondary_200 bg-opacity-50 flex items-center justify-center">
      <div className="flex flex-col bg-secondary_100 p-8 gap-4 rounded-lg shadow-lg md:max-w-lg w-full mx-5 md:mx-0 relative">
        <div className="flex justify-end absolute top-4 right-4">
          <button onClick={onClose}>
            <FiX className="text-black text-2xl" />
          </button>
        </div>
        <h2 className="text-xl font-bold">Como Jogar</h2>
        <ul className="list-disc pl-5">
          {instructions.map((instruction, index) => (
            <li key={index} className="text-secondary_200 list-decimal mt-2">
              {instruction}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TutorialModal;
