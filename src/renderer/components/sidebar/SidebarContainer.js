import React from 'react';
import { observer } from 'mobx-react';
import { useStore } from 'mobx-app';
import Sidebar from './Sidebar';

function SidebarContainer() {
  const { savedConnections } = useStore('connections');

  return <Sidebar savedConnections={savedConnections} />;
}

export default observer(SidebarContainer);
