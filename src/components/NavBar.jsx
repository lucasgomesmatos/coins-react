import React from 'react';
import { Link } from 'react-router-dom';
import styles from './assets/css/NavBar.module.css';
import logo from './assets/img/logo.svg';

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <Link to={'/'}>
        <img src={logo} alt="" />
      </Link>
      <ul>
        <li>
          <Link to={'/'}>Home</Link>
        </li>
        <li>
          <Link to={'/contato'}>Contato</Link>
        </li>
        <li>
          <Link to={'/empresa'}>Empresa</Link>
        </li>
        <li>
          <Link to={'/projetos'}>Projetos</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
