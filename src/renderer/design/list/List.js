import React from 'react';
import MaterialList from '@material-ui/core/List';
import PropTypes from 'prop-types';

function List({ children, component }) {
  return <MaterialList component={component}>{children}</MaterialList>;
}

List.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  component: PropTypes.string.isRequired,
};

export default List;
