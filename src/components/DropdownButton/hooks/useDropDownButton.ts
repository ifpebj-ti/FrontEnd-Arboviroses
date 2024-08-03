'use client';
import { useState } from 'react';

export function useDropDownButton(options: string[]) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  function toggleDropdown() {
    setIsOpen(!isOpen);
  }

  const handleOptionClick = (
    option: string,
    onChange: (option: string) => void
  ) => {
    setSelectedOption(option);
    setIsOpen(false);
    onChange(option);
  };

  return { toggleDropdown, handleOptionClick, isOpen, selectedOption };
}
