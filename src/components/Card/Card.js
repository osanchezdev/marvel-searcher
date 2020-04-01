import React from 'react';
import { number, string, shape } from 'prop-types';

import CardWrapper from './styles/CardWrapper';
import CardImage from './styles/CardImage';
import CardTitleWrapper from './styles/CardTitleWrapper';

const Card = ({ character }) => {
  const { id, name, thumbnail } = character;

  return (
    <CardWrapper>
      <CardImage src={`${thumbnail.path}.${thumbnail.extension}`} alt={name} title={name} />
      <CardTitleWrapper>{name}</CardTitleWrapper>
    </CardWrapper>
  );
};

Card.propTypes = {
  character: shape({
    id: number,
    name: string,
    thumbnail: shape({
      path: string,
      extension: string,
    }),
  }).isRequired,
};

export default Card;
