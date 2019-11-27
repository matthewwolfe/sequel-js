import React from 'react';
import MaterialDrawer from '@material-ui/core/Drawer';
import PropTypes from 'prop-types';

function Drawer({
  anchor = 'left',
  children,
  open,
  variant = 'persistent',
  ...props
}) {
  return (
    <MaterialDrawer anchor={anchor} open={open} variant={variant} {...props}>
      {children}
    </MaterialDrawer>
  );
}

Drawer.propTypes = {
  anchor: PropTypes.oneOf(['left', 'right']),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  open: PropTypes.bool.isRequired,
  variant: PropTypes.oneOf(['permanent', 'persistent', 'temporary']),
};

export default Drawer;
