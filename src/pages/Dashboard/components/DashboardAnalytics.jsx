import { Box, Card, CardBody, CardHeader, Divider, Flex, Grid, GridItem, List, ListItem, Square, Text } from '@chakra-ui/react';
import React from 'react';
import { FiBarChart2, FiLayers } from "react-icons/fi";
import DashboardCashflowAnalytics from './DashboardCashflowAnalytics';
import { COSTS_COLORS, DashboardCostsAnalytics } from './DashboardCostsAnalytics';
import { DashboardCurrentBalanceCard } from './DashboardCurrentBalanceCard';
import { DashboardExpensesCard } from './DashboardExpensesCard';

export function DashboardAnalytics() {
    return (
        <Box p={5} sx={{ flex: 1 }}>
            <Grid
                h={'100%'}
                templateRows='repeat(3, 1fr)'
                templateColumns='repeat(6, 1fr)' gap={5}
            >
                <DashboardCurrentBalanceCard />
                <DashboardExpensesCard />
                <GridItem rowSpan={2} colSpan={4} as={Card} variant={"outline"}>
                    <CardHeader>
                        <Flex alignItems={"center"}>
                            <Square color="gray.500" mr={4}>
                                <FiBarChart2 />
                            </Square>
                            <Text color="gray.500" fontSize='1xl'>
                                Cash flow
                            </Text>
                        </Flex>
                    </CardHeader>
                    <Box mr={10}>

                        <DashboardCashflowAnalytics />
                    </Box>
                </GridItem>
                <GridItem rowSpan={2} colSpan={2} as={Card} variant={"outline"}>
                    <CardHeader>
                        <Flex alignItems={"center"}>
                            <Square color="gray.500" mr={4}>
                                <FiLayers />
                            </Square>
                            <Text color="gray.500" fontSize='1xl'>
                                Costs
                            </Text>
                        </Flex>
                    </CardHeader>
                    <CardBody>
                        <DashboardCostsAnalytics />
                        <Divider mt={15} />
                        <List spacing={3} mt={15}>
                            {COSTS_COLORS.map(c => (
                                <ListItem>
                                    <Flex alignItems={"center"}>
                                        <Box sx={{ width: 2, height: 2, backgroundColor: c.c, borderRadius: "50%" }}>
                                        </Box>
                                        <Text style={{ fontSize: 12 }} fontWeight={"medium"} ml={2} color="gray.600">
                                            {c.cost}
                                        </Text>
                                    </Flex>
                                </ListItem>
                            ))}
                        </List>
                    </CardBody>
                </GridItem>
            </Grid>
        </Box>
    );
}


