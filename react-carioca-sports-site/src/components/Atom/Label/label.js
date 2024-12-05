import React from "react";
import { Typography } from "@mui/material";

const Label = ({ text, htmlFor }) => {
  return (
    <Typography
      component="label"
      htmlFor={htmlFor}
      sx={{
        fontSize: "14px",
        fontWeight: 600,
        color: "#FFFFFF",
        marginBottom: "4px",
        display: "block",
      }}
    >
      {text}
    </Typography>
  );
};

export default Label;
