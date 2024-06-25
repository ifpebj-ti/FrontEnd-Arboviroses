import React from 'react';

interface InformativeData {
  imageUrl: string;
  topic: string;
  title: string;
  linkTitle: string;
  linkUrl: string;
}

interface CardInformativeProps {
  data: InformativeData;
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
        <a href={data.linkUrl} className="link paragraph text-primary_200">
          {data.linkTitle}
        </a>
      </div>
    </div>
  );
};

export default CardInformative;
