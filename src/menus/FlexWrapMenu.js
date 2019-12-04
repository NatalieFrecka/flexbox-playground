import {SelectMenu} from ".";
import {updateProp} from "../helpers/helper";
import React from "react";

export const FlexWrapMenu = props => {
    const {flexContainerProps, setFlexContainerProps} = props;
    return <SelectMenu
        label="flex-wrap"
        value={flexContainerProps.flexWrap}
        onChange={val => updateProp(flexContainerProps, setFlexContainerProps, "flexWrap", val)}
        choices={["nowrap", "wrap", "wrap-reverse"]}
    />;
};