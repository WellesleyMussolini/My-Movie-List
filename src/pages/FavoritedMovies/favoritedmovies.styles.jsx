import { Container, styled } from "@mui/system";
import Box from "@mui/material/Box";

export const Wrapper = styled(Container)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "70vh",
  gap: "40px",
  flexWrap: "wrap",
  flexDirection: "row",
});

export const ListWrapper = styled(Box)({
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
  gap: "25px",
});