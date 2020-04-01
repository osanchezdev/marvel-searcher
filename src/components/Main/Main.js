import React, { useState, useContext } from 'react';
import { oneOfType, arrayOf, node } from 'prop-types';

import MainWrapper from './styles/MainWrapper';

import Loader from '../commons/Loader';

import { CharactersContext } from '../../context';

const Main = ({ children }) => {
  const { loading } = useContext(CharactersContext);
  return <MainWrapper>{loading ? <Loader loading={loading} /> : children}</MainWrapper>;
};

Main.propTypes = {
  children: oneOfType([arrayOf(node), node]).isRequired,
};

export default Main;
