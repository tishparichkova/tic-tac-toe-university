import React from 'react';



const MessageOverride = (MessageBox) => props => (
  <MessageBox props={props} message="The winner in this game is:" />
);


export { MessageOverride };