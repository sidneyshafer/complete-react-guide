import React from 'react';
import styles from './Books.module.css'; // Importing CSS Module

function Books(props) {
  return props.items.map((item) => (
    <li className={styles.book} key={Math.random().toString()}>
      <h2>{item.title}</h2>
      <p>{item.description}</p>
    </li>
  ));
}

export default Books;
