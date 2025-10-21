import { useState, useEffect } from 'react';
import { fetchData } from '../utils/api';

/**
 * Custom hook for fetching data from JSON files
 * Eliminates repeated data-loading logic across multiple pages
 * 
 * @param {string} dataType - The type of data to fetch (e.g., 'profile', 'projects', 'certificates')
 * @returns {Object} Object containing { data, loading, error }
 * 
 * @example
 * const { data: profile, loading, error } = useData('profile');
 */
export function useData(dataType) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        setError(null);
        const result = await fetchData(dataType);
        setData(result);
      } catch (err) {
        console.error(`Error loading ${dataType}:`, err);
        setError(err.message || 'Failed to load data');
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [dataType]);

  return { data, loading, error };
}
