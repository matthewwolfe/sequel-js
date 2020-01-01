import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Switch, Route } from 'react-router-dom';
import { ConnectionForm } from 'components/connectionForm';
import { Settings } from 'components/settings';
import { Box } from 'design/box';

const useStyles = makeStyles(theme => {
  return {
    mainContent: {
      borderTop: '1px solid',
      borderTopColor: theme.palette.grey[300],
    },
  };
});

function AppMainContent() {
  const classes = useStyles();

  return (
    <Box className={classes.mainContent}>
      <Switch>
        <Route path="/" exact component={ConnectionForm} />
        <Route path="/settings" exact component={Settings} />
      </Switch>
    </Box>
  );
}

export default AppMainContent;
