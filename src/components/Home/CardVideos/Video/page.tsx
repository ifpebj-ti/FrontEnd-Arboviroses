import React from 'react';

interface VideoProps {
  video: {
    title: string;
    url: string;
    thumbnailUrl: string;
  };
}

const Video: React.FC<VideoProps> = ({ video }) => {
  return (
    <div className="flex flex-col items-center py-2 w-full">
      <div className="w-full h-0.5 bg-gray_200 mb-3"></div>
      <img
        src={video.thumbnailUrl}
        alt={`Imagem de ${video.title}`}
        className="rounded-lg w-44 h-24 object-cover"
      />
      <a href={video.url} className="link paragraph text-primary_200 pt-2">
        {video.title}
      </a>
    </div>
  );
};

export default Video;
