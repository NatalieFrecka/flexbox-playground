import React, {useState} from "react";
import {Container, Paper} from "@material-ui/core";
import {FlexInputs} from ".";

const styles = {
    defaultFlexProps: {
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: '25%',
        order: 0,
        padding: 16,
        margin: 0,
        maxWidth: "none",
        display: "flex",
        flexDirection: "column"
    },
    paper: {
        padding: "32px 16px",
        flex: "1 0 auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    }
};

export const FlexChild = () => {
    const [flexProps, setFlexProps] = useState(styles.defaultFlexProps);

    return (
        <Container style={flexProps}>
            <Paper style={styles.paper}>
                <FlexInputs flexProps={flexProps} setFlexProps={setFlexProps}/>
            </Paper>
        </Container>
    );
};

