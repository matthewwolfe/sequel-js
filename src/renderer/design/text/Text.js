import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

function Text({ children, ...props }) {
  return (
    <Typography variant="body1" {...props}>
      {children}
    </Typography>
  );
}

Text.propTypes = {
  fontStyle: PropTypes.string,
  fontWeight: PropTypes.oneOf([PropTypes.number, PropTypes.string]),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Text;
