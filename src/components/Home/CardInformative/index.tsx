import { InfoHomeData } from '@/app/(user-routes)/page';

type CardInformativeProps = {
  data: InfoHomeData;
};

export function CardInformative({ data }: CardInformativeProps) {
  return (
    <div className="flex flex-col md:flex-row gap-2">
      <img
        src={'data:image/png;base64,' + data.fileBase64}
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
}
