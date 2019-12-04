import {Box} from "@material-ui/core";
import {FlexBasisInput, FlexGrowInput, FlexShrinkInput, OrderInput} from "../inputs";
import React from "react";

export const FlexInputs = props => {
    return (
        <Box display="flex" flexDirection="row" flexWrap="wrap" alignItems="center">
            <FlexGrowInput {...props}/>
            <FlexShrinkInput {...props}/>
            <FlexBasisInput {...props}/>
            <OrderInput {...props}/>
        </Box>
    );
};