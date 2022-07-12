import { styled } from "@mui/system";
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';

export const InputText = styled(TextField)({
    "& .MuiInputBase-root": {
      height: "35px",
      width: "30em",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#C52328",
      borderWidth: "2px"
    }
  });
  
  export const SearchIconStyled = styled(SearchIcon)({
    cursor: "pointer",
  });