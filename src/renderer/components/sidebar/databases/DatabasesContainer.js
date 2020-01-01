import React from 'react';
import { observer } from 'mobx-react';
import { useFetchDatabases } from 'hooks/useFetchDatabases';
import { useStore } from 'mobx-app';
import Databases from './Databases';

function DatabasesContainer() {
  const { activeConnection } = useStore('connections');
  const { databases, loading } = useFetchDatabases();

  if (!activeConnection || loading) {
    return null;
  }

  return <Databases databases={databases} />;
}

export default observer(DatabasesContainer);
