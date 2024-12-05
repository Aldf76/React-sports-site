import React from "react";
import Input from "../../Atom/Input/input";
import Label from "../../Atom/Label/label";
import Box from "@mui/material/Box";
import emailFieldStyles from "./emailFieldStyles";
import TextField from '@mui/material/TextField';

const EmailField = () => {
  return (
    <Box sx={emailFieldStyles.container}>
      <TextField
        id="email"
        label="Digite seu e-mail"
        type="email"
        placeholder="Digite seu e-mail"
        fullWidth
        sx={emailFieldStyles.label}
      />
    </Box>
  );
};

export default EmailField;
