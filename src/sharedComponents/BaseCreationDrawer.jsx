import { Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody } from '@chakra-ui/react';
import React from 'react';

export function BaseCreationDrawer({ isOpen, onClose, btnRef, label, children }) {
    return <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        size="md"
        finalFocusRef={btnRef}
    >
        <DrawerOverlay />
        <DrawerContent>
            <DrawerCloseButton mt={2} mr={3} />
            <DrawerHeader color="gray.600">{label}</DrawerHeader>
            <DrawerBody pt={20}>
                {children}
            </DrawerBody>
        </DrawerContent>
    </Drawer>;
}
