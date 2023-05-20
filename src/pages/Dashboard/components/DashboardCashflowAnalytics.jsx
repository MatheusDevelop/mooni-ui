import { Card, Flex, Tag, TagLabel, Text, useTheme } from '@chakra-ui/react';
import React from 'react';
import { LineChart, Line, YAxis, XAxis, CartesianAxis, CartesianGrid, ResponsiveContainer, ComposedChart, Area, Tooltip } from 'recharts';
function DashboardCashflowAnalytics({ data }) {
    const theme = useTheme();
    return (

        <ResponsiveContainer width={"100%"} height={300}>
            <ComposedChart data={data}>
                <defs>
                    <linearGradient id="colorUv" x1="1" y1="1" x2="0" y2="0">
                        <stop offset="50%" stopColor={theme.colors.orange[300]} />
                        <stop offset="95%" stopColor={theme.colors.orange[500]} />
                    </linearGradient>
                    <linearGradient id="redGrad" x1="1" y1="1" x2="0" y2="0">
                        <stop offset="50%" stopColor={theme.colors.red[100]} />
                        <stop offset="95%" stopColor={theme.colors.red[500]} />
                    </linearGradient>
                    <linearGradient id="greenGrad" x1="1" y1="1" x2="0" y2="0">
                        <stop offset="50%" stopColor={theme.colors.teal[100]} />
                        <stop offset="95%" stopColor={theme.colors.teal[500]} />
                    </linearGradient>
                </defs>
                <CartesianGrid strokeOpacity={.6} strokeDasharray="3 3" vertical={false} />
                <XAxis strokeOpacity={0} dataKey="name" tick={p => <CustomTickX {...p} />} interval={0} padding={{ right: 15 }} />
                <YAxis strokeOpacity={0} tick={p => <CustomTickY {...p} />} />

                <Area
                    display={"none"}
                    dot={{ display: "none" }}
                    dataKey="income"
                    stroke={"url(#greenGrad)"}
                    fill={"url(#greenGrad)"}
                    strokeWidth={3} />
                <Area
                    display={"none"}
                    dot={{ display: "none" }}
                    dataKey="expense"
                    stroke={"url(#redGrad)"}
                    fill={"url(#redGrad)"}
                    strokeWidth={3}
                />
                <Tooltip content={<CustomTooltip />} wrapperStyle={{ outline: "none" }} />
                <Line
                    dot={{ display: "none" }}
                    dataKey="value"
                    stroke="url(#colorUv)"
                    strokeWidth={3} />
            </ComposedChart >
        </ResponsiveContainer>
    )
}
const CustomTickY = ({ payload, x, y }) => (
    <g transform={`translate(${x},${y - 15})`}>
        <text x={0} y={0} dy={16} textAnchor="end" fill="#666" style={{ fontSize: 12, opacity: .9 }}>
            R${formatNumberToCurrency(payload.value)}
        </text>
    </g>
)
const Months = ["Jan", "Feb", "Mar", "Apr", "Mai", "Jun", "Jul", "Ago", "Sep", "Out", "Nov", "Dec"]
const MonthsComplete = ["January", "February", "March", "April", "May", "June", "July", "Agost", "September", "Outubre", "November", "December"]

const CustomTickX = ({ payload, x, y }) => (
    <g transform={`translate(${x},${y + 15})`}>
        <text x={0} y={0} textAnchor="end" fill="#666" style={{ fontSize: 12, opacity: .9 }}>
            {Months[+payload.value - 1]}
        </text>
    </g>
)
const CustomTooltip = ({ active, payload, label }) => {
    console.log(payload)
    if (active && payload && payload.length) {
        return (
            <Card p={2} sx={{width:150}}>
                <Text color="gray.800" fontSize={"xs"} fontWeight={500} mb={2}>{`${MonthsComplete[+label - 1]} `}</Text>
                <Flex alignItems={"center"} justifyContent={"space-between"}>
                    <Text color="gray.600" fontSize={"xs"} fontWeight={400}>Balance</Text>
                    <Text color="gray.800" fontSize={"xs"} style={{ fontWeight: 500, marginLeft: 15 }}>R${payload[2].value}</Text>
                </Flex>
                <Flex alignItems={"center"} justifyContent={"space-between"}>
                    <Text color="gray.600" fontSize={"xs"} fontWeight={400}>Income</Text>
                    <Text color="gray.800" fontSize={"xs"} style={{ fontWeight: 500, marginLeft: 15 }}>R${payload[0].value}</Text>
                </Flex>
                <Flex alignItems={"center"} justifyContent={"space-between"}>
                    <Text color="gray.600" fontSize={"xs"} fontWeight={400}>Expense</Text>
                    <Text color="gray.800" fontSize={"xs"} style={{ fontWeight: 500, marginLeft: 15 }}>R${payload[1].value}</Text>
                </Flex>
            </Card>
        );
    }

    return null;
};
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
    return numberString
}