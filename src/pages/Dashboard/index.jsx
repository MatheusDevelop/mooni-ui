import { Box, Divider } from '@chakra-ui/react';
import React from 'react';
import { DashboardHeader } from './components/DashboardHeader';
import { DashboardAnalytics } from './components/DashboardAnalytics';
import { DashboardRightSide } from './components/DashboardRightSide';
const DashboardPage = () => (<>
    <Box flex={3} display={"flex"} flexDir="column" mt={"80px"}>
        <DashboardAnalytics />
    </Box>
    <DashboardRightSide />
</>)

export default DashboardPage;





