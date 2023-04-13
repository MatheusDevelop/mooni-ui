import { Button, IconButton } from '@chakra-ui/react';
import React, { Fragment } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';


const DefaultBtnStyle = {
    variant: 'ghost',
    size: 'sm',
};

export const DatepickerBackBtns = (
    props
) => {
    const { calendars, getBackProps } = props;
    const customBtnProps = props.propsConfigs?.dateNavBtnProps;
    return (
        <Fragment>
            <IconButton
                {...getBackProps({ calendars })}
                {...DefaultBtnStyle}
                {...customBtnProps}
                icon={<FiChevronLeft />}
            />
        </Fragment>
    );
};

export const DatepickerForwardBtns = (
    props
) => {
    const { calendars, getForwardProps } = props;
    const customBtnProps = props.propsConfigs?.dateNavBtnProps;
    return (
        <Fragment>
            <IconButton
                {...getForwardProps({ calendars })}
                {...DefaultBtnStyle}
                {...customBtnProps}
                icon={<FiChevronRight />}
            />
        </Fragment>
    );
};