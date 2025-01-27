import React from 'react';

function Concepts(props) {
  return props.items.map((item) => (
    <li className='concept' key={Math.random().toString()}>
      <img src={item.image} alt={item.title} />
      <h2>{item.title}</h2>
      <p>{item.description}</p>
    </li>
  ));
}

export default Concepts;
