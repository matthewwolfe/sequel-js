import React from 'react';
import PropTypes from 'prop-types';
import { ListItem } from 'design/listItem';
import { Text } from 'design/text';

function DatabaseListItem({ database }) {
  const { name } = database;

  return (
    <ListItem button>
      <Text>{name}</Text>
    </ListItem>
  );
}

DatabaseListItem.propTypes = {
  database: PropTypes.object.isRequired,
};

export default DatabaseListItem;
