import React from 'react';
import { func, object, bool } from 'prop-types';

import Checkbox from './styles/Checkbox';
import CheckboxLabel from './styles/CheckboxLabel';
import CheckboxWrapper from './styles/CheckboxWrapper';

const Toggle = ({ theme, isLight, toggleTheme }) => {
  return (
    <CheckboxWrapper>
      <Checkbox id="checkbox" type="checkbox" onClick={toggleTheme} />
      <CheckboxLabel htmlFor="checkbox" />
    </CheckboxWrapper>
  );
};

Toggle.propTypes = {
  theme: object.isRequired,
  isLight: bool.isRequired,
  toggleTheme: func.isRequired,
};

export default Toggle;
