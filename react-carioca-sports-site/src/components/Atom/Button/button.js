import React from "react";
import { Button as MuiButton } from "@mui/material";
// botão simples
const Button = ({ text, ...props }) => {
  return (
    <MuiButton
      variant="contained"
      {...props}
      sx={{
        backgroundColor: "#00C2C5",
        color: "#FFFFFF",
        textTransform: "uppercase",
        fontWeight: 600,
        padding: "8px 16px",
        "&:hover": {
          backgroundColor: "#019A9C",
        },
      }}
    >
      {text}
    </MuiButton>
  );
};

export default Button;
