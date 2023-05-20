import { Card, Checkbox, Flex, IconButton, Menu, MenuButton, MenuItem, MenuList, MenuOptionGroup, Square, Table, TableContainer, Tag, TagLabel, TagLeftIcon, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react';
import React, { useState } from 'react';
import { FiDelete, FiMap, FiMoreHorizontal, FiTrash } from 'react-icons/fi';
import { SiUber } from 'react-icons/si';
import { useTable } from 'react-table';
import { CategoryTag } from '../../../sharedComponents/CategoryTag';
import { format } from 'date-fns';
import updatePayment from '../../../services/transactions/updatePayment';

function TransactionsTable({ transactions, handleDeleteClick }) {
    const columns = React.useMemo(
        () => [

            {
                Header: 'Name',
                accessor: 'name',
                Cell: ({ value: name, row }) => {
                    const { id } = row.original
                    return (
                        <Flex alignItems="center" position={"relative"}>
                            <Menu
                                position="absolute"
                                autoSelect={false}
                            >
                                <MenuButton
                                    as={IconButton}
                                    size="sm"
                                    position={"absolute"}
                                    left="0"
                                    top="-1.5"
                                    icon={<FiMoreHorizontal />}
                                    colorScheme='orange'
                                    variant={"outline"}
                                />
                                <MenuList
                                    minWidth='150px'
                                >
                                    <MenuItem
                                        icon={<FiTrash />}
                                        autoFocus="false"
                                        onClick={() => handleDeleteClick(id)}
                                    >
                                        Delete
                                    </MenuItem>

                                </MenuList>
                            </Menu>
                            {/* <TransactionIcon iconId={transactionIconId} color={transactionIconColor} /> */}
                            <Text fontWeight={"500"} color="gray.600" ml={"45px"}>{name}</Text>
                        </Flex>
                    )
                }

            },
            {
                Header: 'Category',
                accessor: 'categoryName',
                width: 100,
                Cell: ({ value: categoryName, row }) => {
                    const { categoryIconId, categoryColor } = row.original;
                    return (
                        <>
                            <CategoryTag
                                iconId={categoryIconId}
                                color={categoryColor}
                                name={categoryName}
                            />
                        </>
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
                            colorScheme={p.row.original.type == 0 ? "red" : "green"}>
                            <TagLabel>
                                {p.row.original.type == 0 ? "-" : "+"} {p.value}
                            </TagLabel>
                        </Tag>
                    )
                }
            },
            {
                Header: 'Date',
                accessor: 'date',
                Cell: ({ value, row }) => {
                    const { id } = row.original
                    return (
                        <Flex position={"relative"}>
                            <Text fontWeight={"500"} fontSize="sm" color="gray.800">
                                {format(new Date(value), 'dd/MM/yyyy')}
                            </Text>
                        </Flex>

                    )
                }

            },
            {
                Header: 'Paid',
                accessor: 'paid',
                Cell: ({ value: name, row }) => {
                    return (
                        <PaymentCheckbox row={row} />
                    )
                }
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
        <Table {...getTableProps()} variant="simple" size="md">
            <Thead>
                {// Loop over the header rows
                    headerGroups.map(headerGroup => (
                        // Apply the header row props
                        <Tr {...headerGroup.getHeaderGroupProps()}>
                            {// Loop over the headers in each row
                                headerGroup.headers.map((column, i) => (
                                    // Apply the header cell props
                                    <Th
                                        {...column.getHeaderProps()}

                                        color="gray.400"
                                        fontWeight="500"
                                        fontSize={14}
                                        fontFamily={"'Ubuntu'"}
                                        textTransform={"capitalize"}
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
                            // _hover={{
                            //     background: "gray.50",
                            //     transition: ".1s all ease-in-out"
                            // }}
                            // cursor="pointer"
                            >
                                {// Loop over the rows cells
                                    row.cells.map(cell => {
                                        // Apply the cell props
                                        return (
                                            <Td
                                                {...cell.getCellProps()}>
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

function PaymentCheckbox({ row }) {
    const [paid, setPaid] = useState(row.original.paid);
    const [loading, setLoading] = useState(false);
    return <Flex alignItems="center" position={"relative"}>
        <Checkbox
            isChecked={paid}
            disabled={loading}
            size="lg" onChange={async () => {
                setLoading(true)
                const { paid: isPaid } = await updatePayment(row.original.id, !paid)
                setPaid(isPaid)
                setLoading(false)
            }} />
    </Flex>;
}
