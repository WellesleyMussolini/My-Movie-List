import React from "react";
import { Container, Wrapper } from "./not-found.styles"

const NotFound = ({ Text }) => {
    return (
        <Container>
            <Wrapper>
                {Text}
            </Wrapper>
        </Container>
    )
};

export default NotFound;