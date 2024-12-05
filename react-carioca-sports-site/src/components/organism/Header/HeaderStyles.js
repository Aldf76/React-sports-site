
const headerStyles = {
  appBar: {
    backgroundColor: "#333333", // Fundo escuro
    padding: "8px 16px",
    boxShadow: "none",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    display: "flex",
    alignItems: "center",
  },
  logoImg: {
    height: "40px", // Ajusta o tamanho do logo
  },
  nav: {
    display: "flex",
    gap: "16px", // Espaçamento entre os itens de navegação
  },
  navItem: {
    color: "#FFFFFF",
    fontSize: "14px",
    textTransform: "uppercase",
    fontWeight: 500,
    cursor: "pointer",
    "&:hover": {
      color: "#00b4d8", // Azul claro ao hover
    },
  },
  rightSection: {
    display: "flex",
    alignItems: "center",
    gap: "16px",
  },
  searchBox: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: "4px",
    padding: "2px 8px",
  },
  searchInput: {
    flex: 1,
    padding: "4px 8px",
  },
  searchButton: {
    color: "#00b4d8",
  },
  iconButton: {
    color: "#FFFFFF",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  iconLabel: {
    fontSize: "12px",
    marginTop: "4px",
  },

  navigationMenu: {
    backgroundColor: "#8B0000",
    padding: "8px 0",
  },
  
  navigationMenuContainer: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: "8px",
  },
  
  navigationItem: {
    color: "#fff",
    fontWeight: "bold",
    textTransform: "uppercase",
    cursor: "pointer",
    hover: {
      textDecoration: "underline",
    }
  }


















};

export default headerStyles;
