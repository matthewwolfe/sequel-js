import React from 'react';
import Storage from '@material-ui/icons/Storage';
import PropTypes from 'prop-types';

const icons = {
  Storage,
};

function Icon({ name }) {
  const IconComponent = icons[name];
  return <IconComponent />;
}

Icon.propTypes = {
  name: PropTypes.oneOf(['Storage']),
};

export default Icon;
