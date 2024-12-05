import React from "react";
import { Checkbox as MuiCheckbox } from "@mui/material";
import checkBoxStyles from "./checkBoxStyles";

// quadradinho para checar !

const Checkbox = ({ id, ...props }) => {
  return (
    <MuiCheckbox
      id={id}
      sx={checkBoxStyles.check}
      {...props}
    />
  );
};

export default Checkbox;
