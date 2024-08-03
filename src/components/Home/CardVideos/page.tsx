import React, { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { FiChevronUp } from 'react-icons/fi';

import Video from './Video/page';

export interface InfoHomeData {
  id: string;
  topic: null | string;
  title: string;
  titleLink: null | string;
  link: string;
  typeInfo: 'New' | 'Video' | 'Article';
}

interface CardVideosProps {
  videos: InfoHomeData[];
}

export default function CardVideos({ videos }: CardVideosProps) {
  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  const videosToDisplay = showAll ? videos : videos.slice(0, 3);

  return (
    <section className="flex flex-col md:w-60 h-fit bg-gray_100 md:rounded-lg md:shadow-md">
      <p className="hidden md:block paragraph text-secondary_200 px-5 py-1">
        Vídeos
      </p>
      <div className="flex flex-col gap-5">
        {videosToDisplay.map((video, index) => (
          <Video key={index} data={video} />
        ))}
      </div>
      {videos.length > 3 && (
        <button
          className="flex items-center justify-center gap-2 text-primary_300"
          onClick={toggleShowAll}
        >
          {showAll ? (
            <>
              Mostrar menos
              <FiChevronUp />
            </>
          ) : (
            <>
              Mostrar mais
              <FiChevronDown />
            </>
          )}
        </button>
      )}
    </section>
  );
}
