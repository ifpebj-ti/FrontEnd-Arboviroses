import React from 'react';
import ActionButton from '@/components/ActionButton';

interface FormsDesktopProps {
  handleInformativoClick: () => void;
  handleAdministradorClick: () => void;
}

const FormsDesktop: React.FC<FormsDesktopProps> = ({
  handleInformativoClick,
  handleAdministradorClick
}) => {
  return (
    <div className="flex justify-between space-x-5">
      <div className="flex flex-col items-center space-y-2">
        <h2 className="text-sm font-semibold text-green-700">Informativos</h2>
        <ActionButton
          label="+ Novo informativo"
          onClick={handleInformativoClick}
        />
      </div>
      <div className="flex flex-col items-center space-y-2">
        <h2 className="text-sm font-semibold text-green-700">
          Administradores
        </h2>
        <ActionButton
          label="+ Novo administrador"
          onClick={handleAdministradorClick}
        />
      </div>
    </div>
  );
};

export default FormsDesktop;
