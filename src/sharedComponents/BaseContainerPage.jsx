import { Box } from '@chakra-ui/react';
import React from 'react';

function BaseContainerPage({ children }) {
    return (
        <Box display="flex" flexDir="column" flex="1" p={5} pt="110px">
            {children}
        </Box>
    );
}

export default BaseContainerPage;