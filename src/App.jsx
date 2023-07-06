import React from 'react';
import Routes from './Routes';
import GlobalStyles from './Styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import light from './Styles/themes/light';


const App = () => {

  return (
    <ThemeProvider theme={light}>
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  );
}

export default App;