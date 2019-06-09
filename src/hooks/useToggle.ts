import { useCallback, useState } from 'react';

export default function useToggle(initial = false): [boolean, () => void] {
  const [state, setState] = useState(initial);
  const toggle = useCallback(() => setState(val => !val), []);
  return [state, toggle];
}
