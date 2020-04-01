import React, { useContext } from 'react';

import CardsListWrapper from './styles/CardsListWrapper';
import Card from './../Card';

import { CharactersContext } from '../../context';

const CardsList = () => {
  const { characters } = useContext(CharactersContext);
  console.log(characters);
  return (
    <CardsListWrapper>
      {characters.map(character => (
        <Card key={character.id} character={character} />
      ))}
    </CardsListWrapper>
  );
};

export default CardsList;
