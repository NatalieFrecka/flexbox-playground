import {Input} from ".";
import {updateProp} from "../helpers/helper";
import React from "react";

export const OrderInput = props => {
    const {flexProps, setFlexProps} = props;
    return <Input
        label="order"
        type="number"
        value={flexProps.order}
        onChange={val => updateProp(flexProps, setFlexProps, "order", val)}
    />;
};