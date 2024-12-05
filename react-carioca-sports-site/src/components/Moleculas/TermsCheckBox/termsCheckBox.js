import React from "react";
import Checkbox from "../../Atom/checkbox/checkbox";
import Link from "../../Atom/Link/link";
import { Box, Typography } from "@mui/material";

const TermsCheckbox = () => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <Checkbox id="terms" />
      <Typography sx={{ fontSize: "14px", color: "#FFFFFF" }}>
        Concordo em receber{" "}
        <strong>ofertas e novidades da loja</strong> por{" "}
        <strong>e-mail</strong> conforme a{" "}
        <Link text="Política de Privacidade" href="#" />
      </Typography>
    </Box>
  );
};

export default TermsCheckbox;
