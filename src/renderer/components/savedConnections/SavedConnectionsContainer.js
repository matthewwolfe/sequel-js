import React from 'react';
import { observer } from 'mobx-react';
import { useStore } from 'mobx-app';
import SavedConnections from './SavedConnections';

function SavedConnectionsContainer() {
  const { activeConnection, savedConnections } = useStore('connections');

  if (activeConnection) {
    return null;
  }

  return <SavedConnections savedConnections={savedConnections} />;
}

export default observer(SavedConnectionsContainer);
