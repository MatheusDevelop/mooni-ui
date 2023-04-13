import { Box, Card, CardBody, CardHeader, Divider, Flex, Grid, GridItem, List, ListItem, Square, Tag, TagLabel, Text } from '@chakra-ui/react';
import React from 'react';
import { FiArrowDownCircle, FiBarChart2, FiCreditCard, FiLayers } from "react-icons/fi";
import DashboardCashflowAnalytics from './DashboardCashflowAnalytics';
import { DashboardAmontflowAnalytics } from './DashboardAmountAnalytics';
import { DashboardExpensesflowAnalytics } from './DashboardExpensesAnalytics';
import { COSTS_COLORS, DashboardCostsAnalytics } from './DashboardCostsAnalytics';

export function DashboardAnalytics() {
    return (
        <Box p={5} sx={{ flex: 1 }}>
            <Grid
                h={'100%'}
                templateRows='repeat(3, 1fr)'
                templateColumns='repeat(6, 1fr)' gap={5}
            >
                <GridItem rowSpan={1} colSpan={3} as={Card} variant={"outline"}>
                    <CardHeader>
                        <Flex alignItems={"center"} justifyContent={"space-between"}>
                            <Square color="gray.500">
                                <FiCreditCard />
                            </Square>
                            <Tag variant='subtle' colorScheme='green' size="sm">
                                <TagLabel>+6.2%</TagLabel>
                            </Tag>
                        </Flex>

                    </CardHeader>
                    <CardBody>
                        <Text color="gray.500" fontSize='1xl' mt={2}>
                            Current balance
                        </Text>
                        <Flex alignItems={"end"}>
                            <Text color="gray.500" fontWeight="500" fontSize='3xl'>
                                2.000,30
                            </Text>
                            <Text color="gray.500" fontWeight="500" fontSize='1xl' pb={2.5} ml={2}>
                                R$
                            </Text>
                            <Box style={{ position: 'absolute', width: 300, right: 0, bottom: 0 }}>
                                <DashboardAmontflowAnalytics />
                            </Box>
                        </Flex>
                    </CardBody>
                </GridItem>
                <GridItem rowSpan={1} colSpan={3} as={Card} variant={"outline"}>
                    <CardHeader>
                        <Flex alignItems={"center"} justifyContent={"space-between"}>
                            <Square color="gray.500">
                                <FiArrowDownCircle />
                            </Square>
                            <Tag variant='subtle' colorScheme='red' size="sm">
                                <TagLabel>+2.0%</TagLabel>
                            </Tag>
                        </Flex>

                    </CardHeader>
                    <CardBody>
                        <Text color="gray.500" fontSize='1xl' mt={2}>
                            Expenses
                        </Text>
                        <Flex alignItems={"end"}>
                            <Flex alignItems={"end"} marginRight={5}>
                                <Text color="gray.500" fontWeight="500" fontSize='3xl'>
                                    5.750,30
                                </Text>
                                <Text color="gray.500" fontWeight="500" fontSize='1xl' pb={2.5} ml={2}>
                                    R$
                                </Text>
                            </Flex>
                            <Box style={{ position: 'absolute', width: 300, right: 0, bottom: 0 }}>
                                <DashboardExpensesflowAnalytics />
                            </Box>
                        </Flex>

                    </CardBody>
                </GridItem>
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
