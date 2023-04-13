import { Button, Flex, IconButton, Text, useDisclosure } from '@chakra-ui/react';
import React from 'react';
import { FiPlus, FiSearch } from 'react-icons/fi'
import { BaseCreationDrawer } from './BaseCreationDrawer';

export function BaseHeaderPage({ title, rightSideComponent, creationDrawer, creationDrawerLabel = "Create new" }) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    return (
        <>
            <Flex alignItems="center" justifyContent="space-between" mb={5}>
                <Flex alignItems="center">
                    <Text fontSize="3xl" fontWeight={"medium"} fontFamily={'Ubuntu'} color="gray.500">
                        {title}
                    </Text>
                </Flex>
                {rightSideComponent ? rightSideComponent :
                    <Flex alignItems="center">
                        <IconButton aria-label='Search database' icon={<FiSearch />} size="md" mr={2} />
                        <Button leftIcon={<FiPlus />} colorScheme='blue' fontWeight={"regular"} ml={2}
                            onClick={onOpen}
                        >
                            Create new
                        </Button>
                    </Flex>
                }
            </Flex>
            <BaseCreationDrawer isOpen={isOpen} onClose={onClose} btnRef={btnRef} label={creationDrawerLabel}>
                {creationDrawer && creationDrawer({ onClose })}
            </BaseCreationDrawer>
        </>

    )
}

