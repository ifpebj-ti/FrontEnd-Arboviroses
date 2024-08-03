import React from 'react';

export interface InfoHomeData {
  id: string;
  topic: null | string;
  title: string;
  titleLink: null | string;
  link: string;
  typeInfo: 'New' | 'Video' | 'Article';
}

interface CardInformativeProps {
  data: InfoHomeData;
}

const CardInformative: React.FC<CardInformativeProps> = ({ data }) => {
  return (
    <div className="flex flex-col md:flex-row gap-2">
      <img
        src={data.imageUrl}
        alt={`Imagem de ${data.topic}`}
        className="rounded-lg md:w-96 md:h-64 w-fill h-52 object-cover"
      />
      <div className="flex flex-col items-start gap-2">
        <p className="caption text-secondary_200">{data.topic}</p>
        <h2 className="main-title text-primary_300">{data.title}</h2>
        <a href={data.link} className="link paragraph text-primary_200">
          {data.title}
        </a>
      </div>
    </div>
  );
};

export default CardInformative;
