import React from 'react';

export const Square = ({ value, onClick }) => (
  <div className={`square ${value === 'O' ? 'light' : 'dark'}`} onClick={onClick}>
    {value}
  </div>
);

