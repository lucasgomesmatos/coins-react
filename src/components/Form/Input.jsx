import React from 'react';

const Input = ({
  id,
  type,
  name,
  texto,
  value,
  handleOnChange,
  placeholder,
}) => {
  return (
    <>
      <label htmlFor={id}>{texto}</label>
      <input
        name={name}
        type={type}
        id={id}
        value={value}
        onChange={handleOnChange}
        placeholder={placeholder}
      />
    </>
  );
};

export default Input;
