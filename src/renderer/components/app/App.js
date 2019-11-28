import React from 'react';
import { ConnectionForm } from 'components/connectionForm';
import { Sidebar } from 'components/sidebar';
import { ThemeProvider } from 'design/themes';
// import SplashScreen from './SplashScreen';

function App() {
  return (
    <ThemeProvider>
      <Sidebar />

      <div
        style={{
          width: 'calc(100% - 240px)',
          marginLeft: '240px',
        }}
      >
        <ConnectionForm />
      </div>
    </ThemeProvider>
  );
}

export default App;
