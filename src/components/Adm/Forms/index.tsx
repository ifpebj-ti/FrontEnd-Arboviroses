'use client';
import { FormsDesktop } from './FormsDesktop';
import { FormsMobile } from './FormsMobile';

type FormsProps = {
  handleInformativoClick: () => void;
  handleAdministradorClick: () => void;
};

export function Forms({
  handleInformativoClick,
  handleAdministradorClick
}: FormsProps) {
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
}

export default Forms;
