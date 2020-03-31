import React, { useState, useRef } from 'react';
import { shape, bool, func } from 'prop-types';

//  Logo
import logoSrc from '../../assets/images/marvel.svg';
import searchIconSrc from '../../assets/images/search-icon.png';

import HeaderWrapper from './styles/Header';
import HeaderLogo from './styles/HeaderLogo';
import HeaderInputWrapper from './styles/HeaderInputWrapper';
import HeaderInput from './styles/HeaderInput';
import SearchIcon from './styles/SearchIcon';
import HeaderActions from './styles/HeaderActions';

import Toggle from '../commons/Toggle';

const Header = ({ theme, isLight, toggleTheme }) => {
  const inputRef = useRef(null);
  const [isInputActive, setInputActive] = useState(false);

  return (
    <HeaderWrapper>
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
    </HeaderWrapper>
  );
};

Header.propTypes = {};

export default Header;
