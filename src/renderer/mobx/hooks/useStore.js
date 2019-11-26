import { useContext } from 'react';
import { StoreContext } from '../context/StoreContext';

function useStore(store) {
  const stores = useContext(StoreContext);
  return stores[store];
}

export default useStore;
