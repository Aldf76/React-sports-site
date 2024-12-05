import React from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  IconButton,
  InputBase,
  Button,
  Container,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt';
import logo from "../../../assets/logo.webp"; // Substitua com seu logo real.
import headerStyles from "./HeaderStyles";

const Header = () => {
  return (
    <AppBar position="sticky" sx={{ backgroundColor: "#333" }}>
      {/* Barra superior */}
      <Toolbar sx={{ justifyContent: "space-between", padding: "8px 16px" }}>
        {/* Logo */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <img
            src={logo}
            alt="Logo"
            style={{ height: "50px", marginRight: "16px" }}
          />
        </Box>

        {/* Barra de busca */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "#fff",
            borderRadius: "4px",
            width: "50%",
          }}
        >
          <InputBase
            placeholder="O que você está procurando?"
            sx={{ padding: "8px 16px", flex: 1 }}
          />
          <IconButton type="submit" sx={{ padding: "8px" }}>
            <SearchIcon sx={{ color: "#007FFF" }} />
          </IconButton>
        </Box>

        {/* Ícones de usuário e carrinho */}
        <Box sx={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <Button
            startIcon={<PersonIcon />}
            sx={{ color: "#fff", textTransform: "none" }}
          >
            Entrar
          </Button>

          <IconButton sx={{ color: "#fff" }}>
            <MarkUnreadChatAltIcon/>
          </IconButton>

          <IconButton sx={{ color: "#fff" }}>
            <ShoppingCartIcon />
          </IconButton>

        </Box>
      </Toolbar>

      {/* Barra inferior */}
      <Box sx={headerStyles.navigationMenu}>
        <Container maxWidth="lg">
          <Box
            sx={headerStyles.navigationMenuContainer}
          >
            {[
              "VESTUÁRIO",
              "CALÇADOS",
              "BONECOS COLECIONÁVEIS",
              "LEITURA",
              "JOGOS",
              "DECORAÇÃO",
              "ACESSÓRIOS",
              "GAMER",
              "OUTLET",
            ].map((item, index) => (
              <Typography
                key={index}
                variant="body2"
                sx={{
                  color: "#fff",
                  fontWeight: "bold",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                {item}
              </Typography>
            ))}
          </Box>
        </Container>
      </Box>
    </AppBar>
  );
};

export default Header;
