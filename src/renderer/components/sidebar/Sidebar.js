import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { observer } from 'mobx-react';
import PropTypes from 'prop-types';
import { HasActiveConnection } from 'components/activeConnection';
import { SavedConnections } from 'components/savedConnections';
import { Box } from 'design/box';
import { Drawer } from 'design/drawer';
import { Link } from 'design/link';
import { Text } from 'design/text';
import { Databases } from './databases';

const useStyles = makeStyles(theme => {
  return {
    drawer: {
      flexShrink: 0,
      width: 240,
    },
    drawerPaper: {
      backgroundColor: theme.palette.grey[100],
      borderTop: '1px solid',
      borderTopColor: theme.palette.grey[300],
      width: 240,
    },
  };
});

function Sidebar() {
  const classes = useStyles();

  return (
    <Drawer
      classes={{
        paper: classes.drawerPaper,
      }}
      className={classes.drawer}
      open
    >
      <HasActiveConnection none>
        <SavedConnections />
      </HasActiveConnection>

      <HasActiveConnection>
        <Databases />
      </HasActiveConnection>

      <Box p={2} textAlign="center">
        <HasActiveConnection none>
          <Text>
            <Link to="/">Connect</Link>
          </Text>
        </HasActiveConnection>

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
