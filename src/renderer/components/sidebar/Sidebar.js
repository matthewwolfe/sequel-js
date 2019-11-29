import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { observer } from 'mobx-react';
import PropTypes from 'prop-types';
import { SavedConnection } from 'components/savedConnection';
import { Box } from 'design/box';
import { Drawer } from 'design/drawer';
import { Heading } from 'design/heading';

const useStyles = makeStyles(theme => ({
  drawer: {
    width: 240,
    flexShrink: 0,
  },
  drawerPaper: {
    backgroundColor: theme.palette.grey[100],
    width: 240,
  },
}));

function Sidebar({ savedConnections }) {
  const classes = useStyles();

  return (
    <Drawer
      classes={{
        paper: classes.drawerPaper,
      }}
      className={classes.drawer}
      open
    >
      <Box p={2}>
        <Heading variant="subtitle2" align="center">
          Saved connections
        </Heading>

        {savedConnections.map((connection, index) => (
          <SavedConnection connection={connection} key={index} />
        ))}
      </Box>
    </Drawer>
  );
}

Sidebar.propTypes = {
  savedConnections: PropTypes.any.isRequired,
};

export default observer(Sidebar);
