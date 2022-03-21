import { useState, useEffect } from 'react';

export default function useFetch(URL) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      try {
        const response = await fetch(URL);
        const json = await response.json();
        const array = await json.results;

        setData(array);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [URL]);

  return { data, error, loading };
}
