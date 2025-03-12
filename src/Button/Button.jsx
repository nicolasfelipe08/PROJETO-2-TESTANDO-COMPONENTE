import React, { useState } from 'react';

function Button({ text }) {
  const [label, setLabel] = useState(text);

  const handleClick = () => {
    setLabel('A porta esta aberta!');
  };

  return <button onClick={handleClick}>{label}</button>;
}

export default Button;
