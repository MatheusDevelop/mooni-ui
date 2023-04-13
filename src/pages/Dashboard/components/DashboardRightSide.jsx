import { Avatar, Box, Flex, IconButton, Text, Grid, GridItem, Card, CardBody, CardHeader, Tag, TagLabel, Square, CircularProgress, CircularProgressLabel, Icon, List, ListItem, Divider, ListIcon, Progress } from '@chakra-ui/react';
import React from 'react';
import { FiArrowLeft, FiArrowRight, FiBell, FiCalendar, FiCheckCircle, FiChevronDown, FiCreditCard, FiExternalLink, FiPlus } from "react-icons/fi";
import { FaSpotify } from "react-icons/fA";
import { RiNetflixFill } from "react-icons/ri";
import { SiPrime } from "react-icons/si";
import GoalCard from '../../Goals/components/GoalCard';

export function DashboardRightSide() {
    return (
        <Flex flex="1">
            <Box display={"flex"} flexDir="column" background="white" pt={"80px"} zIndex={'901'} position="fixed" right="0px" height="100%">
                <Divider orientation='vertical' position={"fixed"} top="0px" />
                <Grid
                    padding={4}
                    h={'100%'}
                    mt={1}
                    templateRows='repeat(3, 1fr)'
                    templateColumns='repeat(1, 1fr)' gap={5}
                >
                    <GoalCard
                        dashboardCard
                        sm
                        rowSpan={1}
                        colSpan={1}
                        valueCompleted={"3.000,00"}
                        totalValue={"12.000,00"}
                        percentCompleted={30}
                        name={"Kawasaki Ninja 2012"}
                        imgUrl="https://content2.kawasaki.com/ContentStorage/KMB/ProductTopFeature/1073/89a5ca31-5482-408a-979d-61412c3f9b88.jpg?w=400"
                    />
                    <GridItem rowSpan={2} colSpan={1} as={Card} variant={"outline"}>
                        <CardHeader>
                            <Flex alignItems={"center"}>
                                <Square color="gray.500" mr={4} >
                                    <FiCalendar />
                                </Square>
                                <Text color="gray.500" fontSize='1xl'>
                                    Next overdues
                                </Text>
                            </Flex>
                        </CardHeader>
                        <CardBody>
                            <List spacing={3}>
                                {
                                    [
                                        { icon: <FaSpotify size={18} color="green" />, squareFill: "green.100", name: "Spotify", date: "Apr 10 at 19:20h", price: "40,06" },
                                        { icon: <RiNetflixFill size={18} color="red" />, squareFill: "red.100", name: "Netflix", date: "Apr 25 at 17:30h", price: "25,50" },
                                        { icon: <SiPrime size={18} color="blue" />, squareFill: "blue.100", name: "Amazon prime vi...", date: "Apr 30 at 18:00h", price: "25,80" },
                                    ].map(c => (
                                        <>
                                            <ListItem>
                                                <Flex alignItems={"center"} justifyContent={"space-between"}>
                                                    <Flex alignItems={"center"}>
                                                        <Square bg={c.squareFill} padding={2} borderRadius={"md"}>
                                                            {c.icon}
                                                        </Square>
                                                        <Box>
                                                            <Text fontSize="md" fontWeight={"medium"} ml={4} color="gray.600">
                                                                {c.name}
                                                            </Text>
                                                            <Text fontSize={"xs"} ml={4} color="gray.400">
                                                                {c.date}
                                                            </Text>
                                                        </Box>
                                                    </Flex>
                                                    <Tag variant='subtle' colorScheme='gray' size="md">
                                                        <TagLabel>R$ {c.price}</TagLabel>
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
