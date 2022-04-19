import React from 'react';

const Select = ({ symbols, change, values }) => (
  <select
    className='currencies'
    onChange={change}
  >
    {symbols.map((symbol, i) => (
      <option key={i} value={values[i]}>
        {symbol}
      </option>
    ))}
  </select>
);

export default Select;