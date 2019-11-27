import React from 'react';
import MaterialGrid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';

function Grid({ children, ...props }) {
  return (
    <MaterialGrid container item={false} {...props}>
      {children}
    </MaterialGrid>
  );
}

Grid.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Grid;
