'use client';
import React, { useState, useEffect, useRef } from 'react';

import {
  CardInformative,
  CardArticles,
  CardVideos,
  Loading
} from '@/components';

import { getInfoHome } from '@/service/InfoHomeService';

export interface InfoHomeData {
  id: string;
  topic: null | string;
  title: string;
  titleLink: null | string;
  link: string;
  fileBase64: string;
  typeInfo: 'New' | 'Video' | 'Article';
}

export default function Home() {
  const [isLoading, setLoading] = useState<boolean>(true);
  const [informativeData, setInformativeData] = useState<InfoHomeData[]>([]);
  const [articles, setArticles] = useState<InfoHomeData[]>([]);
  const [videos, setVideos] = useState<InfoHomeData[]>([]);
  const [activeTab, setActiveTab] = useState<'noticias' | 'artigos' | 'videos'>(
    'noticias'
  );
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await getInfoHome();
        const data: InfoHomeData[] = response.data;
        setInformativeData(data.filter((item) => item.typeInfo === 'New'));
        setArticles(data.filter((item) => item.typeInfo === 'Article'));
        setVideos(data.filter((item) => item.typeInfo === 'Video'));
        console.log('Data:', data);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
      setLoading(false);
    };

    fetchData();
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
    <main ref={mainRef} className="bg-secondary_100 min-h-screen relative">
      <section className="flex flex-col items-center justify-around gap-10 md:gap-14 px-5 md:px-40 md:py-10 mb-10">
        {/* Navegação mobile */}
        <div className="lg:hidden w-full -ml-10">
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
        {isLoading ? (
          <Loading />
        ) : informativeData.length === 0 ? (
          <p className="paragraph text-center">
            Nenhum informativo encontrado.
          </p>
        ) : (
          <>
            {/* Conteúdo mobile */}
            <div className="flex flex-col w-full md:gap-5 gap-10 md:hidden">
              {activeTab === 'noticias' &&
                informativeData.map((data, index) => (
                  <React.Fragment key={index}>
                    <CardInformative data={data} />
                  </React.Fragment>
                ))}
              {activeTab === 'artigos' && <CardArticles articles={articles} />}
              {activeTab === 'videos' && <CardVideos videos={videos} />}
            </div>
            {/* Conteúdo desktop */}
            <div className="hidden md:flex w-full justify-between gap-5">
              <div className="flex flex-col gap-5 w-full flex-2">
                {informativeData.map((data, index) => (
                  <React.Fragment key={index}>
                    <CardInformative data={data} />
                    {index < informativeData.length - 1 && (
                      <div className="w-full h-0.5 bg-gray_200"></div>
                    )}
                  </React.Fragment>
                ))}
              </div>
              <div className="flex flex-col gap-5 w-full items-end flex-1">
                <CardVideos videos={videos} />
                <CardArticles articles={articles} />
              </div>
            </div>
          </>
        )}
      </section>
    </main>
  );
}
