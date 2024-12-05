import React from "react";
import { Link as MuiLink } from "@mui/material";

const Link = ({ text, href }) => {
  return (
    <MuiLink
      href={href}
      sx={{
        fontSize: "14px",
        color: "#00C2C5",
        textDecoration: "none",
        "&:hover": {
          textDecoration: "underline",
        },
      }}
    >
      {text}
    </MuiLink>
  );
};

export default Link;
