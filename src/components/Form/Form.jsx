import React, { useEffect, useState } from 'react';
import Button from '../Button';
import styles from '../assets/css/Form.module.css';
import Input from './Input';
import Select from './Select';

const Form = ({ options }) => {
  const [form, setForm] = useState('');
  const [categoria, setCategoria] = useState();

  function handleOnChange({ target }) {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  }
  console.log(form);

  return (
    <form className={styles.form}>
      <Input
        texto={'Nome do projeto:'}
        type={'text'}
        name={'name'}
        id="name"
        value={form.nome}
        handleOnChange={handleOnChange}
        placeholder={'Insira o nome do projeto'}
      />

      <Input
        texto={'Orçamento do projeto:'}
        type={'number'}
        name={'budget'}
        id="budget"
        value={form.orcamento}
        handleOnChange={handleOnChange}
        placeholder={'Insira o orçamento do projeto'}
      />

      <Select
        name={'categoria'}
        texto="Selecione a categoria:"
        options={options}
        value={form}
        handleOnChange={handleOnChange}
      />
      <Button />

      <select name="" id="">
        <option value="">1</option>
        <option value="">1</option>
        <option value="">1</option>
        <option value="">1</option>
        <option value="">1</option>
        <option value="">1</option>
      </select>
    </form>
  );
};

export default Form;
