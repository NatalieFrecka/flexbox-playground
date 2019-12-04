import {SelectMenu} from ".";
import {updateProp} from "../helpers/helper";
import React from "react";

export const FlexDirectionMenu = props => {
    const {flexContainerProps, setFlexContainerProps} = props;
    return <SelectMenu
        label="flex-direction"
        value={flexContainerProps.flexDirection}
        onChange={val => updateProp(flexContainerProps, setFlexContainerProps, "flexDirection", val)}
        choices={["column", "row", "column-reverse", "row-reverse"]}
    />;
};