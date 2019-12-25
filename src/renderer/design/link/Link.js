import React from 'react';
import MaterialLink from '@material-ui/core/Link';
import { Link as ReactRouterLink } from 'react-router-dom';

function Link(props) {
  return <MaterialLink component={ReactRouterLink} {...props} />;
}

export default Link;
