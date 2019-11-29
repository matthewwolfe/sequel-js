import React from 'react';
import { useSnackbar } from 'notistack';
import { useStore } from 'mobx-app';
import ConnectionForm from './ConnectionForm';

function ConnectionFormContainer() {
  const { enqueueSnackbar } = useSnackbar();
  const connections = useStore('connections');

  const initialValues = {
    name: '',
    host: '127.0.0.1',
    username: '',
    password: '',
    database: '',
    port: '3306',
  };

  return (
    <ConnectionForm
      initialValues={initialValues}
      saveConnection={data => connections.saveConnection(data)}
      testConnection={data => {
        connections.testConnection(data).then(isConnected => {
          if (isConnected) {
            enqueueSnackbar('Connection succeeded', { variant: 'success' });
          } else {
            enqueueSnackbar('Connection failed', { variant: 'error' });
          }
        });
      }}
    />
  );
}

export default ConnectionFormContainer;
