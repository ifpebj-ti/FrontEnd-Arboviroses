import React from 'react';

export interface InfoHomeData {
  id: string;
  topic: null | string;
  title: string;
  titleLink: null | string;
  link: string;
  typeInfo: 'New' | 'Video' | 'Article';
}

interface VideoProps {
  data: InfoHomeData;
}

const Video: React.FC<VideoProps> = ({ data }) => {
  return (
    <div className="flex flex-col items-center md:py-2 w-full">
      <div className="hidden md:block w-full h-0.5 bg-gray_200 mb-3"></div>
      <img
        src={data.thumbnailUrl}
        alt={`Imagem de ${data.title}`}
        className="rounded-lg w-full h-52 md:w-44 md:h-24 object-cover"
      />
      <a
        href={data.link}
        className="md:order-1 link w-full text-start md:text-center pt-2 caption md:paragraph text-primary_200"
      >
        {data.title}
      </a>
    </div>
  );
};

export default Video;
