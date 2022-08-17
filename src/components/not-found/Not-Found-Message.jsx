import React from "react";
import { Container, Wrapper } from "./not-found-message.styles";

const ErrorMessage = ({ Text }) => {
    return (
        <Container>
            <Wrapper>
                {Text}
            </Wrapper>
        </Container>
    )
};

export default ErrorMessage;