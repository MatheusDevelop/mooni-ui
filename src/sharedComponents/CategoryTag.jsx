
import { Tag, TagLabel } from '@chakra-ui/react';
import React from 'react';
import { BiCreditCard } from 'react-icons/bi'
import { FiBookOpen, FiMap } from 'react-icons/fi';
import { MdOutlineDriveEta, MdOutlineFastfood } from 'react-icons/md';
export function CategoryTag({ iconId, name, color, sm }) {
    const icons = [
        { id: 1, icon: size => <BiCreditCard size={size} /> },
        { id: 2, icon: size => <MdOutlineDriveEta size={size} /> },
        { id: 3, icon: size => <MdOutlineFastfood size={size} /> },
        { id: 4, icon: size => <FiBookOpen size={size} /> },
    ]
    const icon = icons.find(e => e.id === iconId)
    if (icon)
        return (
            <Tag colorScheme={color} size={sm ? "sm" : "md"}>
                {icon.icon(18)}
                <TagLabel ml={3}>
                    {name}
                </TagLabel>
            </Tag>
        )
    else
        return <></>
}

