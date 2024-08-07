/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import { NavBar, DropdownButton, Footer } from '@/components';
import { AdminCard } from '@/components/Adm/AdminCard';
import { AdminModalForm } from '@/components/Adm/AdmsForms';
import { ContentRenderer } from '@/components/Adm/ContentRenderer';
import Forms from '@/components/Adm/Forms';
import { ModalForm } from '@/components/Adm/InformativeForms';

import { deleteInfoHome, getInfoHome } from '@/service/InfoHomeService';
import { getUsers } from '@/service/UserService';

interface DadosMenu {
  Menu: string[];
}

interface InformativeData {
  id: number;
  fileBase64: string;
  topic: string;
  title: string;
  titleLink: string;
  link: string;
}

interface VideoData {
  id: number;
  fileBase64: string;
  topic: string;
  title: string;
  titleLink: string;
  link: string;
}

interface AdminData {
  id: number;
  name: string;
  email: string;
  uniqueCode: string;
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
    fileBase64: 'https://via.placeholder.com/300',
    topic: 'Noticias',
    title: 'Noticia 1',
    titleLink: 'Leia mais',
    link: 'https://example.com/link1'
  },
  {
    id: 2,
    fileBase64: 'https://via.placeholder.com/300',
    topic: 'Noticias',
    title: 'Noticia 2',
    titleLink: 'Leia mais',
    link: 'https://example.com/link1'
  }
];

const initialArtigos: InformativeData[] = [
  {
    id: 1,
    fileBase64: 'https://via.placeholder.com/300',
    topic: 'Artigos',
    title: 'Artigo 1',
    titleLink: 'Leia mais',
    link: 'https://example.com/link1'
  },
  {
    id: 2,
    fileBase64: 'https://via.placeholder.com/300',
    topic: 'Artigos',
    title: 'Artigo 2',
    titleLink: 'Leia mais',
    link: 'https://example.com/link1'
  }
];

const initialVideos: VideoData[] = [
  {
    id: 1,
    fileBase64: 'https://via.placeholder.com/300',
    topic: 'Videos',
    title: 'Video 1',
    titleLink: 'Assista',
    link: 'https://example.com/link1'
  },
  {
    id: 2,
    fileBase64: 'https://via.placeholder.com/300',
    topic: 'Videos',
    title: 'Video 2',
    titleLink: 'Assista',
    link: 'https://example.com/link1'
  }
];

const Admins: AdminData[] = [
  // {
  //   id: 1,
  //   name: 'Nome 1',
  //   email: 'admin@gmail.com',
  //   accessCode: '123456789',
  //   isActive: true,
  //   isAdmin: true
  // },
  // {
  //   id: 2,
  //   name: 'Nome 2',
  //   email: 'teste@gmail.com',
  //   accessCode: '987654321',
  //   isActive: false,
  //   isAdmin: false
  // }
];

export default function AdminPage() {
  const [selectedMenu, setSelectedMenu] = useState<string>(dados[0].Menu[0]);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [modalTitle, setModalTitle] = useState<string>('');
  const [modalType, setModalType] = useState<string>('');
  const [noticias, setNoticias] = useState<InformativeData[]>(initialNoticias);
  const [artigos, setArtigos] = useState<InformativeData[]>(initialArtigos);
  const [videos, setVideos] = useState<VideoData[]>(initialVideos);
  const [admins, setAdmins] = useState<AdminData[]>(Admins);
  const [editingItem, setEditingItem] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getUsers();
        const data: AdminData[] = Array.isArray(response) ? response : [];
        setAdmins(data);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getInfoHome();
        const data = response.data;
        setNoticias(data.filter((item: any) => item.typeInfo === 'New'));
        setArtigos(data.filter((item: any) => item.typeInfo === 'Article'));
        setVideos(data.filter((item: any) => item.typeInfo === 'Video'));
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };

    fetchData();
  }, []);

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

  const handleRemoveInformative = async (id: number) => {
    const response = await deleteInfoHome(id.toString());
    if (response.status === 200) {
      if (selectedMenu === 'Noticias') {
        setNoticias((prevNoticias) =>
          prevNoticias.filter((noticia) => noticia.id !== id)
        );
      } else if (selectedMenu === 'Artigos') {
        setArtigos((prevArtigos) =>
          prevArtigos.filter((artigo) => artigo.id !== id)
        );
      } else if (selectedMenu === 'Videos') {
        setVideos((prevVideos) =>
          prevVideos.filter((video) => video.id !== id)
        );
      }
    } else {
      toast.error('Erro ao excluir informativo');
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

  const handleToggleActive = (id: number) => {
    setAdmins((prevAdmins) =>
      prevAdmins.map((admin) =>
        admin.id === id ? { ...admin, isActive: !admin.isActive } : admin
      )
    );
  };

  return (
    <>
      <main className="bg-secondary_100 min-h-screen relative">
        <nav className="z-50">
          <NavBar isAdmin={true} />
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
              onSubmit={() => {}}
            />
          ) : (
            <ModalForm
              title={modalTitle}
              onClose={() => setShowModal(false)}
              onSubmit={() => {}}
              initialData={editingItem}
            />
          ))}
      </main>
      <Footer />
    </>
  );
}
