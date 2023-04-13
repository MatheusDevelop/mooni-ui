import { Button } from '@chakra-ui/react';
import React, { useMemo } from 'react';
const halfGap = 0.125; //default Chakra-gap-space-1 is 0.25rem
export const DayOfMonth = ({
    dateObj,
    propsConfigs,
    isInRange,
    renderProps,
    onMouseEnter,
}) => {
    const { date, selected, selectable, today } = dateObj;
    const { getDateProps } = renderProps;
    const {
        defaultBtnProps,
        isInRangeBtnProps,
        selectedBtnProps,
        todayBtnProps,
    } = propsConfigs?.dayOfMonthBtnProps || {};

    const styleBtnProps = useMemo(
        () => ({
            defaultBtnProps: {
                size: 'sm',
                variant: 'outline',
                background: 'transparent',
                borderColor: 'transparent',
                // this intends to fill the visual gap from Grid to improve the UX
                // so the button active area is actually larger than what it's seen
                _after: {
                    content: "''",
                    position: 'absolute',
                    top: `-${halfGap}rem`,
                    left: `-${halfGap}rem`,
                    bottom: `-${halfGap}rem`,
                    right: `-${halfGap}rem`,
                    borderWidth: `${halfGap}rem`,
                    borderColor: 'transparent',
                },
                ...defaultBtnProps,
                _hover: selectable
                    ? {
                        bg: 'purple.400',
                        ...defaultBtnProps?._hover,
                    }
                    : undefined,
            },
            isInRangeBtnProps: {
                ...isInRangeBtnProps,
            },
            selectedBtnProps: {
                background: 'purple.200',
                ...selectedBtnProps,
            },
            todayBtnProps: {
                borderColor: 'blue.200',
                ...todayBtnProps,
            },
        }),
        [
            defaultBtnProps,
            isInRangeBtnProps,
            selectedBtnProps,
            todayBtnProps,
            selectable,
        ]
    );

    return (
        <Button
            {...getDateProps({
                dateObj,
                disabled: !selectable,
                onMouseEnter: onMouseEnter,
            })}
            isDisabled={!selectable}
            {...styleBtnProps.defaultBtnProps}
            {...(isInRange && selectable && styleBtnProps.isInRangeBtnProps)}
            {...(selected && selectable && styleBtnProps.selectedBtnProps)}
            {...(today && styleBtnProps.todayBtnProps)}
        >
            {date.getDate()}
        </Button>
    );
};