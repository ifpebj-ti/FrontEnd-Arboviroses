/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { useState } from 'react';

import { NavBar, DropdownButton, Footer } from '@/components';
import { AdminCard } from '@/components/Adm/AdminCard';
import { AdminModalForm } from '@/components/Adm/AdmsForms';
import { ContentRenderer } from '@/components/Adm/ContentRenderer';
import Forms from '@/components/Adm/Forms';
import { ModalForm } from '@/components/Adm/InformativeForms';

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

const initialNoticias: InformativeData[] = [
  {
    id: 1,
    imageUrl: 'https://via.placeholder.com/300',
    topic: 'Noticias',
    title: 'Noticia 1',
    linkTitle: 'Leia mais',
    linkUrl: 'https://example.com/link1'
  },
  {
    id: 2,
    imageUrl: 'https://via.placeholder.com/300',
    topic: 'Noticias',
    title: 'Noticia 2',
    linkTitle: 'Leia mais',
    linkUrl: 'https://example.com/link1'
  }
];

const initialArtigos: InformativeData[] = [
  {
    id: 1,
    imageUrl: 'https://via.placeholder.com/300',
    topic: 'Artigos',
    title: 'Artigo 1',
    linkTitle: 'Leia mais',
    linkUrl: 'https://example.com/link1'
  },
  {
    id: 2,
    imageUrl: 'https://via.placeholder.com/300',
    topic: 'Artigos',
    title: 'Artigo 2',
    linkTitle: 'Leia mais',
    linkUrl: 'https://example.com/link1'
  }
];

