import Image from 'next/image';
import React, { useState, useEffect } from 'react';

import Arrow from '../../../../public/Arrow.svg';
import Article from './Article/page';

interface ArticleData {
  title: string;
  url: string;
  thumbnailUrl: string;
}

const fetchArticles = async (): Promise<ArticleData[]> => {
  return [
    {
      title: 'Artigo 1',
      url: 'https://example.com/article1',
      thumbnailUrl: 'https://via.placeholder.com/300'
    },
    {
      title: 'Artigo 2',
      url: 'https://example.com/article2',
      thumbnailUrl: 'https://via.placeholder.com/300'
    },
    {
      title: 'Artigo 3',
      url: 'https://example.com/article3',
      thumbnailUrl: 'https://via.placeholder.com/300'
    },
    {
      title: 'Artigo 4',
      url: 'https://example.com/article4',
      thumbnailUrl: 'https://via.placeholder.com/300'
    },
    {
      title: 'Artigo 5',
      url: 'https://example.com/article5',
      thumbnailUrl: 'https://via.placeholder.com/300'
    }
  ];
};

const CardArticles: React.FC = () => {
  const [articles, setArticles] = useState<ArticleData[]>([]);
  const [visibleArticles, setVisibleArticles] = useState<number>(3);

  useEffect(() => {
    const getArticles = async () => {
      try {
        const data = await fetchArticles();
        setArticles(data);
      } catch (error) {
        console.error('Erro ao buscar artigos:', error);
      }
    };

    getArticles();
  }, []);

  const showMoreArticles = () => {
    setVisibleArticles((prevVisibleArticles) => prevVisibleArticles + 3);
  };

  const showLessArticles = () => {
    setVisibleArticles((prevVisibleArticles) =>
      Math.max(prevVisibleArticles - 3, 3)
    );
  };

  return (
    <div className="flex flex-col w-60 h-fit bg-gray_100 rounded-lg shadow-md">
      <p className="paragraph text-secondary_200 px-5 py-1">Artigos</p>
      <div className="flex flex-col items-center">
        {articles.slice(0, visibleArticles).map((article, index) => (
          <Article key={index} article={article} />
        ))}
      </div>
      <div className="w-full">
        {visibleArticles < articles.length && (
          <div className="w-full py-1">
            <div className="w-full h-0.5 bg-gray_200 mb-2"></div>
            <button
              className="flex flex-row items-center gap-1 py-1 px-5 text-primary_300 subtitle"
              onClick={showMoreArticles}
            >
              Mostrar mais
              <Image src={Arrow} alt="Seta para baixo" />
            </button>
          </div>
        )}
        {visibleArticles > 3 && (
          <div className="w-full py-1">
            <div className="w-full h-0.5 bg-gray_200 mb-2"></div>
            <button
              className="flex flex-row items-center gap-1 py-1 px-5 text-primary_300 subtitle"
              onClick={showLessArticles}
            >
              Mostrar menos
              <Image src={Arrow} alt="Seta para cima" className="rotate-180" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CardArticles;
