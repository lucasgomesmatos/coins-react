import React, { useState } from 'react';
import Button from '../Button';
import styles from '../assets/css/Form.module.css';
import Input from './Input';
import Select from './Select';

const Form = ({ options, handleSubmit, projectData }) => {
  const [project, setProject] = useState(projectData || {});

  function handleOnChange({ target }) {
    const { id, value } = target;
    setProject({ ...project, [id]: value });
  }

  function handleCategory({ target }) {
    setProject({
      ...project,
      category: {
        id: target.value,
        name: target.options[target.selectedIndex].text,
      },
    });
  }

  function submit(e) {
    e.preventDefault();
    handleSubmit(project);
  }

  return (
    <form onSubmit={submit} className={styles.form}>
      <Input
        texto={'Nome do projeto:'}
        type={'text'}
        name={'name'}
        id="name"
        value={project.nome}
        handleOnChange={handleOnChange}
        placeholder={'Insira o nome do projeto'}
      />

      <Input
        texto={'Orçamento do projeto:'}
        type={'number'}
        name={'budget'}
        id="budget"
        value={project.orcamento}
        handleOnChange={handleOnChange}
        placeholder={'Insira o orçamento do projeto'}
      />

      <Select
        name={'categories'}
        texto="Selecione a categoria:"
        options={options}
        value={project.category ? project.category.id : ''}
        handleOnChange={handleCategory}
      />
      <Button text={'cadastrar'} />
    </form>
  );
};

export default Form;
