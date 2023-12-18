import { useEffect, useState } from 'react';

export const useLocalStorage = (key, initialValues) => {
  const [storedValues, setStoredValues] = useState(() => {
    try {
      const stored = localStorage.getItem(key);
      return stored ? JSON.parse(stored) : initialValues;
    } catch (err) {
      console.log(err);
      return initialValues;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(storedValues));
    } catch (err) {
      console.log(err);
    }
  }, [key, storedValues]);

  return [storedValues, setStoredValues];
};
