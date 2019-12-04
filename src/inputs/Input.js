import {Box, TextField} from "@material-ui/core";
import React from "react";

export const Input = props => {
    const {label, type, value, onChange} = props;

    return (
        <Box flex="1 1 auto" padding="16px" textAlign="left">
            <TextField
                style={{width: 85}}
                label={label}
                type={type}
                InputLabelProps={{shrink: true}}
                margin="none"
                variant="standard"
                defaultValue={value}
                min={0}
                max={20}
                required={true}
                onChange={e => onChange(e.target.value)}
            />
        </Box>
    );
};