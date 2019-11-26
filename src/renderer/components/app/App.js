import React from 'react';
import SplashScreen from './SplashScreen';
import { ThemeProvider } from '../themes';

function App() {
  return (
    <ThemeProvider>
      <SplashScreen />
    </ThemeProvider>
  );
}

export default App;
