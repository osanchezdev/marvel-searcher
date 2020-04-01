import React from 'react';

import CardsListWrapper from './styles/CardsListWrapper';
import Card from './../Card';

const CardsList = () => {
  return (
    <CardsListWrapper>
      <Card /> <Card /> <Card /> <Card /> <Card /> <Card />{' '}
    </CardsListWrapper>
  );
};

export default CardsList;
