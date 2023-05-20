import { useTheme } from '@chakra-ui/react';
import React from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
export function DashboardCostsAnalytics({ data }) {
    const theme = useTheme()
    return (
        <ResponsiveContainer width={"100%"} height={150}>
            <PieChart width={730} height={250}>
                <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={70} fill="#8884d8">
                    {data.map((i, index) => (
                        <Cell key={`cell-${index}`} fill={theme.colors[i.color][500]} />
                    ))}
                </Pie>
            </PieChart>
        </ResponsiveContainer>
    )
}