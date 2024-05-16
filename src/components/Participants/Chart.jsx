import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const RegistrationsChart = ({ event }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const countRegistrationsPerDay = () => {
      const registrationsPerDay = {};

      event.participants.forEach(participant => {
        const registrationDate = new Date(participant.dateOfRegistration).toLocaleDateString();
        registrationsPerDay[registrationDate] = (registrationsPerDay[registrationDate] || 0) + 1;
      });

      return registrationsPerDay;
    };

    const registrationsData = countRegistrationsPerDay();

    const chartOptions = {
      type: 'line',
      data: {
        labels: Object.keys(registrationsData),
        datasets: [{
          label: 'Registrations per day',
          data: Object.values(registrationsData),
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    };

    const myChart = new Chart(chartRef.current, chartOptions);

    // Cleanup chart instance on component unmount
    return () => {
      myChart.destroy();
    };
  }, [event]);

  return <canvas ref={chartRef}></canvas>;
};

export default RegistrationsChart;
