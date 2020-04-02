import React, { useContext } from 'react';

import CardsListWrapper from './styles/CardsListWrapper';
import Card from './../Card';

import { CharactersContext } from '../../context';

const CardsList = () => {
  const { characters, urlCharacters } = useContext(CharactersContext);
  const handleScroll = event => {
    console.log(window.innerHeight + 300);
    console.log(window.scrollY);
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      // you're at the bottom of the page
      console.log('bottom');
    }
  };
  return (
    <CardsListWrapper onWheel={handleScroll}>
      {urlCharacters
        ? urlCharacters.map(character => <Card key={character.id} character={character} />)
        : characters.map(character => <Card key={character.id} character={character} />)}
    </CardsListWrapper>
  );
};

export default CardsList;
