import { styled } from "@mui/system";
import Box from "@mui/material/Box";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';

export const Header = styled(Box)({
  display: "grid",
  gridTemplateColumns: "30em auto",
  flexDirection: "row",
  zIndex: "10",
});

export const SearchContainer = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#fff",
  border: "1px solid #bebebe",
  maxWidth: "30em",
  height: "35px",
});

export const InputText = styled(TextField)({
  "& .MuiInputBase-root": {
    height: "35px",
    width: "28em",
  },

  "& .MuiOutlinedInput-notchedOutline": {
     border: "red",
  },
  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
     border: "red",
  }
});

// export const InputText = styled("input")({
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
//   background: "transparent",
//   border: "none",
//   borderRadius: "50px",
//   width: "33em",
//   outline: "none",
//   height: "35px",
// });

export const SearchIconStyled = styled(SearchIcon)({
  cursor: "pointer",
});

export const Wrapper = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "80vh",
  gap: "40px",
  flexWrap: "wrap",
});

export const HamburguerIcon = styled(MenuIcon)({
  color: "#0000008a",
  cursor: "pointer",
});