const initialVideos: VideoData[] = [
  {
    id: 1,
    imageUrl: 'https://via.placeholder.com/300',
    topic: 'Videos',
    title: 'Video 1',
    linkTitle: 'Assista',
    linkUrl: 'https://example.com/link1'
  },
  {
    id: 2,
    imageUrl: 'https://via.placeholder.com/300',
    topic: 'Videos',
    title: 'Video 2',
    linkTitle: 'Assista',
    linkUrl: 'https://example.com/link1'
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

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<
    'informativos' | 'administradores'
  >('informativos');
  const [selectedMenu, setSelectedMenu] = useState<string>(dados[0].Menu[0]);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [modalTitle, setModalTitle] = useState<string>('');
  const [modalType, setModalType] = useState<string>('');
  const [noticias, setNoticias] = useState<InformativeData[]>(initialNoticias);
  const [artigos, setArtigos] = useState<InformativeData[]>(initialArtigos);
  const [videos, setVideos] = useState<VideoData[]>(initialVideos);
  const [admins, setAdmins] = useState<AdminData[]>(Admins);
  const [editingItem, setEditingItem] = useState<any>(null);

  const handleMenuChange = (menu: string) => {
    setSelectedMenu(menu);
  };

  const handleEditInformative = (id: number) => {
    let itemToEdit = null;

    if (selectedMenu === 'Noticias') {
      itemToEdit = noticias.find((item) => item.id === id);
    } else if (selectedMenu === 'Artigos') {
      itemToEdit = artigos.find((item) => item.id === id);
    } else if (selectedMenu === 'Videos') {
      itemToEdit = videos.find((item) => item.id === id);
    }

    if (itemToEdit) {
      setEditingItem(itemToEdit);
      setModalTitle('Editar Informativo');
      setModalType('informative');
      setShowModal(true);
    }
  };

  const handleRemoveInformative = (id: number) => {
    if (selectedMenu === 'Noticias') {
      setNoticias((prevNoticias) =>
        prevNoticias.filter((noticia) => noticia.id !== id)
      );
    } else if (selectedMenu === 'Artigos') {
      setArtigos((prevArtigos) =>
        prevArtigos.filter((artigo) => artigo.id !== id)
      );
    } else if (selectedMenu === 'Videos') {
      setVideos((prevVideos) => prevVideos.filter((video) => video.id !== id));
    }
  };

  const handleInformativoClick = () => {
    setEditingItem(null);
    setModalTitle('Novo Informativo');
    setModalType('informative');
    setShowModal(true);
  };

  const handleAdministradorClick = () => {
    setEditingItem(null);
    setModalTitle('Novo Administrador');
    setModalType('admin');
    setShowModal(true);
  };

  const handleModalSubmit = (data: any) => {
    if (editingItem) {
      const updatedItem = { ...editingItem, ...data };
      if (selectedMenu === 'Noticias') {
        setNoticias((prevNoticias) =>
          prevNoticias.map((noticia) =>
            noticia.id === editingItem.id ? updatedItem : noticia
          )
        );
      } else if (selectedMenu === 'Artigos') {
        setArtigos((prevArtigos) =>
          prevArtigos.map((artigo) =>
            artigo.id === editingItem.id ? updatedItem : artigo
          )
        );
      } else if (selectedMenu === 'Videos') {
        setVideos((prevVideos) =>
          prevVideos.map((video) =>
            video.id === editingItem.id ? updatedItem : video
          )
        );
      } else {
        setAdmins((prevAdmins) =>
          prevAdmins.map((admin) =>
            admin.id === editingItem.id ? updatedItem : admin
          )
        );
      }
    } else {
      const newInformative = {
        id: Date.now(),
        imageUrl: 'https://via.placeholder.com/300',
        topic: selectedMenu,
        ...data
      };

      if (selectedMenu === 'Noticias') {
        setNoticias((prevNoticias) => [...prevNoticias, newInformative]);
      } else if (selectedMenu === 'Artigos') {
        setArtigos((prevArtigos) => [...prevArtigos, newInformative]);
      } else if (selectedMenu === 'Videos') {
        setVideos((prevVideos) => [...prevVideos, newInformative]);
      } else {
        const newAdmin = {
          id: Date.now(),
          ...data
        };
        setAdmins((prevAdmins) => [...prevAdmins, newAdmin]);
      }
    }

    setShowModal(false);
  };

  const handleToggleActive = (id: number) => {
    setAdmins((prevAdmins) =>
      prevAdmins.map((admin) =>
        admin.id === id ? { ...admin, isActive: !admin.isActive } : admin
      )
    );
  };

  return (
    <main className="bg-secondary_100 h-screen relative">
      <nav className="z-50">
        <NavBar isAdmin={true} />
        {/* Navegação mobile */}
        <div className="lg:hidden w-full">
          <button
            className={`rounded-b-xl px-5 py-3 paragraph ${activeTab === 'informativos' ? 'bg-primary_300 text-secondary_100' : 'bg-primary_100 text-secondary_200'}`}
            onClick={() => setActiveTab('informativos')}
          >
            Informativos
          </button>
          <button
            className={`rounded-b-xl px-5 py-3 paragraph ${activeTab === 'administradores' ? 'bg-primary_300 text-secondary_100' : 'bg-primary_100 text-secondary_200'}`}
            onClick={() => setActiveTab('administradores')}
          >
            Administradores
          </button>
        </div>
      </nav>
      <section className="flex flex-col items-center gap-10 md:gap-14 px-5 md:px-40 z-40">
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
          <Forms
            handleInformativoClick={handleInformativoClick}
            handleAdministradorClick={handleAdministradorClick}
          />
        </div>
      </section>
      <section className="flex flex-col xl:flex-row justify-between w-full py-5 md:px-40 bg-gray_100">
        <div className="flex flex-col space-y-2 w-full xl:w-3/5">
          <ContentRenderer
            selectedMenu={selectedMenu}
            informatives={noticias}
            articles={artigos}
            videos={videos}
            onEdit={handleEditInformative}
            onRemove={handleRemoveInformative}
          />
        </div>
        <div className="flex flex-col items-center space-y-2 w-full py-5 xl:w-96 xl:mt-0">
          <article className="relative w-full">
            <div className="space-y-4">
              {admins.map((admin) => (
                <AdminCard
                  key={admin.id}
                  data={admin}
                  onToggleActive={() => handleToggleActive(admin.id)}
                />
              ))}
            </div>
          </article>
        </div>
      </section>
      {showModal &&
        (modalType === 'admin' ? (
          <AdminModalForm
            title={modalTitle}
            onClose={() => setShowModal(false)}
            onSubmit={handleModalSubmit}
          />
        ) : (
          <ModalForm
            title={modalTitle}
            onClose={() => setShowModal(false)}
            onSubmit={handleModalSubmit}
            initialData={editingItem}
          />
        ))}
      <Footer />
    </main>
  );
}
