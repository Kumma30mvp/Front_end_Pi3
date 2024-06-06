// Description.js
import React from 'react';
import '../styles/description.css';

const Description = ({ author, text }) => {
    return (
      <div className="description">
        <p><strong>{author}</strong>: {text}</p>
      </div>
    );
  }
  

export default Description;
