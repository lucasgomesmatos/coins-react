import React from 'react';
import { Link } from 'react-router-dom';
import saving from '../components/assets/img/savings.svg';
import Button from '../components/Button';
import styles from '../styles/Home.module.css';
const Home = () => {
  return (
    <section className={styles.home}>
      <h1>
        Bem-Vindo ao <span>Coins</span>
      </h1>
      <p>Comece a gerenciar os seus projetos agora mesmo!</p>
      <Link to={'/novoprojetos'}>
        <Button />
      </Link>
      <img src={saving} alt="cofrinho" />
    </section>
  );
};

export default Home;
