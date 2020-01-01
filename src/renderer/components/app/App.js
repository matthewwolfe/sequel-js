import React from 'react';
import { SnackbarProvider } from 'notistack';
import { HashRouter } from 'react-router-dom';
import { Sidebar } from 'components/sidebar';
import { ThemeProvider } from 'design/themes';
import { StoreProvider } from 'mobx-app';
import AppMainContent from './AppMainContent';

function App() {
  return (
    <StoreProvider>
      <ThemeProvider>
        <SnackbarProvider maxSnack={1}>
          <HashRouter>
            <>
              <Sidebar />
              <AppMainContent />
            </>
          </HashRouter>
        </SnackbarProvider>
      </ThemeProvider>
    </StoreProvider>
  );
}

export default App;
