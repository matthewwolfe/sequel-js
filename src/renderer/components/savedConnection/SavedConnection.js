import React from 'react';
import PropTypes from 'prop-types';
import { ListItem } from 'design/listItem';
import { Text } from 'design/text';

function SavedConnection({ connection, onClick }) {
  const { name } = connection;

  return (
    <ListItem button icon="Storage" onClick={onClick}>
      <Text>{name}</Text>
    </ListItem>
  );
}

SavedConnection.propTypes = {
  connection: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default SavedConnection;
