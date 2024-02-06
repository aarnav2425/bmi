// src/components/Calculator.js
import React, { useState } from 'react';
import styles from '../styles/Calculator.module.css';

const Calculator = ({ onCalculate }) => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [calculatedBMI, setCalculatedBMI] = useState(null);

  const handleCalculate = () => {
    if (weight && height) {
      const weightInKg = parseFloat(weight);
      const heightInM = parseFloat(height) / 100; // Convert cm to meters
      const bmi = weightInKg / (heightInM * heightInM);
      const roundedBMI = bmi.toFixed(2);
      setCalculatedBMI(roundedBMI);
      onCalculate(roundedBMI);
    }
  };

  return (
    <div className={styles.calculator}>
      <label>Weight (kg):</label>
      <input
        type="text"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />

      <label>Height (cm):</label>
      <input
        type="text"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
      />

      <button onClick={handleCalculate}>Calculate BMI</button>

      {calculatedBMI !== null && (
        <div className={styles.result}>
          <p>Calculated BMI: {calculatedBMI}</p>
        </div>
      )}
    </div>
  );
};

export default Calculator;
