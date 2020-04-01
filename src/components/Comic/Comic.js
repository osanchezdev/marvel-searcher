import React from 'react';
import { shape, string } from 'prop-types';

import ComicWrapper from './styles/ComicWrapper';
import ComicThumbnail from './styles/ComicThumbnail';
import ComicInfo from './styles/ComicInfo';
import ComicTitle from './styles/ComicTitle';
import ComicDescription from './styles/ComicDescription';

const Comic = ({ comic }) => {
  const { title, description, thumbnail } = comic;
  return (
    <ComicWrapper>
      <ComicThumbnail src={`${thumbnail.path}.${thumbnail.extension}`} alt={title} title={title} />
      <ComicInfo>
        <ComicTitle>{title}</ComicTitle>
        <ComicDescription>{description ? description : 'No description.'}</ComicDescription>
      </ComicInfo>
    </ComicWrapper>
  );
};

Comic.propTypes = {
  comic: shape({
    title: string,
    description: string,
    thumbnail: shape({
      path: string,
      extension: string,
    }),
  }).isRequired,
};

export default Comic;
