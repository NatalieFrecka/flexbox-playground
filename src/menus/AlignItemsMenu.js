import {SelectMenu} from ".";
import {updateProp} from "../helpers/helper";
import React from "react";

export const AlignItemsMenu = props => {
    const {flexContainerProps, setFlexContainerProps} = props;
    return <SelectMenu
        label="align-items"
        value={flexContainerProps.alignItems}
        onChange={val => updateProp(flexContainerProps, setFlexContainerProps, "alignItems", val)}
        choices={["flex-start", "flex-end", "center", "baseline", "stretch"]}
    />;
};