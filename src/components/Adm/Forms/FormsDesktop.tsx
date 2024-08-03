import ActionButton from '@/components/ActionButton';

type FormsDesktopProps = {
  handleInformativoClick: () => void;
  handleAdministradorClick: () => void;
};

export function FormsDesktop({
  handleInformativoClick,
  handleAdministradorClick
}: FormsDesktopProps) {
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
}
