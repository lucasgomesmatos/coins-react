import React from 'react';

const Input = ({ id, value, setValue, placeholder }) => {
  return (
    <input
      id={id}
      value={value}
      onChange={({ target }) => {
        setValue(target.value);
      }}
      placeholder={placeholder}
    />
  );
};

export default Input;
