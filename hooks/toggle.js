import { useState, useCallback } from 'react';

export default function useToggle(initialState = false) {
  const [isEnabled, setIsEnabled] = useState(initialState);
  const toggle = useCallback(() => {
    setIsEnabled(prevState => !prevState);
  }, []);

  return [isEnabled, toggle];
}
