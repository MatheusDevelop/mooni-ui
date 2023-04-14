import { Box, Button, Collapse, Flex, IconButton, Input, InputGroup, InputLeftElement, Slide, SlideFade, Text, useDisclosure } from '@chakra-ui/react';
import React, { useCallback, useState } from 'react';
import { FiPlus, FiSearch } from 'react-icons/fi'
import { BaseCreationDrawer } from './BaseCreationDrawer';
import { debounce } from 'lodash';

export function BaseHeaderPage({ title, rightSideComponent, creationDrawer, creationDrawerLabel = "Create new", handleSearchType, setLoading }) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [mouseOnSearch, setMouseOnSearch] = useState(false);
    const [openInput, setOpenInput] = useState(false);
    const btnRef = React.useRef()
    const searchbarRef = React.useRef()
    const changeHandler = event => {
        handleSearchType(event.target.value);
    };
    const debouncedChangeHandler = useCallback(
        debounce(changeHandler, 300)
        , []);
    return (
        <>
            <SlideFade in={true}>

                <Flex alignItems="center" justifyContent="space-between" mb={5}>
                    <Flex alignItems="center">
                        <Text fontSize="3xl" fontWeight={"medium"} fontFamily={'Ubuntu'} color="gray.500">
                            {title}
                        </Text>
                    </Flex>
                    {rightSideComponent ? rightSideComponent :
                        <Flex alignItems="center" ref={searchbarRef}>
                            {
                                !mouseOnSearch &&
                                <IconButton aria-label='Search database' icon={<FiSearch />} size="md" onClick={() => setMouseOnSearch(true)} />
                            }
                            {
                                mouseOnSearch &&
                                <Box>
                                    <InputGroup
                                        size="md"
                                    >
                                        <Input
                                            onChange={(e) => {
                                                setLoading(true)
                                                debouncedChangeHandler(e)
                                            }}
                                            autoFocus
                                            onBlur={() => setMouseOnSearch(false)}
                                            autoComplete='none'
                                            pl={"3em"}
                                            placeholder='Search for transaction'
                                            _placeholder={{ fontSize: '12px' }}
                                            focusBorderColor='orange.400'
                                            variant="filled"
                                        />
                                        <InputLeftElement pointerEvents={'none'} children={<FiSearch size={16} />} />

                                    </InputGroup>
                                </Box>
                            }
                            <Button leftIcon={<FiPlus />} colorScheme='blue' fontWeight={"regular"} ml={2}
                                onClick={onOpen}
                            >
                                Create new
                            </Button>
                        </Flex>
                    }
                </Flex>
            </SlideFade>
            <BaseCreationDrawer isOpen={isOpen} onClose={onClose} btnRef={btnRef} label={creationDrawerLabel}>
                {creationDrawer && creationDrawer({ onClose })}
            </BaseCreationDrawer>
        </>

    )
}

