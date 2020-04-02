import React, { useContext } from 'react';

import FavoritesWrapper from './styles/FavoritesWrapper';

import CardsList from '../../CardsList';

const Favorites = () => {
  return (
    <FavoritesWrapper>
      {' '}
      <CardsList />
    </FavoritesWrapper>
  );
};

export default Favorites;
