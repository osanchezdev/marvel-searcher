import React from 'react';
import { oneOfType, arrayOf, node } from 'prop-types';

import MainWrapper from './styles/MainWrapper';

const Main = ({ children }) => {
  return <MainWrapper>{children}</MainWrapper>;
};

Main.propTypes = {
  children: oneOfType([arrayOf(node), node]).isRequired,
};

export default Main;
