'use client';
import React, { useState } from 'react';
import { NavBar } from '@/components/NavBar';
import DropdownButton from '@/components/DropdownButton';
import ActionButton from '@/components/ActionButton';
import AdminCard from '@/components/Adm/AdminCard';
import ContentRenderer from '@/components/Adm/ContentRenderer';

interface DadosMenu {
  Menu: string[];
}

interface InformativeData {
  id: number;
  imageUrl: string;
  topic: string;
  title: string;
  linkTitle: string;
  linkUrl: string;
}

interface VideoData {
  id: number;
  imageUrl: string;
  topic: string;
  title: string;
  linkTitle: string;
  linkUrl: string;
}

interface AdminData {
  id: number;
  name: string;
  email: string;
  accessCode: string;
  isActive: boolean;
  isAdmin: boolean;
}

const dados: DadosMenu[] = [
  {
    Menu: ['Noticias', 'Artigos', 'Videos']
  }
];

const Noticias: InformativeData[] = [
  {
    id: 1,
    imageUrl: 'https://via.placeholder.com/300',
    topic: 'Noticias',
    title: 'Noticia 1',
    linkTitle: 'Leia mais',
    linkUrl: 'https://example.com/noticia1'
  },
  {
    id: 2,
    imageUrl: 'https://via.placeholder.com/300',
    topic: 'Noticias',
    title: 'Noticia 2',
    linkTitle: 'Leia mais',
    linkUrl: 'https://example.com/noticia2'
  }
];

const Artigos: InformativeData[] = [
  {
    id: 1,
    imageUrl: 'https://via.placeholder.com/300',
    topic: 'Artigos',
    title: 'Artigo 1',
    linkTitle: 'Leia mais',
    linkUrl: 'https://example.com/artigo1'
  },
  {
    id: 2,
    imageUrl: 'https://via.placeholder.com/300',
    topic: 'Artigos',
    title: 'Artigo 2',
    linkTitle: 'Leia mais',
    linkUrl: 'https://example.com/artigo2'
  }
];

const Videos: VideoData[] = [
  {
    id: 1,
    imageUrl: 'https://via.placeholder.com/300',
    topic: 'Videos',
    title: 'Video 1',
    linkTitle: 'Assista',
    linkUrl: 'https://example.com/video1'
  },
  {
    id: 2,
    imageUrl: 'https://via.placeholder.com/300',
    topic: 'Videos',
    title: 'Video 2',
    linkTitle: 'Assista',
    linkUrl: 'https://example.com/video2'
  }
];

const Admins: AdminData[] = [
  {
    id: 1,
    name: 'Nome 1',
    email: 'admin@gmail.com',
    accessCode: '123456789',
    isActive: true,
    isAdmin: true
  },
  {
    id: 2,
    name: 'Nome 2',
    email: 'teste@gmail.com',
    accessCode: '987654321',
    isActive: false,
    isAdmin: false
  }
];

const AdminPage: React.FC = () => {
  const [selectedMenu, setSelectedMenu] = useState<string>(dados[0].Menu[0]);

  const handleMenuChange = (menu: string) => {
    setSelectedMenu(menu);
  };

  const handleEditInformative = (id: number) => {
    console.log('Editar informativo com id:', id);
  };

  const handleRemoveInformative = (id: number) => {
    setInformatives(prevInformatives => prevInformatives.filter(informative => informative.id !== id));
  };

  const handleEditAdmin = (id: number) => {
    console.log('Editar administrador com id:', id);
  };

  const handleRemoveAdmin = (id: number) => {
    setAdmins(prevAdmins => prevAdmins.filter(admin => admin.id !== id));
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
              onChange={handleMenuChange}
            />
          ))}
          <div className="hidden md:flex flex-col items-center space-y-2">
            <h2 className="text-sm font-semibold text-green-700">
              Informativos
            </h2>
            <ActionButton
              label="+ Novo informativo"
              onClick={handleInformativoClick}
            />
          </div>
          <div className="hidden md:flex flex-col items-center space-y-2">
            <h2 className="text-sm font-semibold text-green-700">
              Administradores
            </h2>
            <ActionButton
              label="+ Novo administrador"
              onClick={handleAdministradorClick}
            />
          </div>
        </div>
      </section>
      <section className="flex flex-col xl:flex-row justify-between w-full py-5 md:px-40 bg-gray_100">
        <div className="flex flex-col space-y-2 w-full xl:w-3/5">
          <ContentRenderer
            selectedMenu={selectedMenu}
            informatives={Noticias}
            articles={Artigos}
            videos={Videos}
            onEdit={handleEditInformative}
            onRemove={handleRemoveInformative}
          />
        </div>
        <div className="hidden xl:flex flex-col items-center space-y-2 w-96">
          <article className="relative w-full">
            <div className="space-y-4">
              {Admins.map((admin) => (
                <AdminCard
                  key={admin.id}
                  data={admin}
                  onToggleActive={() => { }}
                />
              ))}
            </div>
          </article>
        </div>
      </section>
    </main>
  );
};

export default AdminPage;
