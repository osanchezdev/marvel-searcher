import React, { useState, useEffect } from 'react';
import { oneOfType, arrayOf, node } from 'prop-types';

import MainWrapper from './styles/MainWrapper';

import Loader from '../commons/Loader';

const Main = ({ children }) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    window.setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return <MainWrapper>{loading ? <Loader loading={loading} /> : children}</MainWrapper>;
};

Main.propTypes = {
  children: oneOfType([arrayOf(node), node]).isRequired,
};

export default Main;
