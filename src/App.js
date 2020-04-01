import React, { useState } from 'react';

// Import theme stuff
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './themes';
import GlobalStyles from './styles';

// Custom components
import Header from './components/Header';
import Main from './components/Main';
import CardsList from './components/CardsList';

import CharactersProvider, { CharactersContext } from './context';

const App = () => {
  const [currentTheme, setCurrentTheme] = useState(lightTheme);

  const isLightTheme = () => (currentTheme === lightTheme ? true : false);
  const toggleTheme = () => {
    isLightTheme() ? setCurrentTheme(darkTheme) : setCurrentTheme(lightTheme);
  };

  return (
    <ThemeProvider theme={currentTheme}>
      <CharactersProvider>
        <GlobalStyles />
        <Header theme={currentTheme} isLight={isLightTheme()} toggleTheme={toggleTheme} />
        <Main>
          <CardsList />
        </Main>
      </CharactersProvider>
    </ThemeProvider>
  );
};

export default App;
