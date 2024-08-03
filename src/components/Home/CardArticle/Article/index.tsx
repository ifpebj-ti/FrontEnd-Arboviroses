type ArticleProps = {
  article: {
    title: string;
    url: string;
    thumbnailUrl: string;
  };
};

export function Article({ article }: ArticleProps) {
  return (
    <div className="flex flex-col md:py-2 w-full">
      <div className="hidden md:block w-full h-0.5 bg-gray_200 mb-3"></div>
      <div className="flex flex-col md:flex-row md:items-center gap-2 md:px-5">
        <img
          src={article.thumbnailUrl}
          alt={`Imagem de ${article.title}`}
          className="md:order-2 rounded-lg w-full h-52 md:h-24 object-cover"
        />
        <a
          href={article.url}
          className="md:order-1 link w-full text-start md:text-center caption md:paragraph text-primary_200"
        >
          {article.title}
        </a>
      </div>
    </div>
  );
}
