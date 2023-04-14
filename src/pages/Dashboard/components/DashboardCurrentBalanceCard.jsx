import { Box, Card, CardBody, CardHeader, Flex, GridItem, SlideFade, Square, Tag, TagLabel, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import getCurrentBalance from '../../../services/analytics/getCurrentBalance';
import { DashboardAmontflowAnalytics } from './DashboardAmountAnalytics';
import { FiCreditCard } from 'react-icons/fi';

export function DashboardCurrentBalanceCard() {
    const [currentBalance, setCurrentBalance] = useState("00,00");
    const [balanceChartData, setBalanceChartData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [year, setYear] = useState(2023);
    const [month, setMonth] = useState(4);
    useEffect(() => {
        getData()
    }, [year, month]);

    const getData = async () => {
        setLoading(true)
        const data = await getCurrentBalance(year, month)
        setCurrentBalance(data.currentBalance)
        setBalanceChartData(data.chartData.map(({ xAxis, yAxis }) => ({ name: xAxis, value: yAxis })))
        setLoading(false)
    }
    return (
        <GridItem rowSpan={1} colSpan={3} as={Card} variant={"outline"} id={"balanceCard"}>
            <CardHeader>
                <SlideFade in={true}>
                    <Flex alignItems={"center"} justifyContent={"space-between"}>
                        <Square color="gray.500">
                            <FiCreditCard />
                        </Square>
                        {/* <Tag variant='subtle' colorScheme='green' size="sm">
                            <TagLabel>+6.2%</TagLabel>
                        </Tag> */}
                    </Flex>
                </SlideFade>

            </CardHeader>
            <CardBody>
                <SlideFade in={true}>
                    <Text color="gray.500" fontSize='1xl' mt={2}>
                        Current balance
                    </Text>
                </SlideFade>
                <SlideFade in={!loading}>
                    <Flex alignItems={"end"}>
                        <Text color="gray.500" fontWeight="500" fontSize='3xl'>
                            {currentBalance}
                        </Text>
                        <Text color="gray.500" fontWeight="500" fontSize='1xl' pb={2.5} ml={2}>
                            R$
                        </Text>
                    </Flex>
                </SlideFade>
                <SlideFade in={true}>
                    <Box style={{ position: 'absolute', width: 300, right: 0, bottom: 0 }}>
                        {
                            !loading &&
                            <DashboardAmontflowAnalytics data={balanceChartData}  id={"balanceCard"} />
                        }
                    </Box>
                </SlideFade>

            </CardBody>
        </GridItem>
    )
}
