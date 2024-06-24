'use client';
import React, { useState, useEffect } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { FiChevronUp } from 'react-icons/fi';

import Video from './Video/page';

interface VideoData {
  title: string;
  url: string;
  thumbnailUrl: string;
}

const fetchVideos = async (): Promise<VideoData[]> => {
  return [
    {
      title: 'Vídeo 1',
      url: 'https://example.com/video1',
      thumbnailUrl: 'https://via.placeholder.com/300'
    },
    {
      title: 'Vídeo 2',
      url: 'https://example.com/video2',
      thumbnailUrl: 'https://via.placeholder.com/300'
    },
    {
      title: 'Vídeo 3',
      url: 'https://example.com/video3',
      thumbnailUrl: 'https://via.placeholder.com/300'
    },
    {
      title: 'Vídeo 4',
      url: 'https://example.com/video4',
      thumbnailUrl: 'https://via.placeholder.com/300'
    },
    {
      title: 'Vídeo 5',
      url: 'https://example.com/video5',
      thumbnailUrl: 'https://via.placeholder.com/300'
    }
  ];
};

const CardVideos: React.FC = () => {
  const [videos, setVideos] = useState<VideoData[]>([]);
  const [visibleVideos, setVisibleVideos] = useState<number>(3);

  useEffect(() => {
    const getVideos = async () => {
      try {
        const data = await fetchVideos();
        setVideos(data);
      } catch (error) {
        console.error('Erro ao buscar vídeos:', error);
      }
    };

    getVideos();
  }, []);

  const showMoreVideos = () => {
    setVisibleVideos((prevVisibleVideos) => prevVisibleVideos + 3);
  };

  const showLessVideos = () => {
    setVisibleVideos((prevVisibleVideos) => Math.max(prevVisibleVideos - 3, 3));
  };

  return (
    <div className="flex flex-col md:w-60 h-fit bg-gray_100 md:rounded-lg md:shadow-md">
      <p className="hidden md:block paragraph text-secondary_200 px-5 py-1">
        Vídeos
      </p>
      {/* Conteúdo desktop */}
      <div className="hidden md:block flex-col items-center">
        {videos.slice(0, visibleVideos).map((video, index) => (
          <Video key={index} video={video} />
        ))}
      </div>
      {/* Conteúdo mobile */}
      <div className="flex flex-col md:hidden w-full tems-center gap-10">
        {videos.slice(0, videos.length).map((video, index) => (
          <Video key={index} video={video} />
        ))}
      </div>
      <div className="w-full">
        <div className="hidden md:block">
          {visibleVideos < videos.length && (
            <div className="w-full py-1">
              <div className="w-full h-0.5 bg-gray_200 mb-2"></div>
              <button
                className="flex flex-row items-center gap-1 py-1 px-5 text-primary_300 subtitle"
                onClick={showMoreVideos}
              >
                Mostrar mais
                <FiChevronDown />
              </button>
            </div>
          )}
          {visibleVideos > 3 && (
            <div className="w-full py-1">
              <div className="w-full h-0.5 bg-gray_200 mb-2"></div>
              <button
                className="flex flex-row items-center gap-1 py-1 px-5 text-primary_300 subtitle"
                onClick={showLessVideos}
              >
                Mostrar menos
                <FiChevronUp />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardVideos;
