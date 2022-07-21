import React from 'react';

const Label = ({ id, texto }) => {
  return <label htmlFor={id}>{texto}</label>;
};

export default Label;
