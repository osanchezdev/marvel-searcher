import React, { useState, useRef } from 'react';
import { shape, bool, func } from 'prop-types';

//  Logo
import logoSrc from '../../assets/images/marvel.svg';
import searchIconSrc from '../../assets/images/search-icon.png';

import HeaderWrapper from './styles/HeaderWrapper';
import HeaderLogo from './styles/HeaderLogo';
import HeaderInputWrapper from './styles/HeaderInputWrapper';
import HeaderInput from './styles/HeaderInput';
import SearchIcon from './styles/SearchIcon';
import HeaderActions from './styles/HeaderActions';

import Toggle from '../commons/Toggle';

import Container from '../commons/Container';

const Header = ({ theme, isLight, toggleTheme }) => {
  const inputRef = useRef(null);
  const [isInputActive, setInputActive] = useState(false);

  return (
    <HeaderWrapper>
      <Container>
        <HeaderLogo src={logoSrc} />
        <HeaderInputWrapper>
          <SearchIcon
            src={searchIconSrc}
            active={isInputActive}
            onClick={() => inputRef.current.focus()}
          />
          <HeaderInput
            ref={inputRef}
            active={isInputActive}
            placeholder="Buscar"
            onClick={() => setInputActive(true)}
            onFocus={() => setInputActive(true)}
            onBlur={() => setInputActive(false)}
          />
        </HeaderInputWrapper>
        <HeaderActions>
          <Toggle theme={theme} isLight={isLight} toggleTheme={toggleTheme} />
        </HeaderActions>
      </Container>
    </HeaderWrapper>
  );
};

Header.propTypes = {
  theme: shape().isRequired,
  isLight: bool.isRequired,
  toggleTheme: func.isRequired,
};

export default Header;
