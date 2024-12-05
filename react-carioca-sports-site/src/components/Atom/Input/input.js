import React from "react";
import { TextField } from "@mui/material";
import inputStyles from "./inputStyles";
//espaço para escrever
const Input = ({ id, label, ...props }) => {
  return (
    <TextField
      id={id}
      label={label}
      variant="outlined"
      fullWidth
      size="small"
      {...props}
      sx={inputStyles.root}
    />
  );
};

export default Input;
