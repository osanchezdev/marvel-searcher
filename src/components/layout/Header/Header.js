import React, { useState, useRef, useContext } from 'react';
import { shape, bool, func } from 'prop-types';
// import qs from 'query-string';
// import axios from 'axios'

//  Logo
import logoSrc from '../../../assets/images/marvel.svg';
import searchIconSrc from '../../../assets/images/search-icon.png';

import HeaderWrapper from './styles/HeaderWrapper';
import HeaderLogo from './styles/HeaderLogo';
import HeaderInputWrapper from './styles/HeaderInputWrapper';
import HeaderInput from './styles/HeaderInput';
import SearchIcon from './styles/SearchIcon';
import HeaderActions from './styles/HeaderActions';

import Toggle from '../../commons/Toggle';
import Container from '../../commons/Container';

import { CharactersContext, ComicDetailContext } from '../../../context';

const Header = ({ theme, isLight, toggleTheme }) => {
  let searchTimer;
  const inputRef = useRef(null);
  const [isInputActive, setInputActive] = useState(false);
  const { setLoading: setLoadingCharacters, setSearch } = useContext(CharactersContext);
  const { setLoading: setLoadingComicDetail, setComicId } = useContext(ComicDetailContext);

  const handleInputChange = () => {
    setLoadingCharacters(true);

    clearInterval(searchTimer);
    searchTimer = setTimeout(() => {
      const search = inputRef.current.value;
      const isComic = search.includes('comics/');

      if (isComic) {
        setLoadingComicDetail(true);
        setLoadingCharacters(false);
        setComicId(search.split('/')[5]);
        return;
      }
      setComicId(null);
      setSearch(search);
    }, 600);
  };

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
            onChange={handleInputChange}
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
