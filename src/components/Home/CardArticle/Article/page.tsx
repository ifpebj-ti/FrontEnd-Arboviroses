import React from 'react';

export interface InfoHomeData {
  id: string;
  topic: null | string;
  title: string;
  titleLink: null | string;
  link: string;
  typeInfo: 'New' | 'Video' | 'Article';
}

interface ArticleProps {
  data: InfoHomeData;
}

const Article: React.FC<ArticleProps> = ({ data }) => {
  return (
    <div className="flex flex-col md:py-2 w-full">
      <div className="hidden md:block w-full h-0.5 bg-gray_200 mb-3"></div>
      <div className="flex flex-col md:flex-row md:items-center gap-2 md:px-5">
        <img
          src={data.thumbnailUrl}
          alt={`Imagem de ${data.title}`}
          className="md:order-2 rounded-lg w-full h-52 md:h-24 object-cover"
        />
        <a
          href={data.link}
          className="md:order-1 link w-full text-start md:text-center caption md:paragraph text-primary_200"
        >
          {data.title}
        </a>
      </div>
    </div>
  );
};

export default Article;
