import React from 'react';
import PropTypes from 'prop-types';
import SavedConnection from './SavedConnection';

function SavedConnectionContainer({ connection, ...props }) {
  return (
    <SavedConnection
      connection={connection}
      onClick={() => {
        console.log(connection);
      }}
      {...props}
    />
  );
}

SavedConnectionContainer.propTypes = {
  connection: PropTypes.object.isRequired,
};

export default SavedConnectionContainer;
