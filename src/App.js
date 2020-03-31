import React, { useState } from 'react';

// Import theme stuff
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './themes';

import GlobalStyles from './styles';

// Custom components
import Header from './components/Header';
import Main from './components/Main';
import CardsList from './components/CardsList';

const App = () => {
  const [currentTheme, setCurrentTheme] = useState(lightTheme);

  const isLightTheme = () => (currentTheme === lightTheme ? true : false);
  const toggleTheme = () => {
    isLightTheme() ? setCurrentTheme(darkTheme) : setCurrentTheme(lightTheme);
  };

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyles />
      <Header theme={currentTheme} isLight={isLightTheme()} toggleTheme={toggleTheme} />
      <Main>
        <CardsList />
      </Main>
    </ThemeProvider>
  );
};

export default App;
