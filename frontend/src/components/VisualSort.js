import React, { useEffect, useState } from 'react';
import DisplayArray from './DisplayArray';
import AlgorithmControls from './AlgorithmControls'

const VisualSort =  () => {
    const [array, setArray] = useState([]);
    const [algorithm, setAlgorithm] = useState('sorting_algorithm');
    const [isSorting, setIsSorting] = useState(false);
    const [steps, setSteps] = useState([]);
    const [currentStep, setCurrentStep] = useState(0);
  
    useEffect(() => {
      resetArray();
    }, []);
  
    const resetArray = () => {
      const randomArray = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));
      setArray(randomArray);
      setSteps([]);
      setCurrentStep(0);
    };
  
    const startSort = async () => {
      setIsSorting(true);
      const response = await fetch('http://localhost:5000/sort', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ array, algorithm }),
      });
      const data = await response.json();
      setSteps(data.steps);
      setCurrentStep(0);
    };
  
    useEffect(() => {
      if (steps.length > 0 && currentStep < steps.length && isSorting) {
        const interval = setInterval(() => {
          setCurrentStep((prev) => prev + 1);
        }, 500); // Animation speed
        return () => clearInterval(interval);
      } else if (currentStep >= steps.length) {
        setIsSorting(false);
      }
    }, [steps, currentStep, isSorting]);
  
    return (
      <div>
        <AlgorithmControls algorithm={algorithm} setAlgorithm={setAlgorithm} resetArray={resetArray} startSort={startSort} />
        <DisplayArray array={steps[currentStep] || array} />
      </div>
    );  
};

export default VisualSort;
