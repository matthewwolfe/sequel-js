import React from 'react';
import MaterialPaper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';

function Paper({ children, ...props }) {
  return <MaterialPaper {...props}>{children}</MaterialPaper>;
}

Paper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Paper;
