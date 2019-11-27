import React from 'react';
import { Box } from 'design/box';
import { Grid } from 'design/grid';
import { GridItem } from 'design/gridItem';
import { Heading } from 'design/heading';
import { Text } from 'design/text';

function SplashScreen() {
  return (
    <Grid
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: '100vh' }}
    >
      <GridItem xs={6}>
        <Heading variant="h1" align="center">
          Sequel JS
        </Heading>

        <Box mt={4}>
          <Text mt={3} align="center">
            Loading...
          </Text>
        </Box>
      </GridItem>
    </Grid>
  );
}

export default SplashScreen;
