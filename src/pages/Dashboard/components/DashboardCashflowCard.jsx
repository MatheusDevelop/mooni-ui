import { Box, Card, CardBody, CardHeader, Divider, Flex, GridItem, List, ListItem, Progress, SlideFade, Spinner, Square, Text, useTheme } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { FiBarChart2, FiLayers } from "react-icons/fi";
import { DashboardCostsAnalytics } from './DashboardCostsAnalytics';
import getCosts from '../../../services/analytics/getCosts';
import { CategoryTagIcon } from '../../../sharedComponents/CategoryTag';
import DashboardCashflowAnalytics from './DashboardCashflowAnalytics';
import getCashflow from '../../../services/analytics/getCashflow';

export function DashboardCashflowCard() {
    const [cashflowChartData, setCashflowChartData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [year, setYear] = useState(2023);
    const [month, setMonth] = useState(4);
    useEffect(() => {
        getData()
    }, [year, month]);

    const getData = async () => {
        setLoading(true)
        const data = await getCashflow(year, month)
        setCashflowChartData(data.chartData.map(({ xAxis, yAxis, metadata }) => ({ name: xAxis, value: yAxis, income: metadata[0], expense: metadata[1] })))
        setLoading(false)
    }
    return (
        <GridItem rowSpan={2} colSpan={4} as={Card} variant={"outline"}>
            <CardHeader>
                <SlideFade in={true}>
                    <Flex alignItems={"center"}>
                        <Square color="gray.500" mr={4}>
                            <FiBarChart2 />
                        </Square>
                        <Text color="gray.500" fontSize='1xl'>
                            Cashflow
                        </Text>
                    </Flex>
                </SlideFade>

            </CardHeader>
            <Box sx={{ position: "relative" }}>
                <SlideFade in={loading} offsety={0} offsetX={0} style={{ position: "absolute", width: "100%", height: '100%' }} >
                    <Flex sx={{ height: "100%", width: "100%" }} alignItems="center" justifyContent="center">
                        <Spinner color='orange' size="lg" />
                    </Flex>
                </SlideFade>
                <SlideFade in={!loading} offsetY={0} >
                    <Flex mr={10} ml={2}>
                        <DashboardCashflowAnalytics data={cashflowChartData} />
                    </Flex>
                </SlideFade>
            </Box>
        </GridItem>
    )
}
