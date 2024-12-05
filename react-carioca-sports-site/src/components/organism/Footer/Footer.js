import React from "react";
import { Box, Container, Typography, Grid, Link } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import FooterStyles from "./FooterStyles";

const Footer = () => {
  const links = [
    { name: "Home", url: "/" },
    { name: "Sobre Nós", url: "/about" },
    { name: "Contato", url: "/contact" },
    { name: "Política de Privacidade", url: "/privacy" },
  ];

  const social = [
    { name: "Facebook", icon: "facebook", url: "https://facebook.com" },
    { name: "Instagram", icon: "instagram", url: "https://instagram.com" },
  ];

  return (
    <Box component="footer" sx={FooterStyles.footer} className="footer">
      <Container sx={FooterStyles.footerContainer} maxWidth="lg" className="footer-container">
        <Grid container spacing={4}>
          {/* Central de Atendimento */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={FooterStyles.footerTitle} className="footer-title">
              Central de Atendimento
            </Typography>
            <Box>
              <Typography variant="body1" sx={FooterStyles.footerContact}>
                <strong>WhatsApp:</strong> 11 99931-8844
              </Typography>
              <Typography variant="body1" sx={FooterStyles.footerContact}>
                <strong>Email:</strong> atendimento@tavernaogeek.com.br
              </Typography>
              <Typography variant="body2" sx={FooterStyles.footerContact}>
                Seg. a Sex. das 09h às 17h
              </Typography>
            </Box>
          </Grid>

          {/* Navegação */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={FooterStyles.footerTitle} className="footer-title">
              Navegação
            </Typography>
            <Box>
              {links.map((link, index) => (
                <Link
                  key={index}
                  href={link.url}
                  sx={FooterStyles.footerLink}
                  className="footer-link"
                >
                  {link.name}
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Redes Sociais */}
          <Grid item xs={12} md={4} sx={FooterStyles.footerSocialColumn}>
            <Typography variant="h6" sx={FooterStyles.footerSocialTitle} className="footer-title">
              Redes Sociais
            </Typography>
            <Box sx={FooterStyles.footerSocial} className="footer-social">
              {social.map((network, index) => (
                <Link
                  key={index}
                  href={network.url}
                  sx={FooterStyles.footerSocialLink}
                  className="footer-social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {network.icon === "facebook" ? <FacebookIcon /> : <InstagramIcon />}
                </Link>
              ))}
            </Box>
          </Grid>
        </Grid>
        {/* Footer Text */}
        <Box sx={FooterStyles.footerText} className="footer-text">
          <Typography variant="body2">
            © 2024 Taverna Geek. Todos os direitos reservados.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
