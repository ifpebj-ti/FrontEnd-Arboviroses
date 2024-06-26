'use client';
import React from "react";
import { NavBar } from '@/components/NavBar';
import DropdownButton from "@/components/DropdownButton";
import ActionButton from "@/components/ActionButton";

interface dadosProps {
  Menu: string[];
}

const dados: dadosProps[] = [
  {
    Menu: ['Notícias', 'Artigos', 'Videos']
  }
];

const AdminPage: React.FC = () => {
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
            <DropdownButton key={index} options={item.Menu} />
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
    </main>
  );
};

export default AdminPage;
