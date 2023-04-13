import { useTheme } from '@emotion/react';
import React from 'react';
import { LineChart, Line, YAxis, XAxis, CartesianAxis, CartesianGrid, ResponsiveContainer, AreaChart, Area } from 'recharts';
export function DashboardAmontflowAnalytics() {
    const data = [
        {
            name: '1º w',
            uv: 100,
            pv: 100,
        },
        {
            name: "2º w",
            uv: 200,
            pv: 400,
        },
        {
            name: "3º w",
            uv: 300,
            pv: 500,
        },
        {
            name: "4º w",
            uv: 100,
            pv: 200,
        },
    ];
    return (
        <ResponsiveContainer width={"100%"} height={150}>
            <AreaChart data={data}>
                <defs>
                    <linearGradient id="g384" gradientUnits="userSpaceOnUse" x1="20%" y1="10%" x2="100%" y2="0%">
                        <stop stop-color="#FFFFFF20" offset="0" /><stop stop-color="#DD6B2020" offset="1" />
                    </linearGradient>
                </defs>
                <Area
                    dataKey="pv" stroke="url(#colorUv)" fill="url(#g384)" />
            </AreaChart >
        </ResponsiveContainer>
    )
}