import { Box, Divider, Text, Flex, Input, Textarea, InputGroup, Switch, RadioGroup, Stack, Radio, Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel, Button, InputLeftAddon, InputLeftElement } from '@chakra-ui/react';
import React from 'react';
import { useState } from 'react';
import { TransactionCategoriesSelect } from './TransactionCategoriesSelect';
import { useUserStore } from '../../../stores/user';
import { MdSave } from 'react-icons/md';
import { FiPlus, FiSave } from 'react-icons/fi';
import { presets, useMask } from "mask-hooks";
import { SingleDatepicker } from '../../../sharedComponents/ChakraDatePicker';
import createTransaction from '../../../services/transactions/createTransaction';

export function CreateNewTransactionDrawerContent({ closeDrawer, onCreate }) {
    const userId = useUserStore(s => s.id);
    const currencyMask = useMask(presets.CURRENCY_COMMA);

    const [transaction, setTransaction] = useState({
        name: "",
        type: 0,
        amount: "",
        date: new Date(),
        paid: true,
        categoryId: null,
        asOverdueDate: false,
        amountCurrency: "R$",
        description: "",
        userId
    });
    const handleCreateClick = async () => {
        await createTransaction(transaction)
        onCreate();
        closeDrawer();
    }
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
                value={transaction.name}
                onChange={e => setTransaction(s => ({ ...s, name: e.target.value }))}
                autoComplete="none"
                placeholder='Untitled' />
            <Box padding={2} mt={5}>
                <RadioGroup
                    defaultValue={transaction.type.toString()}
                    mb={5}
                    onChange={e => setTransaction(s => ({ ...s, type: +e }))}
                >
                    <Stack spacing={5} direction='row'>
                        <Radio colorScheme='blue' value={'0'}>
                            Expense
                        </Radio>
                        <Radio colorScheme='blue' value={'1'}>
                            Income
                        </Radio>
                        {/* <Radio colorScheme='blue' value={'3'}>
                            Goal investment
                        </Radio> */}
                    </Stack>
                </RadioGroup>
                <Divider mb={5} />
                <Flex alignItems={"center"} justifyContent={"space-between"}>
                    <Text fontSize="sm" color="gray.400" fontWeight={"medium"} mr={10}>
                        Amount
                    </Text>
                    <InputGroup justifyContent={"flex-end"} width="250px" size="sm">
                        <InputLeftElement
                            pointerEvents='none'
                            color='gray.400'
                            mt={.4}
                            fontSize='.8em'
                            children={transaction.amountCurrency}
                        />
                        <Input
                            autoComplete="none"
                            value={transaction.amount}
                            onChange={e => setTransaction(s => ({ ...s, amount: currencyMask(e.target.value) }))}
                            placeholder='Enter amount' variant="filled" width="250px" size="sm" />
                    </InputGroup>
                </Flex>

                <Flex alignItems={"center"} justifyContent={"space-between"} mt={2} zIndex={999}>
                    <Text fontSize="sm" color="gray.400" fontWeight={"medium"} mr={10}>
                        Category
                    </Text>
                    <div style={{ width: "250px" }}>
                        <TransactionCategoriesSelect categoryId={transaction.categoryId} setCategoryId={id => setTransaction(s => ({ ...s, categoryId: id }))} />
                    </div>

                </Flex>
                <Flex alignItems={"center"} justifyContent={"space-between"} mt={2}>
                    <Text fontSize="sm" color="gray.400" fontWeight={"medium"} mr={10}>
                        Date
                    </Text>
                    <div style={{ width: 250 }}
                    >
                        <SingleDatepicker
                            propsConfigs={{
                                dateNavBtnProps: {
                                    size: "sm",
                                },
                                dayOfMonthBtnProps: {
                                    defaultBtnProps: {
                                        fontWeight: "400",
                                        _hover: {
                                            background: 'gray.100',
                                        }
                                    },
                                    selectedBtnProps: {
                                        background: "blue.500",
                                        color: "white!important"
                                    },
                                },
                                inputProps: {
                                    size: "sm",
                                    variant: "filled"
                                },
                            }}
                            date={transaction.date}
                            onDateChange={d => setTransaction(s => ({ ...s, date: d }))}
                            configs={{
                                dateFormat: 'dd/MM/yyyy',
                                dayNames: 'STQQSSD'.split(''), // length of 7
                            }}
                        />
                        {/* <Input
                            autoComplete="none"
                            placeholder='Enter date' variant="filled" width="250px" size="sm"
                        /> */}
                    </div>
                </Flex>
                {/* <Flex alignItems={"center"} justifyContent={"start "} mt={2}>
                    <Text fontSize="sm" color="gray.400" fontWeight={"medium"} mr={10} width={"160px"}>
                        Set as overdue date
                    </Text>
                    <Box>
                        <Switch
                            isChecked={transaction.asOverdueDate} onChange={() => setTransaction(s => ({ ...s, asOverdueDate: !s.asOverdueDate }))}
                        />
                    </Box>
                </Flex> */}
                <Flex alignItems={"center"} justifyContent={"start "} mt={2}>
                    <Text fontSize="sm" color="gray.400" fontWeight={"medium"} mr={10} width={"160px"}>
                        Mark as paid
                    </Text>
                    <Box>
                        <Switch
                            isChecked={transaction.paid} onChange={() => setTransaction(s => ({ ...s, paid: !s.paid }))}
                        />
                    </Box>
                </Flex>
                {/* <Flex alignItems={"center"} justifyContent={"start "} mt={2}>
                    <Text fontSize="sm" color="gray.400" fontWeight={"medium"} mr={10} width={"160px"}>
                        Include time
                    </Text>
                    <Box>
                        <Switch />
                    </Box>
                </Flex> */}
                {/* <Flex alignItems={"center"} justifyContent={"start "} mt={2}>
                    <Text fontSize="sm" color="gray.400" fontWeight={"medium"} mr={10} width={"160px"}>
                        Mark as paid
                    </Text>
                    <Box>
                        <Switch isChecked={transaction.paid} onChange={() => setTransaction(s => ({ ...s, paid: !s.paid }))} />
                    </Box>
                </Flex> */}
                {/* <Accordion allowToggle mt={5}>
                    <AccordionItem>
                        <AccordionButton>
                            <Box as="span" flex='1' textAlign='left'>
                                Recurrence options
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel pb={4}>


                            <Flex alignItems={"center"} justifyContent={"start "} mt={2}>
                                <Text fontSize="sm" color="gray.400" fontWeight={"medium"} mr={10} width={"180px"}>
                                    Set as recurring payment
                                </Text>
                                <Box>
                                    <Switch />
                                </Box>
                            </Flex>
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion> */}
                <Textarea
                    mt={5}
                    placeholder='Describe this transaction'
                    size='sm'
                    variant={"filled"}
                    resize={"none"}
                    value={transaction.description}
                    onChange={e => setTransaction(s => ({ ...s, description: e.target.value }))}
                />
                <Flex justifyContent={"flex-end"}>

                    <Button mt={5}
                        colorScheme='blue'
                        fontWeight={"400"}
                        leftIcon={<FiPlus />}
                        isDisabled={transaction.name.length == 0 || !transaction.categoryId || transaction.amount.length == 0}
                        onClick={handleCreateClick}
                    >
                        Create
                    </Button>
                </Flex>

            </Box>
        </>

    );
}
