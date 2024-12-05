/*

import React from "react";
import { AppBar, Toolbar, Box, Typography, IconButton, Button} from "@mui/material";
import { Instagram, Facebook, X } from "@mui/icons-material";
import "./HeaderStyles.js";
import NavItem from "../../Atom/NavItem/navItem.js";
import logo from "../../assets/logo.webp";
import headerStyles from "./HeaderStyles.js";




const Header = () => {
  return (
    <AppBar className="header" sx={headerStyles.appBar}>
      <Toolbar className="header-top" sx={headerStyles.toolbar}>
        <Box className="logo" sx={headerStyles.logo}>
          <img src={logo} alt="Carioca Logo"  />
        </Box>

       
        <Box className="contacts" sx={headerStyles.contacts}>
        <IconButton
            href="https://x.com/?logout=1732735241531"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram"></i>
            <X/>
          </IconButton>
          <IconButton
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram"></i>
            <Instagram/>
          </IconButton>
          <IconButton
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook"></i>
            <Facebook/>
          </IconButton>
          <Typography variant="body2">21.9 9995-6202 </Typography>
          <Typography variant="body2">21.9 9995-3526</Typography>
        </Box>
       
        <Box className="nav" sx={headerStyles.nav}>
        <NavItem href="#produtos" className="nav-item" sx={headerStyles.navItem}>
            Simulador
          </NavItem>
          <NavItem href="#produtos" className="nav-item" sx={headerStyles.navItem}>
            Nossos Produtos
          </NavItem>
          <NavItem href="#passo-a-passo" className="nav-item" sx={headerStyles.navItem}>
            Passo a Passo
          </NavItem>
          <NavItem href="#portfolio" className="nav-item" sx={headerStyles.navItem}>
            Portfólio
          </NavItem>
          <NavItem href="#contato" className="nav-item" sx={headerStyles.navItem}>
            Contato
          </NavItem>
        </Box>
      </Toolbar>

    </AppBar>
  );
};

export default Header;
*/
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
