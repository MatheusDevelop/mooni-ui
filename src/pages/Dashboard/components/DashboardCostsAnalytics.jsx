import { useTheme } from '@emotion/react';
import React from 'react';
import { LineChart, Line, YAxis, XAxis, CartesianAxis, CartesianGrid, ResponsiveContainer, AreaChart, Area, PieChart, Pie, Cell } from 'recharts';
export const COSTS_COLORS = [{ c: '#F6AD55', cost: "Food" }, { c: '#ED8936', cost: "Subscriptions" }, { c: '#DD6B20', cost: "Debts" }, { c: '#C05621', cost: "Investments" }];
export function DashboardCostsAnalytics() {
    const data = [
        {
            name: '1º w',
            pv: 100,
        },
        {
            name: '1º w',
            pv: 600,
        },
        {
            name: '1º w',
            pv: 600,
        },
        {
            name: '1º w',
            pv: 600,
        },
    ];
    return (
        <ResponsiveContainer width={"100%"} height={150}>
            <PieChart width={730} height={250}>
                <Pie data={data} dataKey="pv" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={70} fill="#8884d8">
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COSTS_COLORS[index % COSTS_COLORS.length].c} />
                    ))}
                </Pie>
            </PieChart>
        </ResponsiveContainer>
    )
}