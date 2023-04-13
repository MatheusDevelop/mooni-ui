import { Card, Flex, Square, Table, TableContainer, Tag, TagLabel, TagLeftIcon, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react';
import React, { useState } from 'react';
import { FiMap } from 'react-icons/fi';
import { SiUber } from 'react-icons/si';
import { useTable } from 'react-table';
import { CategoryTag } from '../../../sharedComponents/CategoryTag';
import TransactionIcon from './TransactionIcon';
import getTransactions from '../../../services/transactions/getTransactions';
import { format } from 'date-fns';

function TransactionsTable({ transactions }) {
    const columns = React.useMemo(
        () => [
            {
                Header: 'Name',
                accessor: 'name',
                Cell: ({ value: name, row }) => {
                    // const { transactionIconId, transactionIconColor } = row.original
                    return (
                        <Flex alignItems="center">
                            {/* <TransactionIcon iconId={transactionIconId} color={transactionIconColor} /> */}
                            <Text fontWeight={"500"} color="gray.600" ml={2}>{name}</Text>
                        </Flex>
                    )
                }

            },
            {
                Header: 'Category',
                accessor: 'categoryName',
                Cell: ({ value: categoryName, row }) => {
                    const { categoryIconId, categoryColor } = row.original;
                    return (
                        <CategoryTag
                            iconId={categoryIconId}
                            color={categoryColor}
                            name={categoryName}
                        />
                    )
                }

            },
            {
                Header: 'Description',
                accessor: 'description',
                Cell: ({ value }) => <Text fontWeight={"400"} fontSize="sm" color="gray.500">{value}</Text>

            },
            {
                Header: 'Amount',
                accessor: 'amount',
                Cell: (p) => {
                    return (
                        <Tag fontWeight={"medium"}
                            colorScheme={p.row.original.type == 1 ? "red" : "green"}>
                            <TagLabel>
                                {p.row.original.type == 1 ? "-" : "+"} {p.value}
                            </TagLabel>
                        </Tag>
                    )
                }
            },
            {
                Header: 'Date',
                accessor: 'date',
                Cell: ({ value }) => <Text fontWeight={"500"} fontSize="sm" color="gray.800">{format(new Date(value), 'dd/MM/yyyy')}</Text>
            },
        ],
        []
    )
    const tableInstance = useTable({ columns, data: transactions })
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = tableInstance
    return (
        <Table {...getTableProps()} variant="simple">
            <Thead>
                {// Loop over the header rows
                    headerGroups.map(headerGroup => (
                        // Apply the header row props
                        <Tr {...headerGroup.getHeaderGroupProps()}>
                            {// Loop over the headers in each row
                                headerGroup.headers.map((column, i) => (
                                    // Apply the header cell props
                                    <Th {...column.getHeaderProps()}
                                        color="gray.400" fontWeight="500" fontSize={14} fontFamily={"'Ubuntu'"} textTransform={"capitalize"}
                                    >
                                        {// Render the header

                                            column.render('Header')
                                        }
                                    </Th>
                                ))}
                        </Tr>
                    ))}
            </Thead>
            {/* Apply the table body props */}
            <Tbody {...getTableBodyProps()}>
                {// Loop over the table rows
                    rows.map(row => {
                        // Prepare the row for display
                        prepareRow(row)
                        return (
                            // Apply the row props
                            <Tr {...row.getRowProps()}
                                _hover={{
                                    background: "gray.50",
                                    transition: ".1s all ease-in-out"
                                }}
                                cursor="pointer"
                            >
                                {// Loop over the rows cells
                                    row.cells.map(cell => {
                                        // Apply the cell props
                                        return (
                                            <Td {...cell.getCellProps()}>
                                                {// Render the cell contents
                                                    cell.render('Cell')}
                                            </Td>
                                        )
                                    })}
                            </Tr>
                        )
                    })}
            </Tbody>
        </Table>
    );
}

export default TransactionsTable;