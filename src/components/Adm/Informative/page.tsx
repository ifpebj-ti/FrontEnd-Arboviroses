import React from 'react';

interface InformativeData {
  id: number;
  imageUrl: string;
  topic: string;
  title: string;
  linkTitle: string;
  linkUrl: string;
}

interface AdmCardInformative {
  data: InformativeData;
  onEdit: (id: number) => void;
  onRemove: (id: number) => void;
}

const AdmCardInformative: React.FC<AdmCardInformative> = ({ data, onEdit, onRemove }) => {
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
        <button onClick={() => onEdit(data.id)} className="mt-2 text-blue-500">Editar</button>
        <button onClick={() => onRemove(data.id)} className="mt-2 text-red-500">Remover</button>
      </div>
    </div>
  );
};

export default CardInformative;
