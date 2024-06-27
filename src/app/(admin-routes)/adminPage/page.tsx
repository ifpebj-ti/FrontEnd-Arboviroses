'use client';
import React, { useState } from 'react';
import { NavBar } from '@/components/NavBar';
import DropdownButton from '@/components/DropdownButton';
import ActionButton from '@/components/ActionButton';

interface DadosMenu {
  Menu: string[];
}

const dados: DadosMenu[] = [
  {
    Menu: ['Noticias', 'Artigos', 'Videos']
  }
];

const Noticias: React.FC = () => <p>Noticias</p>;
const Artigos: React.FC = () => <p>Artigos</p>;
const Videos: React.FC = () => <p>Videos</p>;

const AdminPage: React.FC = () => {
  const [selectedMenu, setSelectedMenu] = useState<string>(dados[0].Menu[0]); // Inicializa com o primeiro item

  const handleMenuChange = (menu: string) => {
    setSelectedMenu(menu);
  };

  const renderContent = () => {
    if (selectedMenu === 'Noticias') {
      return <Noticias />;
    } else if (selectedMenu === 'Artigos') {
      return <Artigos />;
    } else if (selectedMenu === 'Videos') {
      return <Videos />;
    } else {
      return <p>Nenhum item encontrado</p>;
    }
  };

  const handleInformativoClick = () => {
    console.log('Novo informativo');
  };

  const handleAdministradorClick = () => {
    console.log('Novo administrador');
  };

  return (
    <main className="bg-secondary_100 h-screen relative">
      <NavBar isAdmin={true} />
      <section className="flex flex-col items-center gap-10 md:gap-14 px-5 md:px-40">
        <h1 className="md:highlighted-text section-title text-primary_300 p-5">
          Administração
        </h1>
        <div className="flex justify-between w-full">
          {dados.map((item, index) => (
            <DropdownButton
              key={index}
              options={item.Menu}
              onChange={handleMenuChange} // Passando handleMenuChange como prop
            />
          ))}
          <div className="flex flex-col items-center space-y-2">
            <h2 className="text-2xl font-semibold text-green-700">
              Informativos
            </h2>
            <ActionButton
              label="+ Novo informativo"
              onClick={handleInformativoClick}
            />
          </div>
          <div className="flex flex-col items-center space-y-2">
            <h2 className="text-2xl font-semibold text-green-700">
              Administradores
            </h2>
            <ActionButton
              label="+ Novo administrador"
              onClick={handleAdministradorClick}
            />
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center gap-10 md:gap-14 px-5 md:px-40">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {renderContent()}
        </div>
      </section>
    </main>
  );
};

export default AdminPage;
