import React, { useState, useContext } from 'react';
import { number, string, shape } from 'prop-types';

import CardWrapper from './styles/CardWrapper';
import CardStarWrapper from './styles/CardStarWrapper';
import CardImage from './styles/CardImage';
import CardTitleWrapper from './styles/CardTitleWrapper';
import Modal from '../Modal';

import { ComicsContext, FavoritesContext } from '../../context';
import Star from '../commons/Star';

const Card = ({ character }) => {
  const [showModal, setShowModal] = useState(false);
  const { setCollectionUri, setLoading } = useContext(ComicsContext);
  const { favorites, addFavorite, removeFavorite } = useContext(FavoritesContext);
  const { id, name, thumbnail, comics } = character;

  const isFavorite = favorites.some(favorite => favorite.id === id);
  const handleOpen = () => {
    setLoading(true);
    setCollectionUri(comics.collectionURI);
    setShowModal(true);
  };
  const handleClose = () => {
    setCollectionUri(null);
    setShowModal(false);
  };
  const handleStarClick = e => {
    e.stopPropagation();

    isFavorite ? removeFavorite(character) : addFavorite(character);
  };

  return (
    <>
      <CardWrapper onClick={handleOpen}>
        <CardImage src={`${thumbnail.path.replace('http','https')}.${thumbnail.extension}`} alt={name} title={name} />
        <CardTitleWrapper>{name}</CardTitleWrapper>
        <CardStarWrapper
          title={`${isFavorite ? 'Remove from ' : 'Add to '}favorites`}
          onClick={handleStarClick}
        >
          <Star fill={isFavorite} />
        </CardStarWrapper>
      </CardWrapper>
      {showModal && <Modal show={showModal} handleClose={handleClose} title={name} />}
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
  }),
};

export default Card;
