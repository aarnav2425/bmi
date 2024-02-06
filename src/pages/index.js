import React, { useState, useEffect, useRef } from 'react';
import ChartContainer from '../components/ChartContainer';
import Calculator from '../components/Calculator';

const Home = () => {
  const [chartData, setChartData] = useState({
    labels: ['BMI Values'],
    datasets: [
      {
        label: 'Person1',
        data: [], // Empty initial data values
        fill: false,
        borderColor: 'rgb(54, 162, 235)',
        tension: 0.1,
      },
      {
        label: 'Person2',
        data: [], // Empty initial data values
        fill: false,
        borderColor: 'rgb(255, 0, 0)',
        tension: 0.1,
      },
    ],
  });

  const chartRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      // Simulate API call to get initial data
      const initialData = await simulateAPICall();
      setChartData(initialData);
    };

    fetchData();
  }, []);
  
  const handleCalculate = (bmi) => {
    const newChartData = updateChartData(chartData, bmi);
    setChartData(newChartData);
  };

  const simulateAPICall = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          labels: ['BMI 1', 'BMI 2', 'BMI 3'],
          datasets: [
            {
              label: 'Aarnav',
              data: [23.5, 24.2, 22.8],
              fill: true,
              borderColor: 'rgb(54, 162, 235)',
              tension: 0.1,
            },

            {
              label: 'Vasu',
              data: [21.5, 22.2, 28.8],
              fill: false,
              borderColor:'rgb(255,0,0)',
              tension: 0.1,
            },
            
            
          ],
        });
      }, 1400);
    });
  };

  const updateChartData = (oldData, bmi) => {
    const labels = [...oldData.labels,'New BMI']; // Assuming you want to add a timestamp as a label
    const datasets = [...oldData.datasets];
  
    datasets[0].data.push(parseFloat(bmi));
    datasets[1].data.push(parseFloat(bmi));
  
    return {
      labels: labels,
      datasets: datasets,
    };
  };
  

  return (
    <div>
      <h1>BMI Calculator</h1>
      <ChartContainer chartData={chartData} />
      <Calculator onCalculate={handleCalculate} />

    </div>
  );
};

export default Home;