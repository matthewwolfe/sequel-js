import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { observer } from 'mobx-react';
import PropTypes from 'prop-types';
import { Box } from 'design/box';
import { Button } from 'design/button';
import { Grid } from 'design/grid';
import { GridItem } from 'design/gridItem';
import { Form } from 'design/form';
import { Heading } from 'design/heading';
import { Paper } from 'design/paper';
import { TextField } from 'design/textField';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4, 4),
  },
}));

function ConnectionForm({
  initialValues,
  saveConnection,
  setActiveConnection,
  testConnection,
}) {
  const classes = useStyles();

  return (
    <Grid
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      style={{ height: '90vh' }}
    >
      <Grid justify="center">
        <GridItem xs={12} sm={8} md={6} lg={4}>
          <Form
            initialValues={initialValues}
            onSubmit={values => saveConnection(values)}
          >
            {({ handleSubmit, values }) => (
              <form onSubmit={handleSubmit}>
                <Paper className={classes.root}>
                  <Heading align="center" variant="h6">
                    Connection
                  </Heading>

                  <Box>
                    <TextField label="Name" name="name" />
                    <TextField label="Host" name="host" />
                    <TextField label="Username" name="username" />
                    <TextField
                      label="Password"
                      name="password"
                      type="password"
                    />
                    <TextField label="Database" name="database" />
                    <TextField label="Port" name="port" />
                  </Box>
                </Paper>

                <Grid justify="flex-end">
                  <Box display="flex" mt={2}>
                    <Box mr={1}>
                      <Button
                        color="default"
                        onClick={() => testConnection(values)}
                      >
                        Test
                      </Button>
                    </Box>
                    <Box mr={1}>
                      <Button color="secondary" type="submit">
                        Save connection
                      </Button>
                    </Box>
                    <Box>
                      <Button
                        color="primary"
                        onClick={() => setActiveConnection(values)}
                      >
                        Connect
                      </Button>
                    </Box>
                  </Box>
                </Grid>
              </form>
            )}
          </Form>
        </GridItem>
      </Grid>
    </Grid>
  );
}

ConnectionForm.propTypes = {
  initialValues: PropTypes.object.isRequired,
  saveConnection: PropTypes.func.isRequired,
  setActiveConnection: PropTypes.func.isRequired,
  testConnection: PropTypes.func.isRequired,
};

export default observer(ConnectionForm);
