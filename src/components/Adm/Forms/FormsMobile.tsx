import React from 'react';
import DropdownButton from '@/components/DropdownButton';

interface FormsMobileProps {
  handleInformativoClick: () => void;
  handleAdministradorClick: () => void;
}

const FormsMobile: React.FC<FormsMobileProps> = ({
  handleInformativoClick,
  handleAdministradorClick,
}) => {
  const options = [
    { label: 'Informativos', onClick: handleInformativoClick },
    { label: 'Administradores', onClick: handleAdministradorClick },
  ];

  const handleOptionClick = (option: string) => {
    const selectedOption = options.find(opt => opt.label === option);
    if (selectedOption) {
      selectedOption.onClick();
    }
  };

  return (
    <DropdownButton
      label="Menu"
      options={options.map(option => option.label)}
      onChange={handleOptionClick}
    />
  );
};

export default FormsMobile;
