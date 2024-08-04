import { FiEdit, FiTrash2 } from 'react-icons/fi';

interface InformativeData {
  id: number;
  imageUrl: string;
  topic: string;
  title: string;
  linkTitle: string;
  linkUrl: string;
}

type AdmInformativeProps = {
  data: InformativeData;
  onEdit: (id: number) => void;
  onRemove: (id: number) => void;
};

export function AdmInformative({
  data,
  onEdit,
  onRemove
}: AdmInformativeProps) {
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
              <FiEdit />
            </button>

            <button className="text-red-500" onClick={() => onRemove(data.id)}>
              <FiTrash2 />
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
}
