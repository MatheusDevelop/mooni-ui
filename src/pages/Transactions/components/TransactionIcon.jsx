import { Square } from '@chakra-ui/react';
import React from 'react';
import { SiUber } from 'react-icons/si';


function TransactionIcon({ iconId, color }) {
    const icons = [
        { id: 1, icon: size => <SiUber size={size} /> }
    ]
    const icon = icons.find(e => e.id === iconId)
    if (icon)
        return (
            <Square bg={color + "20"} padding={2} borderRadius={"md"}>
                <SiUber color={color} size={18} />
            </Square>
        )
    else
        return <></>
}

export default TransactionIcon;