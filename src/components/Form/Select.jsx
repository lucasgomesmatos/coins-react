import React from 'react';

const Select = ({ name, texto, options, handleOnChange, value }) => {
  return (
    <>
      <label htmlFor={name}>{texto}</label>
      <select
        name={name}
        id={name}
        value={value || ''}
        onChange={handleOnChange}
      >
        <option value="">Selecione uma opção</option>
        {options &&
          options.map(({ id, name }) => (
            <option key={id} value={id}>
              {name}
            </option>
          ))}
      </select>
    </>
  );
};

export default Select;
