import React from 'react';
import PropTypes from 'prop-types';
import { StoreContext } from '../context/StoreContext';

import * as globalStores from '../stores/global';

function StoreProvider({ children }) {
  return (
    <StoreContext.Provider value={globalStores}>
      {children}
    </StoreContext.Provider>
  );
}

StoreProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  stores: PropTypes.object.isRequired,
};

export default StoreProvider;
