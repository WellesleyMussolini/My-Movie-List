import React from "react";
import Pagination from '@mui/material/Pagination';
import { Container, Wrapper } from "./pagination.styles";

const PageSwitch = ({ HandleCurrentPage, TotalPages }) => {
    return (
        <Container>
            <Wrapper spacing={2}>
                <Pagination onClick={HandleCurrentPage} count={TotalPages} color="primary" />
            </Wrapper>
        </Container>
    )
};

export default PageSwitch;