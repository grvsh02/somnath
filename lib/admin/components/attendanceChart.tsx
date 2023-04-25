import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
} from 'chart.js';
import { Line } from 'react-chartjs-2';
// @ts-ignore
import faker from 'faker';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
    },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
    labels,
    datasets: [
        {
            label: 'Present',
            data: labels.map(() => faker.datatype.number({ min: 40, max: 100 })),
            fill: true,
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            lineTension: 0.3,
        },
        {
            label: 'Late Comers',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 40 })),
            fill: true,
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.9)',
            lineTension: 0.3,
        },
    ],
};

export function AttendanceChart() {
    return <Line options={options} data={data} />;
}