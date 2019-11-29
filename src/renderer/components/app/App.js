import React from 'react';
import { SnackbarProvider } from 'notistack';
import { ConnectionForm } from 'components/connectionForm';
import { Sidebar } from 'components/sidebar';
import { ThemeProvider } from 'design/themes';
import { StoreProvider } from 'mobx-app';
// import SplashScreen from './SplashScreen';

function App() {
  return (
    <StoreProvider>
      <ThemeProvider>
        <SnackbarProvider maxSnack={1}>
          <Sidebar />

          <div
            style={{
              width: 'calc(100% - 240px)',
              marginLeft: '240px',
            }}
          >
            <ConnectionForm />
          </div>
        </SnackbarProvider>
      </ThemeProvider>
    </StoreProvider>
  );
}

export default App;
