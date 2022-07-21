import React, { useState } from 'react';
import Button from '../Button';
import styles from '../assets/css/Form.module.css';
import Input from './Input';
import Label from './Label';

const Form = () => {
  const [nome, setNome] = useState('');
  const [orcamento, setOrcamento] = useState('');
  const [categoria, setCategoria] = useState('');
  function handleChange() {}
  console.log(nome, orcamento, categoria);

  return (
    <form className={styles.form}>
      <Label id={'nome'} texto="Nome do projeto:" />
      <Input
        id="nome"
        value={nome}
        setValue={setNome}
        placeholder={'Insira o nome do projeto'}
      />

      <Label id={'oracamento'} texto="Orçamento do projeto:" />
      <Input
        id="oracamento"
        value={orcamento}
        setValue={setOrcamento}
        placeholder={'Insira o orçamento total'}
      />

      <Label id={'categoria'} texto="Selecione a categoria:" />
      <select
        value={categoria}
        id="categoria"
        onChange={({ target }) => {
          setCategoria(target.value);
        }}
      >
        <option value="">Selecione uma opção</option>
        <option value="Infra">Infra</option>
      </select>
      <Button />
    </form>
  );
};

export default Form;
