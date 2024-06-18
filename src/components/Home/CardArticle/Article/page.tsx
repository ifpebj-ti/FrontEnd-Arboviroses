import React from 'react';

interface ArticleProps {
  article: {
    title: string;
    url: string;
    thumbnailUrl: string;
  };
}

const Article: React.FC<ArticleProps> = ({ article }) => {
  return (
    <div className="flex flex-col py-2 w-full">
      <div className="w-full h-0.5 bg-gray_200 mb-3"></div>
      <div className="flex flex-row items-center gap-2 px-5">
        <a
          href={article.url}
          className="link w-full text-center paragraph text-primary_200"
        >
          {article.title}
        </a>
        <img
          src={article.thumbnailUrl}
          alt={`Imagem de ${article.title}`}
          className="rounded-lg w-1/2 h-w-24 object-cover"
        />
      </div>
    </div>
  );
};

export default Article;
