import { useCallback } from 'react';

export default function useSessionsStorage() {
  const set = useCallback((key) => {
    sessionStorage.setItem(key, key);
  }, []);
  const get = useCallback((key) => {
    const value = sessionStorage.getItem(key);
    return value;
  }, []);

  return [set, get];
}
