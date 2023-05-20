import { Box, Card, CardBody, CardHeader, Divider, Flex, GridItem, List, ListItem, Progress, SlideFade, Spinner, Square, Text, useTheme } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { FiCheckCircle, FiLayers } from "react-icons/fi";
import { DashboardCostsAnalytics } from './DashboardCostsAnalytics';
import getCosts from '../../../services/analytics/getCosts';
import { CategoryTagIcon } from '../../../sharedComponents/CategoryTag';

export function DashboardCostsCard() {
    const [costsChartData, setCostsChartData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [year, setYear] = useState(2023);
    const [month, setMonth] = useState(4);
    useEffect(() => {
        getData()
    }, [year, month]);

    const getData = async () => {
        setLoading(true)
        const data = await getCosts(year, month)
        setCostsChartData(data.chartData.map(({ xAxis, yAxis, metadata }) => ({ name: xAxis, value: yAxis, color: metadata[0], iconId: +metadata[1] })))
        setLoading(false)
    }
    const theme = useTheme();
    return (
        <GridItem rowSpan={2} colSpan={2} as={Card} variant={"outline"}>
            <CardHeader>
                <SlideFade in={true}>
                    <Flex alignItems={"center"}>
                        <Square color="gray.500" mr={4}>
                            <FiLayers />
                        </Square>
                        <Text color="gray.500" fontSize='1xl'>
                            Costs
                        </Text>
                    </Flex>
                </SlideFade>

            </CardHeader>
            <CardBody sx={{ position: "relative", display: "flex", flexDirection: "column" }}>
                {
                    costsChartData.length === 0 && !loading ?
                        <Flex alignItems={"center"} justifyContent={"center"} flex={1} >
                            <Square color="green.500" mr={4}>
                                <FiCheckCircle />
                            </Square>
                            <Text color="green.500" fontSize='1xl'>
                                You have no costs so far
                            </Text>
                        </Flex>
                        :
                        <>

                            <SlideFade in={!loading} offsetY={0}>
                                <DashboardCostsAnalytics data={costsChartData} />
                            </SlideFade>
                            <Divider mt={15} />
                            <SlideFade in={!loading}>
                                <List spacing={3} mt={15} sx={{ height: 120, overflowY: 'scroll' }}>
                                    {costsChartData.map(c => (
                                        <ListItem>
                                            <Flex alignItems={"center"} justifyContent="space-between">
                                                <Flex alignItems={"center"} style={{ width: 150 }}>
                                                    <Square bg={theme.colors[c.color][100]} color={c.color} padding={1.5} borderRadius={"md"}>
                                                        <CategoryTagIcon size={18} iconId={c.iconId} />
                                                    </Square>
                                                    <Text fontSize="sm" fontWeight={"500"} ml={2} color="gray.500" >
                                                        {c.name}
                                                    </Text>
                                                </Flex>
                                                <div style={{ width: 80 }}>
                                                    <Progress size='xs' colorScheme={c.color} value={c.value} />
                                                </div>
                                                <Text fontSize="sm" fontWeight={"500"} ml={2} color="gray.500" style={{ width: 50, textAlign: "right" }}>
                                                    {c.value}%
                                                </Text>

                                            </Flex>
                                        </ListItem>
                                    ))}
                                </List>
                            </SlideFade>
                        </>
                }
            </CardBody>
        </GridItem>
    )
}
