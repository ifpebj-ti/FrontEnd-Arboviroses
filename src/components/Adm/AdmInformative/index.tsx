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
    <div className="flex flex-col md:flex-row gap-2 p-4 border rounded-lg shadow-lg bg-white w-full">
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
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_174_384)">
                  <path
                    d="M9.1665 3.33331H3.33317C2.89114 3.33331 2.46722 3.50891 2.15466 3.82147C1.8421 4.13403 1.6665
                    4.55795 1.6665 4.99998V16.6666C1.6665 17.1087 1.8421 17.5326 2.15466 17.8452C2.46722 18.1577
                    2.89114 18.3333 3.33317 18.3333H14.9998C15.4419 18.3333 15.8658 18.1577 16.1783 17.8452C16.4909
                    17.5326 16.6665 17.1087 16.6665 16.6666V10.8333"
                    stroke="#1A44CE"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15.4165 2.08332C15.748 1.7518 16.1977 1.56555 16.6665 1.56555C17.1353 1.56555 17.585 1.7518
                    17.9165 2.08332C18.248 2.41484 18.4343 2.86448 18.4343 3.33332C18.4343 3.80216 18.248 4.2518 17.9165
                    4.58332L9.99984 12.5L6.6665 13.3333L7.49984 9.99999L15.4165 2.08332Z"
                    stroke="#1A44CE"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_174_384">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </button>

            <button className="text-red-500" onClick={() => onRemove(data.id)}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.5 5H4.16667H17.5"
                  stroke="#D83634"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15.8332 5.00002V16.6667C15.8332 17.1087 15.6576 17.5326 15.345 17.8452C15.0325 18.1578 14.6085
                  18.3334 14.1665 18.3334H5.83317C5.39114 18.3334 4.96722 18.1578 4.65466 17.8452C4.3421 17.5326 4.1665
                  17.1087 4.1665 16.6667V5.00002M6.6665 5.00002V3.33335C6.6665 2.89133 6.8421 2.4674 7.15466 2.15484C7.46722
                  1.84228 7.89114 1.66669 8.33317 1.66669H11.6665C12.1085 1.66669 12.5325 1.84228 12.845 2.15484C13.1576
                  2.4674 13.3332 2.89133 13.3332 3.33335V5.00002"
                  stroke="#D83634"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.3335 9.16669V14.1667"
                  stroke="#D83634"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11.6665 9.16669V14.1667"
                  stroke="#D83634"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
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
