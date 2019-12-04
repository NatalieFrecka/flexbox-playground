import {Input} from ".";
import {updateProp} from "../helpers/helper";
import React from "react";

export const FlexShrinkInput = props => {
    const {flexProps, setFlexProps} = props;
    return <Input
        label="flex-shrink"
        type="number"
        value={flexProps.flexShrink}
        onChange={val => updateProp(flexProps, setFlexProps, "flexShrink", val)}
    />;
};