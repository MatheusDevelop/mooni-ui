import { Avatar, Box, Divider, Flex, IconButton, Input, InputGroup, InputLeftElement, Text, useColorMode } from '@chakra-ui/react';
import React from 'react';
import { FiBell, FiChevronDown, FiPlus, FiSearch } from "react-icons/fi";
import { useUserStore } from '../../../stores/user';

export function DashboardHeader() {
    const { firstName, avatarUrl } = useUserStore(s => s)
    return (
        <>
            <Box position="fixed" top="0" left="0" width="100%" background="whiteAlpha.600">
                <Flex padding={5} paddingLeft="220px" alignItems={"center"} justifyContent={"space-between"}>
                    <Box>
                        <InputGroup
                            size="md"
                        >
                            <Input
                                autoComplete='none'
                                pl={"3em"}
                                placeholder='Looking for something?'
                                _placeholder={{ fontSize: '12px' }}
                                focusBorderColor='orange.400'
                                variant="filled"
                                sx={{ width: 450 }} />
                            <InputLeftElement pointerEvents={'none'} children={<FiSearch size={18} />} />
                        </InputGroup>
                    </Box>
                </Flex>
                <Divider />
            </Box>
            <Box zIndex={'905'} position="fixed" right="15px" top="20px">
                <Flex alignItems="center" justifyContent={"flex-end"}>
                    <IconButton colorScheme='blue' aria-label='Search database' icon={<FiPlus />} size="sm" mr={2} />
                    <IconButton aria-label='Search database' icon={<FiBell />} size="sm" mr={4} />
                    <Flex alignItems={"center"} cursor={"pointer"} color="gray.500  " _hover={{ color: "gray.900" }} borderRadius={"md"} p={1}>
                        <Flex pr={4}>
                            <Text fontWeight={"400"} fontSize={"small"} pr={1}>
                                Hello,
                            </Text>
                            <Text fontWeight={"500"} fontSize={"small"}>
                                {firstName}.
                            </Text>
                        </Flex>
                        <Avatar name='Dan Abrahmov' size="sm" src={avatarUrl} />
                        <Box ml={2}>
                            <FiChevronDown size={18} />
                        </Box>
                    </Flex>
                </Flex>
            </Box>
        </>
    );
}
