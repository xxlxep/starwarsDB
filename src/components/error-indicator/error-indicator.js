import React from 'react';
import icon from './death-star.png';
import './error-indicator.css';

const ErrorIndicator = () => {
  return (
    <div className="error-indicator">
      <img src={icon} alt="error icon" />
      <span className="boom">BOOM! </span>
      <span>Something has gone terribly wrong</span>
    </div>
  );
};

export default ErrorIndicator;
