import { useState } from 'react';

export default function useQueue(initialValue = []) {
  const [state, set] = useState(initialValue);
  return {
    add: (value) => {
      set((queue) => [...queue, value]);
    },
    remove: () => {
      let result;
      set(([first, ...rest]) => {
        result = first;
        return rest;
      })
      return result;
    },
    first: () => state[0],
    last: () => state[state.length - 1],
    size: () => state.length
  }
}