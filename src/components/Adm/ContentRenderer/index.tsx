import React from 'react';

import { AdmInformative } from '../AdmInformative';

interface InformativeData {
  id: number;
  imageUrl: string;
  topic: string;
  title: string;
  linkTitle: string;
  linkUrl: string;
}

interface VideoData {
  id: number;
  imageUrl: string;
  topic: string;
  title: string;
  linkTitle: string;
  linkUrl: string;
}

interface ContentRendererProps {
  selectedMenu: string;
  informatives: InformativeData[];
  articles: InformativeData[];
  videos: VideoData[];
  onEdit: (id: number) => void;
  onRemove: (id: number) => void;
}

export function ContentRenderer({
  selectedMenu,
  informatives,
  articles,
  videos,
  onEdit,
  onRemove
}: ContentRendererProps) {
  if (selectedMenu === 'Noticias') {
    return (
      <div className="grid grid-cols-1 gap-4">
        {informatives.map((noticias) => (
          <AdmInformative
            key={noticias.id}
            data={noticias}
            onEdit={onEdit}
            onRemove={onRemove}
          />
        ))}
      </div>
    );
  } else if (selectedMenu === 'Artigos') {
    return (
      <div className="grid grid-cols-1 gap-4">
        {articles.map((artigos) => (
          <AdmInformative
            key={artigos.id}
            data={artigos}
            onEdit={onEdit}
            onRemove={onRemove}
          />
        ))}
      </div>
    );
  } else if (selectedMenu === 'Videos') {
    return (
      <div className="grid grid-cols-1 gap-4">
        {videos.map((video) => (
          <AdmInformative
            key={video.id}
            data={video}
            onEdit={onEdit}
            onRemove={onRemove}
          />
        ))}
      </div>
    );
  } else {
    return <p>Nenhum item encontrado</p>;
  }
}
