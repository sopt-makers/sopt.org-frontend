interface StorageHandler {
  getItem<T>(key: string): T | null;
  getItemOrGenerate<T>(key: string, generator: () => T): T;
  setItem<T>(key: string, value: T): void;
  removeItem(key: string): void;
  hasItem(key: string): true | false;
}

export class SessionStorageHandler implements StorageHandler {
  getItem<T>(key: string): T | null {
    const value = sessionStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  }

  getItemOrGenerate<T>(key: string, generator: () => T): T {
    const value = this.getItem<T>(key);
    if (value !== null) {
      return value;
    }
    const newValue = generator();
    this.setItem(key, newValue);
    return newValue;
  }

  setItem<T>(key: string, value: T): void {
    sessionStorage.setItem(key, JSON.stringify(value));
  }

  removeItem(key: string): void {
    sessionStorage.removeItem(key);
  }

  hasItem(key: string) {
    return sessionStorage.getItem(key) !== null;
  }
}

export class LocalStorageHandler implements StorageHandler {
  getItem<T>(key: string): T | null {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  }

  getItemOrGenerate<T>(key: string, generator: () => T): T {
    const value = this.getItem<T>(key);
    if (value !== null) {
      return value;
    }
    const newValue = generator();
    this.setItem(key, newValue);
    return newValue;
  }

  setItem<T>(key: string, value: T): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  hasItem(key: string) {
    return localStorage.getItem(key) !== null;
  }
}

export const getStorageHandler = (
  storageType: 'localStorage' | 'sessionStorage',
): StorageHandler => {
  switch (storageType) {
    case 'localStorage':
      return new LocalStorageHandler();
    case 'sessionStorage':
      return new SessionStorageHandler();
  }
};
