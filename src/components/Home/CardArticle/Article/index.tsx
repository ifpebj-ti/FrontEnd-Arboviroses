import { InfoHomeData } from '@/app/(user-routes)/page';

type ArticleProps = {
  data: InfoHomeData;
};

export function Article({ data }: ArticleProps) {
  return (
    <div className="flex flex-col md:py-2 w-full">
      <div className="hidden md:block w-full h-0.5 bg-gray_200 mb-3"></div>
      <div className="flex flex-col md:flex-row md:items-center gap-2 md:px-5">
        <img
          src={'data:image/png;base64,' + data.fileBase64}
          alt={`Imagem de ${data.title}`}
          className="md:order-2 rounded-lg w-full h-52 md:h-24 object-cover"
        />
        <a
          href={data.link}
          target="_blank"
          className="md:order-1 link w-full text-start md:text-center caption md:paragraph text-primary_200"
          rel="noreferrer"
        >
          {data.title}
        </a>
      </div>
    </div>
  );
}
