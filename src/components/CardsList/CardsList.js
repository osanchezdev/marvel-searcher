import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';

import CardsListWrapper from './styles/CardsListWrapper';
import Card from './../Card';

import { CharactersContext, FavoritesContext } from '../../context';

const CardsList = () => {
  const { pathname } = useLocation();
  const { characters, urlCharacters } = useContext(CharactersContext);
  const { favorites } = useContext(FavoritesContext);

  const filteredCharacters = () => {
    if (pathname === '/') {
      if (urlCharacters.length) return urlCharacters;
      if (characters.length) return characters;
      return 'No results';
    }
    if (favorites.length) return favorites;
    return 'No favorites';
  };

  return (
    <CardsListWrapper>
      {typeof filteredCharacters() === 'string'
        ? filteredCharacters()
        : filteredCharacters().map(character => <Card key={character.id} character={character} />)}
    </CardsListWrapper>
  );
};

export default CardsList;
