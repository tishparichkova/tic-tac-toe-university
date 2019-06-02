import React from 'react';

import './MessageBox.scss';

const MessageBox = ({ winner, hiddenClass }) => (
  <div className={`message-box ${hiddenClass}`}>
    <p>
      The winner is: {winner}
    </p>
  </div>
);

export { MessageBox };