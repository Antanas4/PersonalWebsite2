import React from 'react';

const RoundButton = ({ onClick, label }) => {
  return (
    <button className="contact-btn" onClick={onClick}>
      {label}
    </button>
  );
};

export default RoundButton;
