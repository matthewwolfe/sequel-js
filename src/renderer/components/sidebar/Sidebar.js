import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { observer } from 'mobx-react';
import PropTypes from 'prop-types';
import { SavedConnections } from 'components/savedConnections';
import { Box } from 'design/box';
import { Drawer } from 'design/drawer';
import { Link } from 'design/link';
import { Text } from 'design/text';

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

function Sidebar({ activeConnection }) {
  const classes = useStyles();

  return (
    <Drawer
      classes={{
        paper: classes.drawerPaper,
      }}
      className={classes.drawer}
      open
    >
      <SavedConnections />

      <Box p={2} textAlign="center">
        {!activeConnection && (
          <Text>
            <Link to="/">Connect</Link>
          </Text>
        )}

        <Text>
          <Link to="/settings">Settings</Link>
        </Text>
      </Box>
    </Drawer>
  );
}

Sidebar.propTypes = {
  activeConnection: PropTypes.any,
};

export default observer(Sidebar);
