import React from 'react';
import { BaseHeaderPage } from '../../sharedComponents/BaseHeaderPage';
import BaseContainerPage from '../../sharedComponents/BaseContainerPage';
import { Box, Card, CardBody, CardHeader, Flex, Grid, GridItem, Progress, Text } from '@chakra-ui/react';
import GoalCard from './components/GoalCard';
import { CreateNewGoalDrawerContent } from './components/CreateNewGoalDrawerContent';


function GoalsPage() {
    return (
        <BaseContainerPage>
            <BaseHeaderPage
                title="Goals"
                creationDrawer={p => <CreateNewGoalDrawerContent />}
                creationDrawerLabel='Create new goal'
            />
            <Box flex={1}>
                <Grid
                    h={'100%'}
                    templateRows='repeat(6, 1fr)'
                    templateColumns='repeat(4, 1fr)' gap={5}
                >
                    <GoalCard
                        colSpan={2}
                        rowSpan={4}
                        valueCompleted={"3.000,00"}
                        totalValue={"15.000,00"}
                        percentCompleted={30}
                        name={"Kawasaki Ninja 2012"}
                        imgUrl="https://content2.kawasaki.com/ContentStorage/KMB/ProductTopFeature/1073/89a5ca31-5482-408a-979d-61412c3f9b88.jpg?w=400"
                    />
                    <GoalCard
                        colSpan={1}
                        rowSpan={2}
                        sm
                        valueCompleted={"1.000,00"}
                        totalValue={"12.000,00"}
                        percentCompleted={2}
                        name={"Home secure reserve"}
                        imgUrl="https://www.quintoandar.com.br/img/xxl/893438718-931.8887544916964IMG9627.jpg"
                    />

                </Grid>
            </Box>

        </BaseContainerPage>
    );
}

export default GoalsPage;