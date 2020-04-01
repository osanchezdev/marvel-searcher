import React, { useState } from 'react';
import { number, string, shape } from 'prop-types';

import CardWrapper from './styles/CardWrapper';
import CardImage from './styles/CardImage';
import CardTitleWrapper from './styles/CardTitleWrapper';
import Modal from '../Modal';

const Card = ({ character }) => {
  const [showModal, setShowModal] = useState(false);
  const { id, name, thumbnail } = character;
  const handleOpen = () => {
    setShowModal(true);
  };
  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <>
      <CardWrapper onClick={() => setShowModal(true)}>
        <CardImage src={`${thumbnail.path}.${thumbnail.extension}`} alt={name} title={name} />
        <CardTitleWrapper>{name}</CardTitleWrapper>
      </CardWrapper>
      <Modal show={showModal} handleClose={handleClose} title={name} />
    </>
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
