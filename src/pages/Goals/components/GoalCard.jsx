import { Box, Card, CardBody, CardHeader, Flex, GridItem, IconButton, Progress, Square, Tag, TagLabel, Text } from '@chakra-ui/react';
import React from 'react';
import { FiArrowLeft, FiArrowRight, FiCheckCircle } from 'react-icons/fi';

function GoalCard({ imgUrl, rowSpan = 1, colSpan = 1, name, valueCompleted, totalValue, currency = "R$", percentCompleted, dashboardCard, sm }) {
    return (
        <GridItem
            rowSpan={rowSpan}
            colSpan={colSpan}
            as={Card}
            backgroundPosition="center"
            backgroundRepeat={"no-repeat"}
            backgroundSize={"cover"}
            backgroundImage={`url("${imgUrl}")`}
            boxShadow={"5px 5px 15px #dddddd"}
        >
            <Box
                style={{
                    backdropFilter: "blur(6px)",
                    position: "absolute", top: 0, right: 0, width: "100%", height: "100%",
                    display: dashboardCard ? "block" : "flex",
                    alignItems: dashboardCard ? "start" : "flex-end",
                    cursor: "pointer"
                }}
                transition=".2s all linear"
                _hover={{
                    backdropFilter: "blur(2px)!important",
                }}
                bg={"#71809680"}
                borderRadius="md"
            >
                {
                    dashboardCard &&
                    <CardHeader>
                        <Flex alignItems={"center"} justifyContent={"space-between"}>
                            <Flex alignItems={"center"}>
                                <Square color="white" mr={4} >
                                    <FiCheckCircle />
                                </Square>
                                <Text color="white" fontSize='1xl'>
                                    Goals
                                </Text>
                            </Flex>

                            <Tag variant='subtle' colorScheme='green' size="sm">
                                <TagLabel>+1.2% today</TagLabel>
                            </Tag>
                        </Flex>
                    </CardHeader>
                }
                <CardBody position="relative"
                    borderBottomRightRadius={"md"}
                    borderBottomLeftRadius={"md"}
                    style={{
                        background: "linear-gradient(180deg,#ffffff00,#393939)",
                        position: "absolute",
                        bottom: 0,
                        width: "100%"
                    }}>
                    <Flex alignItems="center" cursor={"pointer"}>
                        <Text color="whiteAlpha.900" fontSize={sm ? 'sm' : '2xl'} mt={2} mr={3} fontWeight="500">
                            {name}
                        </Text>
                    </Flex>
                    <Flex alignItems="end">
                        <Text color="whiteAlpha.800" fontSize='lg'>
                            {valueCompleted} {currency} /
                        </Text>
                        <Text color="whiteAlpha.600" fontSize='lg' ml={2}>
                            {totalValue} {currency}
                        </Text>
                    </Flex>
                    <Flex alignItems="center">
                        <Box flex="5">
                            <Progress value={percentCompleted} size='xs' colorScheme='blue' />
                        </Box>
                        <Box flex="1">
                            <Text color="white" fontWeight="500" fontSize='sm' ml={2}>
                                {percentCompleted}%
                            </Text>
                        </Box>
                    </Flex>
                    {
                        dashboardCard &&
                        <Flex alignItems="center" mt={2}>
                            <IconButton aria-label='Search database' colorScheme="white" icon={<FiArrowLeft />} size="sm" mr={2} />
                            <IconButton aria-label='Search database' colorScheme="white" icon={<FiArrowRight />} size="sm" mr={2} />
                        </Flex>
                    }

                </CardBody>
            </Box>
        </GridItem>
    )
}

export default GoalCard;