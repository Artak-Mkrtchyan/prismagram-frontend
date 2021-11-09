import { useState } from 'react';

export const useInput = <T>(defaultValue) => {
  const [value, setValue] = useState<T>(defaultValue);

  const onChange = (e) => {
    const {
      target: { value },
    } = e;

    setValue(value);
  };

  return { value, onChange, setValue };
};

