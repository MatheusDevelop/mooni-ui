import { Avatar, Box, Flex, IconButton, Text, Grid, GridItem, Card, CardBody, CardHeader, Tag, TagLabel, Square, CircularProgress, CircularProgressLabel, Icon, List, ListItem, Divider, ListIcon, Progress } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { FiArrowLeft, FiArrowRight, FiBell, FiCalendar, FiCheckCircle, FiChevronDown, FiCreditCard, FiExternalLink, FiPlus } from "react-icons/fi";
import { FaSpotify } from "react-icons/fA";
import { RiNetflixFill } from "react-icons/ri";
import { SiPrime } from "react-icons/si";
import GoalCard from '../../Goals/components/GoalCard';
import getNextOverdues from '../../../services/analytics/getNextOverdues';
import { format } from 'date-fns';
import { formatNumberToCurrency } from './formatNumberToCurrency';

export function DashboardRightSide() {
    const [nextOverdues, setNextOverdues] = useState([]);
    const getOverdues = async () => {
        const currDate = new Date();
        const data = await getNextOverdues(currDate.getFullYear(), currDate.getMonth() + 1, currDate.getDate())
        setNextOverdues(data)
    }
    useEffect(() => {
        getOverdues()
    }, []);
    return (
        <Flex flex="1">
            <Box display={"flex"} flexDir="column" background="whiteAlpha.900" pt={"80px"} zIndex={'901'} position="fixed" right="0px" height="100%" width={340}>
                <Divider orientation='vertical' position={"fixed"} top="0px" />
                <Grid
                    padding={4}
                    h={'100%'}
                    mt={1}
                    templateRows='repeat(3, 1fr)'
                    templateColumns='repeat(1, 1fr)' gap={5}
                >
                    {/* <GoalCard
                        dashboardCard
                        sm
                        rowSpan={1}
                        colSpan={1}
                        valueCompleted={"3.000,00"}
                        totalValue={"12.000,00"}
                        percentCompleted={30}
                        name={"Kawasaki Ninja 2012"}
                        imgUrl="https://content2.kawasaki.com/ContentStorage/KMB/ProductTopFeature/1073/89a5ca31-5482-408a-979d-61412c3f9b88.jpg?w=400"
                    /> */}
                    <GridItem rowSpan={3} colSpan={1} as={Card} variant={"outline"}>
                        <CardHeader>
                            <Flex alignItems={"center"}>
                                <Square color="gray.500" mr={4} >
                                    <FiCalendar />
                                </Square>
                                <Text color="gray.500" fontSize='1xl'>
                                    Next week overdues
                                </Text>
                            </Flex>
                        </CardHeader>
                        <CardBody>
                            <List spacing={3}>
                                {
                                    nextOverdues.map(c => (
                                        <>
                                            <ListItem>
                                                <Flex alignItems={"center"} justifyContent={"space-between"}>
                                                    <Flex alignItems={"center"}>
                                                        <Box>
                                                            <Text fontSize="md" fontWeight={"medium"} color="gray.600">
                                                                {c.name}
                                                            </Text>
                                                            <Text fontSize={"xs"} color="gray.400">
                                                                {format(new Date(c.date), 'dd/MM/yyyy')}

                                                            </Text>
                                                        </Box>
                                                    </Flex>
                                                    <Tag variant='subtle' colorScheme='gray' size="md">
                                                        <TagLabel>{c.amount.currency} {formatNumberToCurrency(c.amount.value)}</TagLabel>
                                                    </Tag>
                                                </Flex>
                                            </ListItem>
                                            <Divider />
                                        </>

                                    ))
                                }
                            </List>
                        </CardBody>
                    </GridItem>
                </Grid>
            </Box>
        </Flex>

    )
}
