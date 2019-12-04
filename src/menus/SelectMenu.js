import React from "react";
import {Box, FormControl, InputLabel, MenuItem, Select} from "@material-ui/core"

export const SelectMenu = props => {
    const {label, value, onChange, choices} = props;

    return (
        <Box flex="1 1 200px" padding="16px" textAlign="left">
            <FormControl style={{width: "100%"}}>
                <InputLabel shrink id={`${label}-label`}>{label}</InputLabel>
                <Select
                    labelId="demo-simple-select-placeholder-label-label"
                    value={value}
                    onChange={e => onChange(e.target.value)}
                    displayEmpty
                >
                    {choices.map(choice =>
                        <MenuItem key={choice} value={choice}>{choice}</MenuItem>
                    )}
                </Select>
            </FormControl>
        </Box>
    );
};