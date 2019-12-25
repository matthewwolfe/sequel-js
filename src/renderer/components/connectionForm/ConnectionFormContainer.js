import React from 'react';
import { observer } from 'mobx-react';
import { useSnackbar } from 'notistack';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { useStore } from 'mobx-app';
import ConnectionForm from './ConnectionForm';

function ConnectionFormContainer({ history }) {
  const { enqueueSnackbar } = useSnackbar();
  const { saveConnection, setActiveConnection, testConnection } = useStore(
    'connections',
  );

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
      saveConnection={data => saveConnection(data)}
      setActiveConnection={async data => {
        await setActiveConnection(data);
        history.push('/dashboard');
      }}
      testConnection={data => {
        testConnection(data).then(isConnected => {
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

ConnectionFormContainer.propTypes = {
  history: PropTypes.object.isRequired,
};

export default withRouter(observer(ConnectionFormContainer));
