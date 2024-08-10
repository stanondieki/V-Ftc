import React, { useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';

// Register the required chart.js components
ChartJS.register(ArcElement, Tooltip);

type Stat = {
    name: string;
    percentage: number;
    color: string;
};

const stats: Stat[] = [
    { name: 'Marketing', percentage: 25, color: '#4c6ef5' },
    { name: 'Business Development', percentage: 25, color: '#9b5de5' },
    { name: 'Product Development', percentage: 10, color: '#00b4d8' },
    { name: 'Reserve', percentage: 10, color: '#ffbe0b' },
    { name: 'Reserve', percentage: 10, color: '#e63946' },
    { name: 'Token Sale', percentage: 20, color: '#8338ec' },
];

const TokenDistribution: React.FC = () => {
    const [activeTab, setActiveTab] = useState('Distribution');

    const chartData = {
        labels: stats.map(stat => stat.name),
        datasets: [
            {
                data: stats.map(stat => stat.percentage),
                backgroundColor: stats.map(stat => stat.color),
                borderColor: 'transparent',
                borderWidth: 0,
            },
        ],
    };

    const chartOptions = {
        plugins: {
            legend: {
                display: false,
            },
        },
    };

    const renderStats = (side: 'left' | 'right') => {
        const sideStats = side === 'left' ? stats.slice(0, 3) : stats.slice(3, 6);
        return sideStats.map((stat, index) => (
            <div
                key={index}
                className={`flex ${side === 'left' ? 'justify-start' : 'justify-end'} items-center w-full mb-2`}
            >
                <div className={`w-full flex flex-col ${side === 'right' ? 'items-end' : 'items-start'}`}>
                    <span className="block mb-1 text-white text-lg font-bold text-left">{stat.name}: {stat.percentage}%</span>
                    <div className="w-full h-3 bg-gray-600 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-white rounded-full"
                            style={{
                                width: `${stat.percentage}%`,
                                backgroundColor: stat.color,
                            }}
                        ></div>
                    </div>
                </div>
            </div>
        ));
    };

    return (
        <div className="bg-[#0D0B1E] text-white p-12 text-center min-h-screen">
            <h2 className="text-4xl mb-4">Token Allocation & Funds Distribution</h2>
            <p className="text-lg mb-8">
                Join the industry leaders to discuss where the markets are heading. We accept token payments.
            </p>
            <div className="flex justify-center mb-8">
                <div className="flex bg-[#3a3a4a] rounded-full p-1">
                    <button
                        className={`py-2 px-4 rounded-full mx-2 ${
                            activeTab === 'Distribution'
                                ? 'bg-gradient-to-r from-blue-500 to-pink-500 text-white'
                                : 'text-white'
                        }`}
                        onClick={() => setActiveTab('Distribution')}
                    >
                        Distribution
                    </button>
                    <button
                        className={`py-2 px-4 rounded-full mx-2 ${
                            activeTab === 'Funding Allocation'
                                ? 'bg-gradient-to-r from-blue-500 to-pink-500 text-white'
                                : 'text-white'
                        }`}
                        onClick={() => setActiveTab('Funding Allocation')}
                    >
                        Funding Allocation
                    </button>
                </div>
            </div>
            <div className="flex justify-between items-center"> {/* Removed container classes */}
                <div className="flex-1 flex flex-col gap-2 pr-4">{renderStats('left')}</div>
                <div className="flex-shrink-0 mx-4">
                    <div className="bg-[#000435] p-6 rounded-full">
                        <Doughnut data={chartData} options={chartOptions} />
                    </div>
                </div>
                <div className="flex-1 flex flex-col gap-2 pl-4">{renderStats('right')}</div>
            </div>
        </div>
    );
};

export default TokenDistribution;
