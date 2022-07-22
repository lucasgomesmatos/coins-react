import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from '../components/Form/Form';
import styles from '../styles/NovoProjeto.module.css';

const NovoProjeto = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    request('http://localhost:5000/categories');
  }, []);

  async function request(url) {
    const json = await (await fetch(url)).json();
    setData(json);
  }

  const history = useNavigate();

  function createPost(project) {
    // initialize cost and services
    project.cost = 0;
    project.services = [];

    fetch('http://localhost:5000/projects', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(project),
    })
      .then((res) => res.json())
      .then(
        history('/projetos', {
          state: { message: 'Projeto criado com sucesso!' },
        }),
      );
  }

  return (
    <div className={styles.novoProjeto}>
      <h1>Criar Projeto</h1>
      <p>Crie seu projeto para depois adicionar os serviços</p>
      <Form options={data} handleSubmit={createPost} />
    </div>
  );
};

export default NovoProjeto;
