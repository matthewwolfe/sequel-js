import { useEffect, useState } from 'react';
import { useStore } from 'mobx-app';

function useFetchDatabases() {
  const { activeConnection } = useStore('connections');
  const [databases, setDatabases] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchDatabases() {
      setLoading(true);

      try {
        const activeDatabases = await activeConnection.databases();

        if (activeDatabases) {
          setDatabases(activeDatabases);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    if (activeConnection) {
      fetchDatabases();
    }
  }, [activeConnection]);

  return { databases, loading };
}

export { useFetchDatabases };
