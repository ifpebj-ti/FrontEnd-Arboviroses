import React from 'react';

import { DropdownButton } from '@/components';

type FormsMobileProps = {
  handleInformativoClick: () => void;
  handleAdministradorClick: () => void;
};

export function FormsMobile({
  handleInformativoClick,
  handleAdministradorClick
}: FormsMobileProps) {
  const options = [
    { label: 'Informativos', onClick: handleInformativoClick },
    { label: 'Administradores', onClick: handleAdministradorClick }
  ];

  const handleOptionClick = (option: string) => {
    const selectedOption = options.find((opt) => opt.label === option);
    if (selectedOption) {
      selectedOption.onClick();
    }
  };

  return (
    <DropdownButton
      label="Menu"
      options={options.map((option) => option.label)}
      onChange={handleOptionClick}
    />
  );
}
