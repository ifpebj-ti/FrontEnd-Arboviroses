'use client';
import { useState, useEffect } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { FiChevronUp } from 'react-icons/fi';

import { Article } from './Article';

interface ArticleData {
  title: string;
  url: string;
  thumbnailUrl: string;
}

async function fetchArticles(): Promise<ArticleData[]> {
  return [
    {
      title: 'Artigo muito muito legal 1',
      url: 'https://example.com/article1',
      thumbnailUrl: 'https://via.placeholder.com/300'
    },
    {
      title: 'Artigo muito muito legal 2',
      url: 'https://example.com/article2',
      thumbnailUrl: 'https://via.placeholder.com/300'
    },
    {
      title: 'Artigo muito muito legal 3',
      url: 'https://example.com/article3',
      thumbnailUrl: 'https://via.placeholder.com/300'
    },
    {
      title: 'Artigo muito muito legal 4',
      url: 'https://example.com/article4',
      thumbnailUrl: 'https://via.placeholder.com/300'
    },
    {
      title: 'Artigo muito muito legal 5',
      url: 'https://example.com/article5',
      thumbnailUrl: 'https://via.placeholder.com/300'
    }
  ];
}

export function CardArticles() {
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
    <div className="flex flex-col w-full md:w-60 h-fit bg-gray_100 md:rounded-lg md:shadow-md">
      <p className="hidden md:block paragraph text-secondary_200 px-5 py-1">
        Artigos
      </p>
      {/* Conteúdo desktop */}
      <div className="hidden md:block w-full flex-col items-center">
        {articles.slice(0, visibleArticles).map((article, index) => (
          <Article key={index} article={article} />
        ))}
      </div>
      {/* Conteúdo mobile */}
      <div className="flex md:hidden w-full flex-col items-center gap-10">
        {articles.slice(0, articles.length).map((article, index) => (
          <Article key={index} article={article} />
        ))}
      </div>
      <div className="w-full">
        <div className="hidden md:block">
          {visibleArticles < articles.length && (
            <div className="w-full py-1">
              <div className="w-full h-0.5 bg-gray_200 mb-2"></div>
              <button
                className="flex flex-row items-center gap-1 py-1 px-5 text-primary_300 subtitle"
                onClick={showMoreArticles}
              >
                Mostrar mais
                <FiChevronDown />
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
                <FiChevronUp />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
