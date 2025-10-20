import { useState } from 'react';
import { Bar, Pie, Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";
import './App.css'; // Reuse custom vars

// Register ChartJS components
ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, LineElement, PointElement, Title, Tooltip, Legend);

export default function Dashboard() {
  const [activeCard, setActiveCard] = useState(null);

  const healthStatusData = [
    { animal: 'Hogs', healthy: 950, sick: 30, quarantined: 20 },
    { animal: 'Cattle', healthy: 580, sick: 15, quarantined: 5 },
    { animal: 'Chickens', healthy: 2450, sick: 50, quarantined: 0 },
    { animal: 'Carabaos', healthy: 395, sick: 5, quarantined: 0 },
  ];

  // Random data for Animal Movement Chart
  const movementData = {
    labels: ['Hogs', 'Cattle', 'Chickens', 'Carabaos'],
    datasets: [
      {
        label: 'Movement Count',
        data: [1200, 800, 3500, 450], // Fixed data for testing
        backgroundColor: 'rgba(21, 128, 61, 0.8)', // Custom green
        borderColor: 'rgba(21, 128, 61, 1)',
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: 'top', labels: { color: '#15803D' } },
    },
    scales: {
      y: { beginAtZero: true, title: { display: true, text: 'Number of Movements', color: '#15803D' }, ticks: { color: '#4B5563' } },
      x: { ticks: { color: '#4B5563' } },
    },
  };

  // Random data for Outbreak Statistics Pie Chart
  const outbreakData = {
    labels: ['Foot and Mouth', 'Avian Flu', 'Bovine TB', 'Other'],
    datasets: [
      {
        label: 'Outbreak Cases',
        data: [25, 15, 10, 20], // Fixed data for testing
        backgroundColor: [
          'rgba(21, 128, 61, 0.8)',
          'rgba(134, 239, 172, 0.8)',
          'rgba(209, 213, 219, 0.8)',
          'rgba(255, 255, 255, 0.8)',
        ],
        borderColor: [
          'rgba(21, 128, 61, 1)',
          'rgba(134, 239, 172, 1)',
          'rgba(209, 213, 219, 1)',
          'rgba(255, 255, 255, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const outbreakOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: 'top', labels: { color: '#15803D' } },
    },
  };

  // Random data for Summary Reports Line Chart
  const summaryData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Cases Over Time',
        data: [10, 20, 15, 25, 30, 20], // Fixed data for testing
        fill: false,
        borderColor: 'rgba(21, 128, 61, 1)',
        backgroundColor: 'rgba(21, 128, 61, 0.2)',
        tension: 0.4,
      },
    ],
  };

  const summaryOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: 'top', labels: { color: '#15803D' } },
    },
    scales: {
      y: { beginAtZero: true, title: { display: true, text: 'Number of Cases', color: '#15803D' }, ticks: { color: '#4B5563' } },
      x: { ticks: { color: '#4B5563' } },
    },
  };

  return (
    <div className="min-h-screen flex flex-col bg-white pt-24 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-screen-2xl mx-auto">
        <h1 className="text-4xl font-bold text-green-700 text-center mb-12 tracking-tight">
          Dashboard Overview
        </h1>

        {/* SECTION 1: Animal Movement and Health Status */}
        <section className="py-8 w-full">
          <h2 className="text-3xl font-semibold text-green-700 mb-8 text-center">
            Animal Movement and Health Status
          </h2>

          {/* Grid: cards will be wide because parent container is wide */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Movement Card */}
            <div
              className={`w-full bg-white p-8 rounded-2xl shadow-md border border-gray-200 transition-transform duration-300 ${
                activeCard === 0 ? 'scale-105 shadow-xl' : ''
              } hover:shadow-xl`}
              onMouseEnter={() => setActiveCard(0)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <h3 className="text-2xl font-semibold text-green-700 mb-4">
                Animal Movement Chart
              </h3>
              <div className="h-72">
                <Bar data={movementData} options={chartOptions} />
              </div>
              <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition w-full font-medium mt-5">
                View Details
              </button>
            </div>

            {/* Health Status Card */}
            <div
              className={`w-full bg-white p-8 rounded-2xl shadow-md border border-gray-200 transition-transform duration-300 ${
                activeCard === 1 ? 'scale-105 shadow-xl' : ''
              } hover:shadow-xl`}
              onMouseEnter={() => setActiveCard(1)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <h3 className="text-2xl font-semibold text-green-700 mb-4">
                Health Status Table
              </h3>

              {/* Make the table container wide and remove extra constraining wrappers */}
              <div className="overflow-x-auto rounded-lg border border-gray-200">
                <table className="min-w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-green-50 border-b border-gray-200">
                      <th className="p-4 font-semibold text-gray-700">Animal</th>
                      <th className="p-4 font-semibold text-gray-700">Healthy</th>
                      <th className="p-4 font-semibold text-gray-700">Sick</th>
                      <th className="p-4 font-semibold text-gray-700">Quarantined</th>
                    </tr>
                  </thead>
                  <tbody>
                    {healthStatusData.map((row, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="p-4">{row.animal}</td>
                        <td className="p-4">{row.healthy}</td>
                        <td className="p-4">{row.sick}</td>
                        <td className="p-4">{row.quarantined}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition w-full font-medium mt-5">
                View Table
              </button>
            </div>
          </div>
        </section>

        {/* SECTION 2: Outbreak Statistics & Summary Reports */}
        <section className="py-8 bg-gray-50 w-full rounded-b-2xl"> {/* Added bg-gray-50 for visual separation */}
          <h2 className="text-3xl font-semibold text-green-700 mb-8 text-center">
            Outbreak Statistics & Summary Reports
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div
              className={`w-full bg-white p-8 rounded-2xl shadow-md border border-gray-200 transition-transform duration-300 ${
                activeCard === 2 ? 'scale-105 shadow-xl' : ''
              } hover:shadow-xl`}
              onMouseEnter={() => setActiveCard(2)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <h3 className="text-2xl font-semibold text-green-700 mb-4">
                Outbreak Statistics
              </h3>
              <div className="h-72">
                <Pie data={outbreakData} options={outbreakOptions} />
              </div>
              <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition w-full font-medium mt-5">
                Generate Report
              </button>
            </div>

            <div
              className={`w-full bg-white p-8 rounded-2xl shadow-md border border-gray-200 transition-transform duration-300 ${
                activeCard === 3 ? 'scale-105 shadow-xl' : ''
              } hover:shadow-xl`}
              onMouseEnter={() => setActiveCard(3)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <h3 className="text-2xl font-semibold text-green-700 mb-4">
                Summary Reports
              </h3>
              <div className="h-72">
                <Line data={summaryData} options={summaryOptions} />
              </div>
              <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition w-full font-medium mt-5">
                Download Report
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}