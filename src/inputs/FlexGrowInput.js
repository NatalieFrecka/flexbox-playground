import {Input} from ".";
import {updateProp} from "../helpers/helper";
import React from "react";

export const FlexGrowInput = props => {
    const {flexProps, setFlexProps} = props;
    return <Input
        label="flex-grow"
        type="number"
        value={flexProps.flexGrow}
        onChange={val => updateProp(flexProps, setFlexProps, "flexGrow", val)}
    />;
};