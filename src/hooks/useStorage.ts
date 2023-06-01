import { useEffect, useState } from 'react';
import { getStorageHandler } from '@src/utils/storageHandler';

export default function useStorage<T>(
  key: string,
  storageType: 'localStorage' | 'sessionStorage',
  defaultValue?: T,
): [value: T | null, setValue: (newValue: T) => void] {
  const handler = getStorageHandler(storageType);
  const [valueInState, setValueInState] = useState<T | null>(null);

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
