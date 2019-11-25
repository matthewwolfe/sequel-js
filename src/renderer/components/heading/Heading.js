import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

function Heading({ children, variant, ...props }) {
  return (
    <Typography variant={variant} {...props}>
      {children}
    </Typography>
  );
}

Heading.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  variant: PropTypes.string.isRequired,
};

export default Heading;
