import React from 'react';
import ConnectionForm from './ConnectionForm';

function ConnectionFormContainer() {
  const initialValues = {
    name: '',
    username: '',
    password: '',
    database: '',
    port: '',
  };

  return <ConnectionForm initialValues={initialValues} />;
}

export default ConnectionFormContainer;
