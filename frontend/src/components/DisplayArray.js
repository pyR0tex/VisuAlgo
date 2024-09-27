import React from 'react';

const ArrayDisplay = ({ array }) => {
  return (
    <div className="array-container">
      {array.map((value, idx) => (
        <div key={idx} className="array-bar" style={{ height: `${value}px` }}>
          {value}
        </div>
      ))}
    </div>
  );
};

export default ArrayDisplay;
