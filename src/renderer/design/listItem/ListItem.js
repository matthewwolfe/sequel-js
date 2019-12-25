import React from 'react';
import MaterialListItem from '@material-ui/core/ListItem';
import MaterialListItemIcon from '@material-ui/core/ListItemIcon';
import PropTypes from 'prop-types';
import { Icon } from '../icon';

function ListItem({ button = false, children, icon = '', ...props }) {
  return (
    <MaterialListItem button={button} {...props}>
      {icon && (
        <MaterialListItemIcon>
          <Icon name={icon} />
        </MaterialListItemIcon>
      )}
      {children}
    </MaterialListItem>
  );
}

ListItem.propTypes = {
  button: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  icon: PropTypes.string,
};

export default ListItem;
