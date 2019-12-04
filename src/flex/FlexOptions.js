import React from "react";
import {Box} from "@material-ui/core";
import {AlignItemsMenu, FlexDirectionMenu, FlexWrapMenu, JustifyContentMenu} from "../menus";

export const FlexOptions = props => {
    return (
        <Box display="flex" flexDirection="row" flexWrap="wrap" alignItems="center">
            <FlexDirectionMenu {...props}/>
            <FlexWrapMenu {...props}/>
            <JustifyContentMenu {...props}/>
            <AlignItemsMenu {...props}/>
        </Box>
    );
};