import React from 'react';
import PropTypes from 'prop-types';

import CardsListWrapper from './styles/CardsListWrapper';
import Card from './../Card';
const CardsList = () => {
  return (
    <CardsListWrapper>
      <Card /> <Card /> <Card /> <Card /> <Card /> <Card />{' '}
    </CardsListWrapper>
  );
};

CardsList.propTypes = {};

export default CardsList;
