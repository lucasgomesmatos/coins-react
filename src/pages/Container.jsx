import React from 'react';
import styles from '../styles/Container.module.css';

const Container = (pros) => {
  return <section className={styles.container}>{pros.children}</section>;
};

export default Container;
