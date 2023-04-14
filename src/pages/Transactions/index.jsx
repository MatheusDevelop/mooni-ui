import { Flex, Button, IconButton, Card, useDisclosure, Spinner, SlideFade } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import TransactionsTable from './components/TransactionsTable';
import { FiPlus, FiSearch } from 'react-icons/fi';
import { BaseHeaderPage } from '../../sharedComponents/BaseHeaderPage';
import BaseContainerPage from '../../sharedComponents/BaseContainerPage';
import { CreateNewTransactionDrawerContent } from './components/CreateNewTransactionDrawerContent';
import getTransactions from '../../services/transactions/getTransactions';
import deleteTransaction from '../../services/transactions/deleteTransaction';
function TransactionsPage() {
    const [transactions, setTransactions] = useState([]);
    const [loading, setLoading] = useState(false);
    const getData = async (query) => {
        setLoading(true)
        const data = await getTransactions(query);
        setTransactions(data)
        setLoading(false)
    }

    const handleDeleteClick = async (transactionId) => {
        setLoading(true)
        await deleteTransaction(transactionId)
        getData()
    }
    useEffect(() => {
        getData()
    }, []);
    return (
        <>
            <BaseContainerPage>
                <BaseHeaderPage
                    title="Transactions"
                    handleSearchType={getData}
                    setLoading={setLoading}
                    creationDrawerLabel={"Create new transaction"}
                    creationDrawer={p =>
                        <CreateNewTransactionDrawerContent closeDrawer={p.onClose} onCreate={() => getData()} />
                    }
                />
                <Card flex="1" variant="outline"
                    position="relative"
                >
                    <SlideFade in={loading} offsetX={0} 
                        style={{ position: "absolute", width: "100%", height: "100%", top: 0, left: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <Spinner color='orange' size="lg" />
                    </SlideFade>
                    <SlideFade in={!loading} style={{ margin: "0" }} offsetX={0}>
                        <TransactionsTable transactions={transactions} handleDeleteClick={handleDeleteClick} />
                    </SlideFade>
                </Card>
            </BaseContainerPage>
        </>
    )
}

export default TransactionsPage;


