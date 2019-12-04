import React, {useState} from "react";
import {Box} from "@material-ui/core";
import {FlexChild, FlexOptions} from ".";

const defaultFlexContainerProps = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
};

export const FlexContainer = () => {
    const [flexContainerProps, setFlexContainerProps] = useState(defaultFlexContainerProps);

    return (
        <Box>
            <FlexOptions flexContainerProps={flexContainerProps} setFlexContainerProps={setFlexContainerProps}/>
            <Box {...flexContainerProps}>
                {[...Array(10)].map((_, index) => <FlexChild key={index}/>)}
            </Box>
        </Box>
    );
};

