import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'design/box';
import { Text } from 'design/text';

function SavedConnection({ connection }) {
  const { name } = connection;

  return (
    <Box mb={2}>
      <Text>{name}</Text>
    </Box>
  );
}

SavedConnection.propTypes = {
  connection: PropTypes.object.isRequired,
};

export default SavedConnection;
