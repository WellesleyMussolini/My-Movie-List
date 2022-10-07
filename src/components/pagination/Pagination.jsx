import React from "react";
import Pagination from '@mui/material/Pagination';
import { Container, Wrapper } from "./pagination.styles";

const PageSwitch = ({ HandleCurrentPage, Pages, TotalPages }) => {
    return (
        <Container>
            <Wrapper spacing={2}>
                <Pagination
                    count={TotalPages}
                    color="primary"
                    page={Pages}
                    onChange={HandleCurrentPage}
                />
            </Wrapper>
        </Container>
    )
};

export default PageSwitch;