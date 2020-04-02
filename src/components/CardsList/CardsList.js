import React, { useContext } from 'react';

import CardsListWrapper from './styles/CardsListWrapper';
import Card from './../Card';

import { CharactersContext } from '../../context';

const CardsList = () => {
  const { characters, urlCharacters } = useContext(CharactersContext);
  return (
    <CardsListWrapper>
      {urlCharacters
        ? urlCharacters.map(character => <Card key={character.id} character={character} />)
        : characters.map(character => <Card key={character.id} character={character} />)}
    </CardsListWrapper>
  );
};

export default CardsList;
