import React from 'react';
import { bool } from 'prop-types';

import LoaderWrapper from './styles/LoaderWrapper';
import Circle from './styles/Circle';

const Loader = ({ loading }) => {
  console.log(loading);
  console.log(typeof loading);
  return (
    <LoaderWrapper>
      <Circle loading={loading ? 1 : 0} />
    </LoaderWrapper>
  );
};

Loader.propTypes = {
  loading: bool.isRequired,
};

export default Loader;
