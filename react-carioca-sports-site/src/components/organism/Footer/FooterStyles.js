const FooterStyles = {
  footer: {
    backgroundColor: "#8B0000", // Vermelho escuro
    color: "#fff",
    padding: "32px 0",
    marginTop: "2px",
  },
  footerContainer: {
    maxWidth: "100%",
  },
  footerTitle: {
    fontSize: "1.25rem",
    marginBottom: "16px",
  },
  footerLink: {
    display: "block",
    margin: "8px 0",
    color: "inherit",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  footerSocialColumn: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end", // Move o título e os ícones para a direita
  },
  footerSocialTitle: {
    textAlign: "right", // Centraliza o título com os ícones
    fontSize: "1.25rem",
    marginBottom: "16px",
  },
  footerSocial: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end", // Garante que os ícones fiquem alinhados à direita
  },
  footerSocialLink: {
    marginLeft: "16px",
    color: "inherit",
  },
  footerContact: {
    marginBottom: "8px",
  },
  footerText: {
    marginTop: "24px",
    textAlign: "center",
    fontSize: "0.875rem",
  },
};

export default FooterStyles;
