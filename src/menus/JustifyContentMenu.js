import {SelectMenu} from ".";
import {updateProp} from "../helpers/helper";
import React from "react";

export const JustifyContentMenu = props => {
    const {flexContainerProps, setFlexContainerProps} = props;
    return <SelectMenu
        label="justify-content"
        value={flexContainerProps.justifyContent}
        onChange={val => updateProp(flexContainerProps, setFlexContainerProps, "justifyContent", val)}
        choices={["flex-start", "flex-end", "space-around", "space-between", "space-evenly", "center"]}
    />;
};