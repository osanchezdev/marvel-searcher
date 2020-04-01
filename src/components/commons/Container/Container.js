import React from 'react';
import { oneOfType, arrayOf, node } from 'prop-types';
import ContainerWrapper from './styles/ContainerWrapper';

const Container = ({ children }) => {
  return <ContainerWrapper>{children}</ContainerWrapper>;
};

Container.propTypes = {
  children: oneOfType([arrayOf(node), node]).isRequired,
};

export default Container;
