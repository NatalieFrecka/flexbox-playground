import React from 'react';
import 'reset-css';
import './App.css';
import {FlexContainer} from "./flex";
import {Container, Typography} from "@material-ui/core";

function App() {
    return (
        <Container style={{padding: 32, textAlign: 'center'}}>
            <Typography variant="h3" gutterBottom>Flexbox Playground</Typography>
            <FlexContainer/>
        </Container>
    );
}

export default App;
