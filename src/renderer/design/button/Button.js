import React from 'react';
import MaterialButton from '@material-ui/core/Button';
import PropTypes from 'prop-types';

function Button({ children, variant = 'contained', ...props }) {
  return (
    <MaterialButton variant={variant} {...props}>
      {children}
    </MaterialButton>
  );
}

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  variant: PropTypes.string,
};

export default Button;
