import React from 'react';

const AlgorithmControls = ({ algorithm, setAlgorithm, resetArray, startSort }) => {
  return (
    <div className="controls">
      <button onClick={resetArray}>Generate New Array</button>
      <select value={algorithm} onChange={(e) => setAlgorithm(e.target.value)}>
        <option value="sorting_algorthm">Bubble Sort</option>
      </select>
      <button onClick={startSort}>Start Sorting</button>
    </div>
  );
};

export default AlgorithmControls;
