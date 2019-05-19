import React from 'react';

export const Square = ({ value, onClick }) => (
  <div className="square" onClick={onClick}>
    {value}
  </div>
);

