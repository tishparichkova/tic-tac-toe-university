import React from 'react';

import './InformationInput.scss';
 
const InformationInput = ({token, active}) => {
  return (
    <div className={`information-input ${active ? 'active' : ''}`}> {token} </div>
  )
}

export { InformationInput }