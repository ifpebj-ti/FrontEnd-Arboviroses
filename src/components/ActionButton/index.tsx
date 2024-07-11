import React from 'react';

interface ActionButtonProps {
  label: string;
  onClick: () => void;
}

const ActionButton: React.FC<ActionButtonProps> = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center px-4 py-2 border border-green-500 text-green-500 rounded-[10px] hover:bg-green-500 hover:text-white transition-colors max-w-[250px] max-h-[27px]"
    >
      {label}
    </button>
  );
};

export default ActionButton;
