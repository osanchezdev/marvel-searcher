import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

// Import theme stuff
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './themes';
import GlobalStyles from './styles';

// Custom components
import Header from './components/layout/Header';

import {
  CharactersProvider,
  ComicsProvider,
  ComicDetailProvider,
  FavoritesProvider,
} from './context';

import Router from './routes';

const App = () => {
  const [currentTheme, setCurrentTheme] = useState(darkTheme);

  const isLightTheme = () => (currentTheme === lightTheme ? true : false);
  const toggleTheme = () => {
    isLightTheme() ? setCurrentTheme(darkTheme) : setCurrentTheme(lightTheme);
  };

  return (
    <ThemeProvider theme={currentTheme}>
      <FavoritesProvider>
        <CharactersProvider>
          <ComicsProvider>
            <ComicDetailProvider>
              <GlobalStyles />
              <BrowserRouter>
                <Header theme={currentTheme} isLight={isLightTheme()} toggleTheme={toggleTheme} />
                <Router />
              </BrowserRouter>
            </ComicDetailProvider>
          </ComicsProvider>
        </CharactersProvider>
      </FavoritesProvider>
    </ThemeProvider>
  );
};

export default App;
