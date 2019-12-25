import React from 'react';
import { observer } from 'mobx-react';
import PropTypes from 'prop-types';
import { SavedConnection } from 'components/savedConnection';
import { Box } from 'design/box';
import { Heading } from 'design/heading';
import { List } from 'design/list';

function SavedConnections({ savedConnections }) {
  return (
    <Box py={2} flexGrow={1}>
      <Heading variant="subtitle2" align="center">
        Saved connections
      </Heading>

      <List component="nav">
        {savedConnections.map((connection, index) => (
          <SavedConnection connection={connection} key={index} />
        ))}
      </List>
    </Box>
  );
}

SavedConnections.propTypes = {
  savedConnections: PropTypes.any.isRequired,
};

export default observer(SavedConnections);
