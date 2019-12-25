import React from 'react';
import { SnackbarProvider } from 'notistack';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { ConnectionForm } from 'components/connectionForm';
import { Settings } from 'components/settings';
import { Sidebar } from 'components/sidebar';
import { ThemeProvider } from 'design/themes';
import { StoreProvider } from 'mobx-app';

function App() {
  return (
    <StoreProvider>
      <ThemeProvider>
        <SnackbarProvider maxSnack={1}>
          <HashRouter>
            <>
              <Sidebar />

              <div
                style={{
                  width: 'calc(100% - 240px)',
                  marginLeft: '240px',
                }}
              >
                <Switch>
                  <Route path="/" exact component={ConnectionForm} />
                  <Route path="/settings" exact component={Settings} />
                </Switch>
              </div>
            </>
          </HashRouter>
        </SnackbarProvider>
      </ThemeProvider>
    </StoreProvider>
  );
}

export default App;
