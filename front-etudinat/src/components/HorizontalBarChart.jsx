import React, { useEffect, useRef } from 'react';
// import { 
//   Chart as ChartJS, 
//   CategoryScale
//   ,LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend} from 'chart.js';
// import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// );

const HorizontalBarChart = ({data}) => {
  const chartRef = useRef(null);
  
  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    var gradient = ctx.createLinearGradient(0, 0, 0, 500);
      gradient.addColorStop(0, '#89f7fe');   
      gradient.addColorStop(1, '#66a6ff');
    const chartInstance = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: Object.keys(data),
        datasets: [{
          label: 'Compatibility Level',
          data: Object.values(data),
          backgroundColor: gradient,
        }],
      },
      options: {
        indexAxis: 'y',
        elements: {
          bar: {
            borderWidth: 0,
          },
        },
        responsive: true,
        plugins: {
          legend: {
            display: false,
          },
          title: {
            display: true,
            text: 'Jobs and Compatibility',
          },
        },
        scales: {
          y: {
            ticks: {
              font: {
                weight: 'bold', 
                size: 14
              }
            }
          }
        },
        maintainAspectRatio: true,
        aspectRatio: 4,
        barPercentage: 1, 
      },
    });

    return () => {
      chartInstance.destroy();
    };
  }, [data]);

  return (
    <div style={{ marginBottom: '20px' }}>
      <canvas ref={chartRef} width="200" height="150" />
    </div>
  );
};

export default HorizontalBarChart;
