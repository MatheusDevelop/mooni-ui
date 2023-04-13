import { Flex, Button, IconButton, Card, useDisclosure } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import TransactionsTable from './components/TransactionsTable';
import { FiPlus, FiSearch } from 'react-icons/fi';
import { BaseHeaderPage } from '../../sharedComponents/BaseHeaderPage';
import BaseContainerPage from '../../sharedComponents/BaseContainerPage';
import { CreateNewTransactionDrawerContent } from './components/CreateNewTransactionDrawerContent';
import getTransactions from '../../services/transactions/getTransactions';
function TransactionsPage() {
    const [transactions, setTransactions] = useState([]);
    const getData = async () => {
        const data = await getTransactions();
        console.log(data)
        setTransactions(data)
    }
    useEffect(() => {
        getData()
    }, []);
    return (
        <>
            <BaseContainerPage>
                <BaseHeaderPage
                    title="Transactions"
                    creationDrawerLabel={"Create new transaction"}
                    creationDrawer={p =>
                        <CreateNewTransactionDrawerContent closeDrawer={p.onClose} onCreate={() => getData()} />
                    }
                />
                <Card flex="1" variant="outline">
                    <TransactionsTable transactions={transactions} />
                </Card>
            </BaseContainerPage>
        </>
    )
}

export default TransactionsPage;


