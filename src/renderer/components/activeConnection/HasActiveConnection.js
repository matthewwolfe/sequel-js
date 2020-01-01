import React from 'react';
import { observer } from 'mobx-react';
import PropTypes from 'prop-types';
import { useStore } from 'mobx-app';

function HasActiveConnection({ children, none = false }) {
  const { activeConnection } = useStore('connections');

  if (!activeConnection && !none) {
    return null;
  }

  return <>{children}</>;
}

HasActiveConnection.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  none: PropTypes.bool,
};

export default observer(HasActiveConnection);
