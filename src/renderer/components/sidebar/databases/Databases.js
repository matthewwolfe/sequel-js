import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'design/box';
import { Heading } from 'design/heading';
import { List } from 'design/list';
import DatabaseListItem from './DatabaseListItem';

function Databases({ databases }) {
  console.log(databases);

  return (
    <Box>
      <Heading variant="h6">Databases</Heading>

      <List component="div">
        {databases.map((database, index) => (
          <DatabaseListItem database={database} key={index} />
        ))}
      </List>
    </Box>
  );
}

Databases.propTypes = {
  databases: PropTypes.array,
};

export default Databases;
