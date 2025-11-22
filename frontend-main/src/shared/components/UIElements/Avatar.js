import React from 'react';

import './Avatar.css';

const Avatar = props => {
  return (
    <div className={`avatar ${props.className}`} style={props.style}>
      <img
        src={`http://localhost:5005/${props.image}`}
        alt={props.alt}
      />
    </div>
  );
};

export default Avatar;
