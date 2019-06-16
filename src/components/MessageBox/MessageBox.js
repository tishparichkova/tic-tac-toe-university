import React from 'react';

import './MessageBox.scss';

const MessageBox = ({ winner, hiddenClass, message}) => (
  <div className={`message-box ${hiddenClass}`}>
    <p>
      {message ? message : 'The winner is:'} {winner}
    </p>
  </div>
);

export { MessageBox };