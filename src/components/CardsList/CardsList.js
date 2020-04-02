import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';

import CardsListWrapper from './styles/CardsListWrapper';
import Card from './../Card';

import { CharactersContext, FavoritesContext } from '../../context';

const CardsList = () => {
  const { pathname } = useLocation();
  const { characters, urlCharacters } = useContext(CharactersContext);
  const { favorites } = useContext(FavoritesContext);

  return (
    <CardsListWrapper>
      {pathname === '/'
        ? urlCharacters
          ? urlCharacters.map(character => <Card key={character.id} character={character} />)
          : characters.map(character => <Card key={character.id} character={character} />)
        : favorites.length
        ? favorites.map(character => <Card key={character.id} character={character} />)
        : ' No favorites'}
    </CardsListWrapper>
  );
};

export default CardsList;
