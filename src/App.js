import React, { useState } from 'react';

// Import theme stuff
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './themes';
import GlobalStyles from './styles';

// Custom components
import Header from './components/layout/Header';
import Main from './components/layout/Main';

import { CharactersProvider, ComicsProvider, ComicDetailProvider } from './context';

const App = () => {
  const [currentTheme, setCurrentTheme] = useState(darkTheme);

  const isLightTheme = () => (currentTheme === lightTheme ? true : false);
  const toggleTheme = () => {
    isLightTheme() ? setCurrentTheme(darkTheme) : setCurrentTheme(lightTheme);
  };

  return (
    <ThemeProvider theme={currentTheme}>
      <CharactersProvider>
        <ComicsProvider>
          <ComicDetailProvider>
            <GlobalStyles />
            <Header theme={currentTheme} isLight={isLightTheme()} toggleTheme={toggleTheme} />
            <Main />
          </ComicDetailProvider>
        </ComicsProvider>
      </CharactersProvider>
    </ThemeProvider>
  );
};

export default App;
