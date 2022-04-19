import React from 'react';

const Input = ({ value, change, placeholder }) => (
  <input
    className='number'
    type='text'
    onChange={change}
    placeholder={placeholder}
    value={value}
  />
);

export default Input;