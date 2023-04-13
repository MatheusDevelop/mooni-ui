import { Box, Divider, Flex } from '@chakra-ui/react';
import React from 'react';
import { Sidebar } from './Sidebar';
import { Outlet } from 'react-router-dom';
import { DashboardHeader } from './DashboardHeader';

export function DashboardLayout() {
    return (
        <Flex width="100vw" height="100vh">
            <DashboardHeader />
            <Sidebar />
            <Outlet />
        </Flex>
    );
}
