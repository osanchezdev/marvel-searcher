import React, { useState, useContext } from 'react';
import { number, string, shape } from 'prop-types';

import CardWrapper from './styles/CardWrapper';
import CardImage from './styles/CardImage';
import CardTitleWrapper from './styles/CardTitleWrapper';
import Modal from '../Modal';

import { ComicsContext } from '../../context';

const Card = ({ character }) => {
  const [showModal, setShowModal] = useState(false);
  const { setCollectionUri } = useContext(ComicsContext);
  const { id, name, thumbnail, comics } = character;

  const handleOpen = () => {
    setCollectionUri(comics.collectionURI);
    setShowModal(true);
  };
  const handleClose = () => {
    setCollectionUri(null);
    setShowModal(false);
  };

  return (
    <>
      <CardWrapper onClick={handleOpen}>
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
    comics: shape({
      collectionURI: string,
    }).isRequired,
  }).isRequired,
};

export default Card;
