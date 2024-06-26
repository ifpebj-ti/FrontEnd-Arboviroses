'use client';
import React, { useState, useEffect, useRef } from 'react';

import CardArticles from '@/components/Home/CardArticle/page';
import CardInformative from '@/components/Home/CardInformative/page';
import CardVideos from '@/components/Home/CardVideos/page';
import Loading from '@/components/Loading/page';
import Footer from '@/components/Footer/footer';

interface InformativeData {
  imageUrl: string;
  topic: string;
  title: string;
  linkTitle: string;
  linkUrl: string;
}

const fetchInformative = async (): Promise<InformativeData[]> => {
  return [
    {
      imageUrl: 'https://via.placeholder.com/300',
      topic: 'Tópico 1',
      title: 'Algum título sensacionalista 1',
      linkTitle: 'Algum título que seja um link 1',
      linkUrl: 'https://example.com/link1'
    },
    {
      imageUrl: 'https://via.placeholder.com/300',
      topic: 'Tópico 2',
      title: 'Algum título sensacionalista 2',
      linkTitle: 'Algum título que seja um link 2',
      linkUrl: 'https://example.com/link2'
    },
    {
      imageUrl: 'https://via.placeholder.com/300',
      topic: 'Tópico 3',
      title: 'Algum título sensacionalista 3',
      linkTitle: 'Algum título que seja um link 3',
      linkUrl: 'https://example.com/link3'
    },
    {
      imageUrl: 'https://via.placeholder.com/300',
      topic: 'Tópico 4',
      title: 'Algum título sensacionalista 4',
      linkTitle: 'Algum título que seja um link 4',
      linkUrl: 'https://example.com/link4'
    }
  ];
};

export default function Home() {
  const [informativeData, setInformativeData] = useState<InformativeData[]>([]);
  const [activeTab, setActiveTab] = useState<'noticias' | 'artigos' | 'videos'>(
    'noticias'
  );
  const mainRef = useRef<HTMLMapElement>(null);

  useEffect(() => {
    const getInformative = async () => {
      try {
        const data = await fetchInformative();
        setInformativeData(data);
      } catch (error) {
        console.error('Erro ao buscar informativos:', error);
      }
    };

    getInformative();
  }, []);

  useEffect(() => {
    const scrollToTop = () => {
      if (mainRef.current) {
        mainRef.current.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    scrollToTop();
  }, [activeTab]);

  return (
    <main ref={mainRef} className="bg-secondary_100 h-screen relative">
      <section className="flex flex-col items-center gap-10 md:gap-14 px-5 md:px-40 py-14">
        {/* Navegação mobile */}
        <div className="fixed top-0 left-0 md:hidden">
          <button
            className={`rounded-b-xl px-5 py-3 paragraph ${activeTab === 'noticias' ? 'bg-primary_300 text-secondary_100' : 'bg-primary_100 text-secondary_200'}`}
            onClick={() => setActiveTab('noticias')}
          >
            Notícias
          </button>
          <button
            className={`rounded-b-xl px-5 py-3 paragraph ${activeTab === 'artigos' ? 'bg-primary_300 text-secondary_100' : 'bg-primary_100 text-secondary_200'}`}
            onClick={() => setActiveTab('artigos')}
          >
            Artigos
          </button>
          <button
            className={`rounded-b-xl px-5 py-3 paragraph ${activeTab === 'videos' ? 'bg-primary_300 text-secondary_100' : 'bg-primary_100 text-secondary_200'}`}
            onClick={() => setActiveTab('videos')}
          >
            Vídeos
          </button>
        </div>
        <h1 className="md:highlighted-text section-title text-primary_300">
          Informativos
        </h1>
        {/* Conteúdo mobile */}
        <div className="flex flex-col w-full md:gap-5 gap-10 md:hidden">
          {activeTab === 'noticias' &&
            informativeData.map((data, index) => (
              <React.Fragment key={index}>
                <CardInformative data={data} />
              </React.Fragment>
            ))}
          {activeTab === 'artigos' && <CardArticles />}
          {activeTab === 'videos' && <CardVideos />}
        </div>
        {/* Conteúdo desktop */}
        {informativeData.length === 0 ? (
          <Loading />
        ) : (
          <div className="hidden md:flex flex-row gap-5">
            <div className="flex flex-col gap-5">
              {informativeData.map((data, index) => (
                <React.Fragment key={index}>
                  <CardInformative data={data} />
                  {index < informativeData.length - 1 && (
                    <div className="w-full h-0.5 bg-gray_200"></div>
                  )}
                </React.Fragment>
              ))}
            </div>
            <div className="flex flex-col gap-5">
              <CardVideos />
              <CardArticles />
            </div>
          </div>
        )}
      </section>
      <Footer />
    </main>
  );
}
