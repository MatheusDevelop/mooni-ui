import React from 'react';
import { Select, chakraComponents } from "chakra-react-select";

function MainSelect(props) {
    return <Select
        {...props}
        options={props.options}
    />;
}

export default MainSelect;