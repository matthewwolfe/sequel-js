import React from 'react';
import { Box } from 'design/box';
import { Grid } from 'design/grid';
import { GridItem } from 'design/gridItem';
import { Form } from 'design/form';
import { Heading } from 'design/heading';
import { Paper } from 'design/paper';
import { TextField } from 'design/textField';

function ConnectionForm() {
  return (
    <Grid
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      style={{ height: '90vh' }}
    >
      <Grid justify="center">
        <GridItem xs={12} sm={8} md={4}>
          <Paper style={{ padding: '2em', width: '100%' }}>
            <Heading align="center" variant="h6">
              Connection
            </Heading>

            <Box mt={3}>
              <Form>
                {({ handleSubmit }) => (
                  <form onSubmit={handleSubmit}>
                    <TextField label="Name" name="name" />
                    <TextField label="Username" name="username" />
                    <TextField
                      label="Password"
                      name="password"
                      type="password"
                    />
                    <TextField label="Database" name="database" />
                    <TextField label="Port" name="port" />
                  </form>
                )}
              </Form>
            </Box>
          </Paper>
        </GridItem>
      </Grid>
    </Grid>
  );
}

export default ConnectionForm;
