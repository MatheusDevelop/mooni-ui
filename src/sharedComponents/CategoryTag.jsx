
import { Tag, TagLabel } from '@chakra-ui/react';
import React from 'react';
import { BiCreditCard } from 'react-icons/bi'
import { FiBookOpen, FiMap } from 'react-icons/fi';
import { MdOutlineDriveEta, MdOutlineFastfood } from 'react-icons/md';
export function CategoryTag({ iconId, name, color, sm }) {
    return (
        <Tag colorScheme={color} size={sm ? "sm" : "md"}>
            <CategoryTagIcon size={18} iconId={iconId} />
            <TagLabel ml={3}>
                {name}
            </TagLabel>
        </Tag>
    )
}
export function CategoryTagIcon({ size, iconId }) {
    const icons = [
        { id: 1, icon: s => <BiCreditCard size={s} /> },
        { id: 2, icon: s => <MdOutlineDriveEta size={s} /> },
        { id: 3, icon: s => <MdOutlineFastfood size={s} /> },
        { id: 4, icon: s => <FiBookOpen size={s} /> },
    ]
    const icon = icons.find(e => e.id === iconId)
    if (icon)
        return (
            <>
                {icon.icon(size)}
            </>
        )
    else
        return <></>
}

