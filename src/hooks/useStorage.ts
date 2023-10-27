import { useEffect, useState } from 'react';
import { getStorageHandler } from '@src/lib/utils/storageHandler';

export default function useStorage<T>(
  key: string,
  storageType: 'localStorage' | 'sessionStorage',
  defaultValue: T,
): [value: T, setValue: (newValue: T) => void] {
  const handler = getStorageHandler(storageType);
  const [valueInState, setValueInState] = useState<T>(defaultValue);

  useEffect(() => {
    const storageItem = handler.getItem<T>(key);
    if (storageItem !== null) {
      setValueInState(storageItem);
    } else if (defaultValue !== undefined) {
      handler.setItem(key, defaultValue);
      setValueInState(defaultValue);
    }
  }, [handler, key, defaultValue]);

  const setValue = (newValue: T) => {
    handler.setItem(key, newValue);
    setValueInState(newValue);
  };

  return [valueInState, setValue];
}
