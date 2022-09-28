import React from "react";
import { Container, StyledText } from "./not-found.styles"

const NotFound = ({ Text }) => {
    return (
        <Container>
            <StyledText>{Text}</StyledText>
        </Container>
    )
};

export default NotFound;