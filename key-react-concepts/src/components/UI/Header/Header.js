import React from 'react';
import keyConceptsImage from '../../../assets/images/key-concepts.png';
import './Header.css';

function Header() {
  return (
    <header>
      <img src={keyConceptsImage} alt='Medal badge with a star' />
      <h1>Key React Concepts</h1>
      {/* <p>Below are some key React concepts you should know about!</p> */}
    </header>
  );
}

export default Header;
