type VideoProps = {
  video: {
    title: string;
    url: string;
    thumbnailUrl: string;
  };
};

export function Video({ video }: VideoProps) {
  return (
    <div className="flex flex-col items-center md:py-2 w-full">
      <div className="hidden md:block w-full h-0.5 bg-gray_200 mb-3"></div>
      <img
        src={video.thumbnailUrl}
        alt={`Imagem de ${video.title}`}
        className="rounded-lg w-full h-52 md:w-44 md:h-24 object-cover"
      />
      <a
        href={video.url}
        className="md:order-1 link w-full text-start md:text-center pt-2 caption md:paragraph text-primary_200"
      >
        {video.title}
      </a>
    </div>
  );
}
