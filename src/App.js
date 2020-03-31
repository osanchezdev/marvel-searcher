import React, { useState } from 'react';

// Import theme stuff
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './themes';

import GlobalStyles from './styles';

// Custom components
import Main from './components/Main';

const App = () => {
  const [currentTheme, setCurrentTheme] = useState(lightTheme);

  const toggleTheme = () => {
    currentTheme === lightTheme ? setCurrentTheme(darkTheme) : setCurrentTheme(lightTheme);
  };

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyles />
      <Main>APP</Main>
    </ThemeProvider>
  );
};

export default App;
