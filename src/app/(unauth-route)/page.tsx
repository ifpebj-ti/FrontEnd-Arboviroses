'use client';
import React, { useState, useEffect } from 'react';

import CardArticles from '@/components/Home/CardArticle/page';
import CardInformative from '@/components/Home/CardInformative/page';
import CardVideos from '@/components/Home/CardVideos/page';
import Loading from '@/components/Loading/page';

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

const Home: React.FC = () => {
  const [informativeData, setInformativeData] = useState<InformativeData[]>([]);

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

  return (
    <main className="bg-secondary_100 h-screen">
      <section className="flex flex-col items-center gap-14 px-40 py-14">
        <h1 className="highlighted-text text-primary_300">Informativos</h1>
        {informativeData.length === 0 ? (
          <Loading />
        ) : (
          <div className="flex flex-row gap-5">
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
    </main>
  );
};

export default Home;
