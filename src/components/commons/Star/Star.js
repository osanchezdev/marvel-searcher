import React from 'react';
import { bool } from 'prop-types';

import StarWrapper from './styles/StarWrapper';

const Star = ({ fill }) => {
  return <StarWrapper>{fill ? <span>&#9733;</span> : <span>&#9734;</span>}</StarWrapper>;
};

Star.propTypes = {
  fill: bool,
};

export default Star;
