import React from 'react';
import MaterialGrid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';

function GridItem({ children, ...props }) {
  return (
    <MaterialGrid container={false} item {...props}>
      {children}
    </MaterialGrid>
  );
}

GridItem.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default GridItem;
