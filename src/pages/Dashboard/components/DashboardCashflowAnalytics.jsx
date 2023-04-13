import { useTheme } from '@emotion/react';
import React from 'react';
import { LineChart, Line, YAxis, XAxis, CartesianAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
function DashboardCashflowAnalytics() {
    const data = [
        {
            name: 'Jan',
            uv: 2000,
            pv: 2000,
            amt: 2000,
        },
        {
            name: 'Feb',
            uv: 1000,
            pv: 500,
            amt: 500,
        },
        {
            name: 'Mar',
            uv: 1000,
            pv: 500,
            amt: 500,
        },
        {
            name: 'Apr',
            uv: 1000,
            pv: 500,
            amt: 500,
        },
    ];
    return (

        <ResponsiveContainer width={"100%"} height={300}>
            <LineChart data={data}>
                <defs>
                    <linearGradient id="colorUv" x1="1" y1="1" x2="0" y2="0">
                        <stop offset="50%" stopColor="#DD6B20" />
                        <stop offset="95%" stopColor="#F6AD55" />
                    </linearGradient>
                </defs>
                <CartesianGrid strokeOpacity={.6} strokeDasharray="3 3" />
                <XAxis strokeOpacity={0} dataKey="name" tick={{ fontSize: 12, opacity: .8 }}/>
                <YAxis strokeOpacity={0} tick={p => <CustomTickY {...p} />} />
                <Line
                    style={{
                        filter: "drop-shadow(0px 0px 6px #F6AD55 )"
                    }}
                    dot={{ stroke: '#F6AD55' }} dataKey="uv" stroke="url(#colorUv)" strokeWidth={3} />
            </LineChart >
        </ResponsiveContainer>
    )
}
const CustomTickY = ({ payload, x, y }) => (
    <g transform={`translate(${x},${y - 15})`}>
        <text x={0} y={0} dy={16} textAnchor="end" fill="#666" style={{ fontSize: 12, opacity: .9 }}>
            {formatNumberToCurrency(payload.value)}
        </text>
    </g>
)

export default DashboardCashflowAnalytics;
function formatNumberToCurrency(number) {
    if (Number.isNaN(number))
        return "Invalid number"
    var numberString = number.toString().replace(",", ".");
    if (numberString.indexOf(".") !== -1) {
        var parts = numberString.split(".");
        var integerPart = parts[0];
        var decimalPart = parts[1];

        integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

        numberString = integerPart + "." + decimalPart;
    } else {
        numberString = numberString.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    return number >= 1000 ? numberString + "k" : numberString;
}