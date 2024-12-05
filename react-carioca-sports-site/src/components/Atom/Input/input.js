import React from "react";
import { TextField } from "@mui/material";
import inputStyles from "./inputStyles";

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
