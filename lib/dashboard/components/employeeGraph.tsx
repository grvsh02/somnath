import React, {useEffect} from "react";
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

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: true,
            text: 'Chart.js Line Chart',
        },
    },
};

const EmployeeGraph = ({graphData}: any) => {

    console.log(graphData);

    const data = {
        labels: graphData?.labels,
        datasets: [
            {
                label: 'Hours Worked',
                data: graphData?.data,
                fill: true,
                borderColor: 'rgb(67 56 202)',
                backgroundColor: 'rgb(165 180 252)',
            },
        ],
    }

    return (
        <Line
            options={options}
            data={data}
        />
    )
}

export default EmployeeGraph;