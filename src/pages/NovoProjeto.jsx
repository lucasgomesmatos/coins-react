import React, { useState, useEffect } from 'react';
import Form from '../components/Form/Form';
import styles from '../styles/NovoProjeto.module.css';

const NovoProjeto = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    request('http://localhost:5000/categories');
  }, []);

  async function request(url) {
    const json = await (await fetch(url)).json();
    setData(json);
  }

  return (
    <div className={styles.novoProjeto}>
      <h1>Criar Projeto</h1>
      <p>Crie seu projeto para depois adicionar os serviços</p>
      <Form options={data} />
    </div>
  );
};

export default NovoProjeto;
