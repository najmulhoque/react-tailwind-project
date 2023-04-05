import React from 'react';
import { LineChart, Area, AreaChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Dashbord = () => {
    const students = [
        {
            phy: 92,
            cham: 85,
            math: 77,
            value: 60,
            id: 0,
            name: "Alice"
        },
        {
            phy: 68,
            cham: 90,
            math: 78,
            value: 82,
            id: 1,
            name: "Bob"
        },
        {
            phy: 72,
            cham: 54,
            math: 89,
            value: 45,
            id: 2,
            name: "Charlie"
        },
        {
            phy: 85,
            cham: 90,
            math: 92,
            value: 95,
            id: 3,
            name: "David"
        },
        {
            phy: 75,
            cham: 80,
            math: 70,
            value: 65,
            id: 4,
            name: "Emily"
        },
        {
            phy: 90,
            cham: 80,
            math: 85,
            value: 75,
            id: 5,
            name: "Frank"
        },
        {
            phy: 85,
            cham: 60,
            math: 55,
            value: 60,
            id: 6,
            name: "Grace"
        },
        {
            phy: 70,
            cham: 80,
            math: 70,
            value: 80,
            id: 7,
            name: "Henry"
        },
        {
            phy: 90,
            cham: 92,
            math: 95,
            value: 88,
            id: 8,
            name: "Isabella"
        },
        {
            phy: 60,
            cham: 65,
            math: 70,
            value: 75,
            id: 9,
            name: "Jack"
        },
        {
            phy: 75,
            cham: 80,
            math: 85,
            value: 90,
            id: 10,
            name: "Kelly"
        },
        {
            phy: 85,
            cham: 85,
            math: 90,
            value: 95,
            id: 11,
            name: "Liam"
        },
    ];

    return (
        <div>
            <LineChart width={1000}
                height={300}
                data={students}>
                    <Line dataKey="phy"></Line>
                    <Line dataKey="cham"></Line>
                    <XAxis dataKey="name"></XAxis>
                    <YAxis></YAxis>
            </LineChart>
            <AreaChart width={1000} height={500} data={students}>
               <Area dataKey="math"></Area>
               
            </AreaChart>
        </div>
    );
};

export default Dashbord;