import React, { useEffect, useState } from 'react';
import getAllCategories from '../../../services/categories/getAllCategories';
import { Select, components } from 'chakra-react-select';
import { CategoryTag } from '../../../sharedComponents/CategoryTag'
export function TransactionCategoriesSelect({ categoryId, setCategoryId }) {
    const [categories, setCategories] = useState([]);
    const getCategories = async () => {
        const allCategories = await getAllCategories();
        setCategories(allCategories)
    }
    useEffect(() => {
        getCategories();
    }, []);
    const SingleValue = ({
        children,
        ...props
    }) => {
        const { data } = props
        const { label: categoryName, value: categoryId, iconId, color } = data;

        return (
            <components.SingleValue {...props}>
                <CategoryTag iconId={iconId} color={color} name={categoryName} sm />
            </components.SingleValue>
        )
    }
    const Option = (props) => {
        const { data } = props
        const { label: categoryName, value: categoryId, iconId, color } = data;
        return (
            <components.Option {...props}>
                <CategoryTag iconId={iconId} color={color} name={categoryName} sm />
            </components.Option>
        )
    };
    return (
        <Select
            autoComplete="none"
            placeholder='Select an category'
            variant='filled'
            size="sm"
            defaultValue={categoryId}
            onChange={s => setCategoryId(s.value)}
            styles={{
                option: (base, s) => ({
                    ...base,
                    height: '35px',
                    cursor: "pointer",
                    background: s.isSelected ? "#EDF2F7" : 'white',
                    transition: ".1s all linear",
                    ":hover": {
                        background: "#E2E8F0"
                    },
                    ":active": {
                        background: "#E2E8F0"
                    }
                }),
            }}
            components={{ SingleValue, Option }}
            options={categories.map(c => ({ value: c.id, label: c.name, colorScheme: c.color, ...c }))}
        />
    )
}