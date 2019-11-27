import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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
      <Box p={2}>
        <Heading variant="subtitle2" align="center">
          Saved connections
        </Heading>
      </Box>
    </Drawer>
  );
}

export default Sidebar;
