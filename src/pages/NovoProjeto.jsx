import React from 'react';
import Form from '../components/Form/Form';
import styles from '../styles/NovoProjeto.module.css';

const NovoProjeto = () => {
  return (
    <div className={styles.novoProjeto}>
      <h1>Criar Projeto</h1>
      <p>Crie seu projeto para depois adicionar os serviços</p>
      <Form />
    </div>
  );
};

export default NovoProjeto;
