import { useTheme } from '@emotion/react';
import React from 'react';
import { LineChart, Line, YAxis, XAxis, CartesianAxis, CartesianGrid, ResponsiveContainer, AreaChart, Area } from 'recharts';
export function DashboardExpensesflowAnalytics() {
    const data = [
        {
            name: '1º w',
            pv: 200,
        },
        {
            name: "2º w",
            pv: 1000,
        },
        {
            name: "3º w",
            pv: 200,
        },
        {
            name: "4º w",
            pv: 300,
        },
    ];
    return (
        <ResponsiveContainer width={"100%"} height={150}>
            <AreaChart data={data}>
                <Area
                    dataKey="pv" stroke="url(#colorUv)" fill="url(#g384)" />
            </AreaChart >
        </ResponsiveContainer>
    )
}