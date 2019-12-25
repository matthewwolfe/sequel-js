import React from 'react';
import PropTypes from 'prop-types';
import { logger } from 'utils/logger';
import Link from './Link';

function LinkContainer({ onClick, to, ...props }) {
  return (
    <Link
      onClick={e => {
        logger.log(`Link clicked to: ${to}`);

        if (onClick) {
          onClick(e);
        }
      }}
      to={to}
      {...props}
    />
  );
}

LinkContainer.propTypes = {
  onClick: PropTypes.func,
  to: PropTypes.string.isRequired,
};

export default LinkContainer;
