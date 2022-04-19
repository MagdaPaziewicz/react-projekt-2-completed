import React from 'react';

const Button = ({ click }) => (
  <button className='calculator' type='submit' onClick={click}>
    Przelicz
  </button>
);

export default Button;