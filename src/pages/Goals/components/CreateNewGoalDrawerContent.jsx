import { Box, Divider, Text, Flex, Input, Textarea, Select, InputGroup, Switch, RadioGroup, Stack, Radio, Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel } from '@chakra-ui/react';
import React from 'react';

export function CreateNewGoalDrawerContent() {
    return (
        <>
            <Input
                variant='unstyled'
                fontSize="4xl"
                autoFocus
                fontWeight={"medium"}
                _placeholder={{
                    fontWeight: "regular",
                    opacity: .6
                }}
                autoComplete="none"
                placeholder='Untitled' />
            <Box padding={2} mt={5}>

                <Divider mb={5} />
                <Flex alignItems={"center"} justifyContent={"start "} mt={2}>
                    <Text fontSize="sm" color="gray.400" fontWeight={"medium"} mr={10} width={"160px"}>
                        As recurring amount
                    </Text>
                    <Box>
                        <Switch />
                    </Box>
                </Flex>
                <Flex alignItems={"center"} justifyContent={"space-between"} mt={2}>
                    <Text fontSize="sm" color="gray.400" fontWeight={"medium"} mr={10} width="190px">
                        Total amount
                    </Text>
                    <InputGroup justifyContent={"flex-end"}>
                        <Input
                            autoComplete="none"
                            placeholder='Enter total amount' variant="filled" width="250px" size="sm" />
                    </InputGroup>
                </Flex>
                <Flex alignItems={"center"} justifyContent={"space-between"} mt={2}>
                    <Text fontSize="sm" color="gray.400" fontWeight={"medium"} mr={10} width="190px">
                        Current amount
                    </Text>
                    <InputGroup justifyContent={"flex-end"}>
                        <Input
                            autoComplete="none"
                            placeholder='Enter current amount' variant="filled" width="250px" size="sm" />
                    </InputGroup>
                </Flex>
                <Flex alignItems={"center"} justifyContent={"space-between"} mt={2}>
                    <Text fontSize="sm" color="gray.400" fontWeight={"medium"} mr={10}>
                        Category
                    </Text>
                    <Select
                        autoComplete="none"
                        placeholder='Select an category'
                        variant='filled'
                        size="sm" width="250px">
                        <option value='option1'>Option 1</option>
                        <option value='option2'>Option 2</option>
                        <option value='option3'>Option 3</option>
                    </Select>
                </Flex>
                <Flex alignItems={"center"} justifyContent={"space-between"} mt={2}>
                    <Text fontSize="sm" color="gray.400" fontWeight={"medium"} mr={10} width="190px">
                        Estimated date
                    </Text>
                    <InputGroup justifyContent={"flex-end"}>
                        <Input
                            autoComplete="none"
                            placeholder='Enter date' variant="filled" width="250px" size="sm" />
                    </InputGroup>
                </Flex>
                <Accordion allowToggle mt={5}>
                    <AccordionItem>
                        <AccordionButton>
                            <Box as="span" flex='1' textAlign='left'>
                                Advanced options
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel pb={4}>
                            <Flex alignItems={"center"} justifyContent={"start "} mt={2}>
                                <Text fontSize="sm" color="gray.400" fontWeight={"medium"} mr={10} width={"180px"}>
                                    Set recurring deposit
                                </Text>
                                <Box>
                                    <Switch />
                                </Box>
                            </Flex>
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
                <Textarea
                    mt={5}
                    placeholder='Describe this goal'
                    size='sm'
                    variant={"filled"}
                    resize={"none"} />

            </Box>
        </>

    );
}
