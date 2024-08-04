'use client';
import { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { FiChevronUp } from 'react-icons/fi';

import { InfoHomeData } from '@/app/(user-routes)/page';

import { Article } from './Article';

type CardArticlesProps = {
  articles: InfoHomeData[];
};

export function CardArticles({ articles }: CardArticlesProps) {
  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  const articlesToDisplay = showAll ? articles : articles.slice(0, 3);

  return (
    <section className="flex flex-col md:w-60 h-fit bg-gray_100 md:rounded-lg md:shadow-md">
      <p className="hidden md:block paragraph text-secondary_200 px-5 py-1">
        Artigos
      </p>
      <div className="flex flex-col gap-5">
        {articlesToDisplay.map((article, index) => (
          <Article key={index} data={article} />
        ))}
      </div>
      {articles.length > 3 && (
        <button
          className="flex items-center justify-center gap-2 text-primary_300"
          onClick={toggleShowAll}
        >
          {showAll ? (
            <>
              Mostrar menos
              <FiChevronUp />
            </>
          ) : (
            <>
              Mostrar mais
              <FiChevronDown />
            </>
          )}
        </button>
      )}
    </section>
  );
}
