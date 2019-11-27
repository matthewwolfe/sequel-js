import React from 'react';
import MaterialBox from '@material-ui/core/Box';
import PropTypes from 'prop-types';

function Box({ children, ...props }) {
  return <MaterialBox {...props}>{children}</MaterialBox>;
}

Box.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Box;
