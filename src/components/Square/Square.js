import React, { useState } from 'react';

const Square = (props) => {
  const [ value, setValue ] = useState('X');

  const onClickHandler = () => {
    alert('say hi');
  };

  return (
    <button
      className="square"
      onClick={onClickHandler}
    >
      {props.value}
    </button>
  );
}

export { Square };