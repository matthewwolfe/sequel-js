import React from 'react';
import { observer } from 'mobx-react';
import { useStore } from 'mobx-app';
import Sidebar from './Sidebar';

function SidebarContainer() {
  const { activeConnection } = useStore('connections');

  console.log(activeConnection);

  return <Sidebar activeConnection={activeConnection} />;
}

export default observer(SidebarContainer);
