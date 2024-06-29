import React from 'react';

interface InformativeData {
  id: number;
  imageUrl: string;
  topic: string;
  title: string;
  linkTitle: string;
  linkUrl: string;
}

interface AdmInformativeProps {
  data: InformativeData;
  onEdit: (id: number) => void;
  onRemove: (id: number) => void;
}

const AdmInformative: React.FC<AdmInformativeProps> = ({
  data,
  onEdit,
  onRemove
}) => {
  return (
    <div className="flex flex-col md:flex-row gap-2 p-4 border rounded-lg shadow-md bg-white w-full">
      <img
        src={data.imageUrl}
        alt={`Imagem de ${data.topic}`}
        className="rounded-lg md:w-96 md:h-64 w-full h-52 object-cover"
      />
      <div className="flex flex-col items-start gap-2 flex-grow">
        <div className="flex justify-between w-full">
          <p className="caption text-secondary_200">{data.topic}</p>
          <div className="flex space-x-2">
            <button onClick={() => onEdit(data.id)} className="text-blue-500">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M11 17l-1.586-1.586a2 2 0 010-2.828l9-9a2 2 0 012.828 0l2.828 2.828a2 2 0 010 2.828l-9 9a2 2 0 01-2.828 0L11 17z"
                />
              </svg>
            </button>
            <button onClick={() => onRemove(data.id)} className="text-red-500">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 13H5v-2h14v2zm-7 8a8 8 0 100-16 8 8 0 000 16z"
                />
              </svg>
            </button>
          </div>
        </div>
        <h2 className="main-title text-primary_300">{data.title}</h2>
        <a href={data.linkUrl} className="link paragraph text-primary_200">
          {data.linkTitle}
        </a>
      </div>
    </div>
  );
};

export default AdmInformative;
