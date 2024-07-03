'use client';
import React from 'react';
import FormsDesktop from './FormsDesktop';
import FormsMobile from './FormsMobile';

interface FormsProps {
  handleInformativoClick: () => void;
  handleAdministradorClick: () => void;
}

const Forms: React.FC<FormsProps> = ({
  handleInformativoClick,
  handleAdministradorClick
}) => {
  return (
    <div>
      <div className="hidden lg:block">
        <FormsDesktop
          handleInformativoClick={handleInformativoClick}
          handleAdministradorClick={handleAdministradorClick}
        />
      </div>
      <div className="block lg:hidden">
        <FormsMobile
          handleInformativoClick={handleInformativoClick}
          handleAdministradorClick={handleAdministradorClick}
        />
      </div>
    </div>
  );
};

export default Forms;
