import { useCallback, useState } from 'react';

export default function useBooleanState(defaultValue = false) {
  const [bool, setBool] = useState(defaultValue);

  const setTrue = useCallback(() => {
    setBool(true);
  }, []);

  const setFalse = useCallback(() => {
    setBool(false);
  }, []);

  const toggle = useCallback(() => {
    setBool((b) => !b);
  }, []);

  return [bool, setTrue, setFalse, toggle] as const;
}
