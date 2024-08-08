import React, { useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';

// Register the required chart.js components
ChartJS.register(ArcElement, Tooltip);

// Define the type for the stats
type Stat = {
    name: string;
    percentage: number;
    color: string; // Color for the bar
};

const statsLeft: Stat[] = [
    { name: 'Marketing', percentage: 25, color: '#4c6ef5' },
    { name: 'Business Development', percentage: 25, color: '#9b5de5' },
    { name: 'Product Development', percentage: 10, color: '#00b4d8' },
];

const statsRight: Stat[] = [
    { name: 'Reserve', percentage: 10, color: '#ffbe0b' },
    { name: 'Reserve', percentage: 10, color: '#e63946' },
    { name: 'Token Sale', percentage: 20, color: '#8338ec' },
];

const TokenDistribution: React.FC = () => {
    const [activeTab, setActiveTab] = useState('Distribution');

    const chartData = {
        labels: [...statsLeft, ...statsRight].map(stat => stat.name),
        datasets: [
            {
                data: [...statsLeft, ...statsRight].map(stat => stat.percentage),
                backgroundColor: [...statsLeft, ...statsRight].map(stat => stat.color),
                borderColor: 'transparent',
                borderWidth: 2,
            },
        ],
    };

    const chartOptions = {
        plugins: {
            legend: {
                display: false
            },
        },
    };

    return (
        <div className="bg-[#0D0B1E] text-white p-12 text-center min-h-screen">
            <h2 className="text-4xl mb-4">Token Allocation & Funds Distribution</h2>
            <p className="text-lg mb-8">Join the industry leaders to discuss where the markets are heading. We accept token payments.</p>
            <div className="flex justify-center mb-8">
                <div className="flex bg-[#3a3a4a] rounded-full p-1">
                    <button
                        className={`py-2 px-4 rounded-full mx-2 ${activeTab === 'Distribution' ? 'bg-gradient-to-r from-blue-500 to-pink-500 text-white' : 'text-white'}`}
                        onClick={() => setActiveTab('Distribution')}
                    >
                        Distribution
                    </button>
                    <button
                        className={`py-2 px-4 rounded-full mx-2 ${activeTab === 'Funding Allocation' ? 'bg-gradient-to-r from-blue-500 to-pink-500 text-white' : 'text-white'}`}
                        onClick={() => setActiveTab('Funding Allocation')}
                    >
                        Funding Allocation
                    </button>
                </div>
            </div>
            {activeTab === 'Distribution' && (
                <div className="flex justify-center items-center max-w-6xl mx-auto">
                    <div className="flex-1 flex flex-col gap-4">
                        {statsLeft.map((stat, index) => (
                            <div key={index} className="bg-[#2c2c3c] p-4 rounded-lg">
                                <span className="block mb-2">{stat.name}: {stat.percentage}%</span>
                                <div className="h-2 rounded-full" style={{ width: `${stat.percentage}%`, backgroundColor: stat.color }}></div>
                            </div>
                        ))}
                    </div>
                    <div className="flex-shrink-0 mx-8">
                        <div className="bg-[#000435] p-6 rounded-full">
                            <Doughnut data={chartData} options={chartOptions} />
                        </div>
                    </div>
                    <div className="flex-1 flex flex-col gap-4">
                        {statsRight.map((stat, index) => (
                            <div key={index} className="bg-[#2c2c3c] p-4 rounded-lg">
                                <span className="block mb-2">{stat.name}: {stat.percentage}%</span>
                                <div className="h-2 rounded-full" style={{ width: `${stat.percentage}%`, backgroundColor: stat.color }}></div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
            {activeTab === 'Funding Allocation' && (
                <div>
                    {/* You can replace this section with content related to Funding Allocation */}
                    <p>Funding Allocation content goes here.</p>
                </div>
            )}
        </div>
    );
};

export default TokenDistribution;
