import { FiChevronDown } from 'react-icons/fi';

import { useDropDownButton } from './hooks/useDropDownButton';

type DropdownButtonProps = {
  options: string[];
  onChange: (option: string) => void;
};

export function DropdownButton({ options, onChange }: DropdownButtonProps) {
  const { isOpen, selectedOption, toggleDropdown, handleOptionClick } =
    useDropDownButton(options);

  return (
    <div className="relative text-left">
      <button
        onClick={toggleDropdown}
        className="flex items-center justify-between w-30 h-8 px-2.5 py-1.5 border border-green-500 text-green-500 rounded-lg hover:bg-green-500 hover:text-white transition-colors"
        style={{ gap: '5px' }}
      >
        {selectedOption}
        <FiChevronDown />
      </button>
      {isOpen && (
        <div className="absolute left-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            {options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleOptionClick(option, onChange)}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
