import React from 'react';
import { ThemeProvider } from '../themes';
import { Heading } from '../heading';

function App() {
  return (
    <ThemeProvider>
      <Heading variant="h1">Sequel Pro</Heading>
    </ThemeProvider>
  );
}

export default App;
