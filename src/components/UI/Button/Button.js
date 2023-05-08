import React from 'react';

import './Button.css';

const Button = (props) => {
  const {type, onClick} = props;
  return (
      <button type={type} className="button" onClick={onClick}>{props.children}</button>
  );
};

export default Button;
