import {Input} from ".";
import {updateProp} from "../helpers/helper";
import React from "react";

export const FlexBasisInput = props => {
    const {flexProps, setFlexProps} = props;
    return <Input
        label="flex-basis"
        type="text"
        value={flexProps.flexBasis}
        onChange={val => updateProp(flexProps, setFlexProps, "flexBasis", val)}
    />;
};