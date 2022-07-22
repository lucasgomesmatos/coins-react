import React from 'react';
import { BsPencil, BsFillTranshFill } from 'react-icons/bs';
import styles from '../assets/css/ProjectCard.module.css';

const ProjetoCard = ({ id, name, budget, category, handleRemove }) => {
  return (
    <div className={styles.project_card}>
      <h3>{name}</h3>
      <p>
        <span className={styles.strong}>Orçamento:</span> R${budget}
      </p>
      <p className={styles.category_color}>
        <span className={`${styles[category.name.toLowerCase()]}`}></span>{' '}
        {category.name}
      </p>
      <div className={styles.category_text}>
        <p>Editar</p>
        <p>Remover</p>
      </div>
    </div>
  );
};

export default ProjetoCard;
