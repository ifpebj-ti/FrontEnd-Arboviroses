import React from 'react';

interface ActionButtonProps {
  label: string;
  onClick: () => void;
}

const ActionButton: React.FC<ActionButtonProps> = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 border border-green-500 text-green-500 rounded hover:bg-green-500 hover:text-white transition-colors"
    >
      {label}
    </button>
  );
};

export default ActionButton;
