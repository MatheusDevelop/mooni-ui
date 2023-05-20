import { Box, Card, CardHeader, Divider, Flex, Grid, GridItem, List, ListItem, Square, Text } from '@chakra-ui/react';
import React from 'react';
import { DashboardCurrentBalanceCard } from './DashboardCurrentBalanceCard';
import { DashboardExpensesCard } from './DashboardExpensesCard';
import { DashboardCostsCard } from './DashboardCostsCard';
import { DashboardCashflowCard } from './DashboardCashflowCard';

export function DashboardAnalytics() {
    return (
        <Box p={5} sx={{ flex: 1 }}>
            <Grid
                h={'100%'}
                templateRows='repeat(3, 1fr)'
                templateColumns='repeat(6, 1fr)' gap={5}
            >
                <DashboardCurrentBalanceCard />
                <DashboardExpensesCard />
                <DashboardCashflowCard />
                <DashboardCostsCard />
            </Grid>
        </Box>
    );
}


