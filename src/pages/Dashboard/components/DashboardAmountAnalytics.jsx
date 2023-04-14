import { Card, Tag, TagLabel, Text } from '@chakra-ui/react';
import { useTheme } from '@emotion/react';
import React, { useEffect } from 'react';
import { LineChart, Line, YAxis, XAxis, CartesianAxis, CartesianGrid, ResponsiveContainer, AreaChart, Area, Tooltip } from 'recharts';
export function DashboardAmontflowAnalytics({ data, id }) {
    const el = document.getElementById(id)
    console.log(el.clientWidth, el)
    return (
        <ResponsiveContainer width={"100%"} height={el.clientHeight - 30} >
            <AreaChart data={data} >
                <defs>
                    <linearGradient id="g384" gradientUnits="userSpaceOnUse" x1="20%" y1="10%" x2="100%" y2="0%">
                        <stop stop-color="#FFFFFF20" offset="0" /><stop stopColor="#DD6B2020" offset="1" />
                    </linearGradient>
                </defs>
                <Tooltip content={<CustomTooltip />} position={{ x: -el.clientWidth + 315, y: el.clientHeight - 70 }} wrapperStyle={{ outline: "none" }} />
                <Area
                    id="chartX"
                    key={"chartX"}
                    isAnimationActive={true}
                    dataKey="value" stroke="url(#colorUv)" fill="url(#g384)" />
            </AreaChart >
        </ResponsiveContainer>
    )
}
const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <Tag size="md">
                <TagLabel color="gray.600" fontWeight={400}>{`Day ${label + 1} `}<span style={{ fontWeight: 500 }}>R${payload[0].value}</span></TagLabel>
            </Tag>
        );
    }

    return null;
};