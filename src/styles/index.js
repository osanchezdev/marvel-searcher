import { createGlobalStyle } from 'styled-components';

// Import all fonts
import MontserratLightWoff from '../assets/fonts/montserrat-v14-latin-300.woff';
import MontserratLightWoff2 from '../assets/fonts/montserrat-v14-latin-300.woff2';
import MontserratRegularWoff from '../assets/fonts/montserrat-v14-latin-regular.woff';
import MontserratRegularWoff2 from '../assets/fonts/montserrat-v14-latin-regular.woff2';
import MontserratSemiBoldWoff from '../assets/fonts/montserrat-v14-latin-600.woff';
import MontserratSemiBoldWoff2 from '../assets/fonts/montserrat-v14-latin-600.woff2';

export default createGlobalStyle`
  /* Custom fonts */
  @font-face {
    font-family: 'Montserrat';
    src: local('Montserrat'), local('Montserrat'),
    url(${MontserratLightWoff2}) format('woff2'),
    url(${MontserratLightWoff}) format('woff');
    font-weight: 300;
    font-style: normal;
  }
  @font-face {
    font-family: 'Montserrat';
    src: local('Montserrat'), local('Montserrat'),
    url(${MontserratRegularWoff2}) format('woff2'),
    url(${MontserratRegularWoff}) format('woff');
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: 'Montserrat';
    src: local('Montserrat'), local('Montserrat'),
    url(${MontserratSemiBoldWoff2}) format('woff2'),
    url(${MontserratSemiBoldWoff}) format('woff');
    font-weight: 600;
    font-style: normal;
  }

  /* Global styles */
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    align-items: center;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    min-height: 100vh;
    width: 100%;
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', Roboto, Helvetica, Arial, sans-serif;
    transition: background .3s ease, color .3s ease;
  }
`;
