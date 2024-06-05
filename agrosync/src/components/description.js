// Description.js
import React from 'react';
import 'C:/Users/gabri/OneDrive/Documentos/UTEC 2024-1/pi 3/Front_end/Front_end_Pi3/agrosync/src/styles/description.css';

const Description = ({ author, text }) => {
    return (
      <div className="description">
        <p><strong>{author}</strong>: {text}</p>
      </div>
    );
  }
  

export default Description;
