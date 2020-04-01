import React, { useState, useContext } from 'react';
import { string, shape } from 'prop-types';

import CardWrapper from './styles/CardWrapper';
import CardImage from './styles/CardImage';
import CardTitleWrapper from './styles/CardTitleWrapper';
import Modal from '../Modal';

import { ComicsContext } from '../../context';

const Card = ({ character }) => {
  const [showModal, setShowModal] = useState(false);
  const { setCollectionUri, setLoading } = useContext(ComicsContext);
  const { name, thumbnail, comics } = character;

  const handleOpen = () => {
    setLoading(true);
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
      {showModal && <Modal show={showModal} handleClose={handleClose} title={name} />}
    </>
  );
};

Card.propTypes = {
  character: shape({
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
