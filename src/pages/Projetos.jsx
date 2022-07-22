import React, { useEffect, useState } from 'react';
import Message from '../components/Message/Message';
import { useLocation, Link } from 'react-router-dom';
import styles from '../styles/Projetos.module.css';
import Button from '../components/Button';
import ProjetoCard from '../components/ProjetoCard/ProjetoCard';

const Projetos = () => {
  const [projetos, setProjetos] = useState([]);

  async function request(url) {
    const data = await (await fetch(url)).json();
    setProjetos(data);
  }

  useEffect(() => {
    request('http://localhost:5000/projects');
  }, []);

  const location = useLocation();
  let message = '';
  message = location.state !== null ? location.state.message : '';

  return (
    <section className={styles.projetos}>
      <div className={styles.projetos_header}>
        <h1>Meus Projetos</h1>
        <Link to={'/novoprojetos'}>
          <Button text={'Criar Novo Projeto'} />
        </Link>
      </div>

      {message && <Message type="success" msg={message} />}

      <div className={styles.projetos_container}>
        {projetos &&
          projetos.map(({ id, name, budget, category }) => (
            <ProjetoCard
              key={id}
              name={name}
              budget={budget}
              category={category}
            />
          ))}
      </div>
    </section>
  );
};

export default Projetos;
