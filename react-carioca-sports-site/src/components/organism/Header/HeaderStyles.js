/*

import { margin } from "@mui/system";

const headerStyles = {
  appBar: {
    position: 'sticky',
    backgroundColor: "#8B0000", // Vinho escuro 
    boxShadow: "none", 
    padding: "8px 16px",
    zIndex: 2,
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "107.6px", // Altura consistente com o design esperado.
  },
  logo: {
    display: "flex",
    alignItems: "center",
    img: {
      height: "60px", // Mantém o tamanho do logo consistente.
    },
  },
  contacts: {
    display: "flex",
    alignItems: "center",
    gap: "16px", // Espaçamento entre os ícones e o texto.
  },
  contactIcon: {
    color: "#FFD700", // Ícones dourados para contraste elegante.
    "&:hover": {
      color: "#FFFFFF", // Branco no hover para chamar atenção.
    },
  },
  contactText: {
    color: "#FFFFFF", // Texto branco para boa legibilidade.
    fontSize: "14px",
  },
  nav: {
    display: "flex",
    alignItems: "center",
    gap: "20px", // Espaçamento entre os itens do menu.
  },
  navItem: {
    color: "#FFFFFF", // Branco para legibilidade sobre fundo escuro.
    fontWeight: "600",
    fontSize: "14px",
    textTransform: "uppercase",
    "&:hover": {
      color: "#FFD700", // Destaca com dourado ao passar o mouse.
    },
    "&.active": {
      color: "#FFD700", // Cor especial para o item ativo.
      borderBottom: "2px solid #FFD700", // Linha indicativa do item ativo.
    },
  },
};

export default headerStyles;
*/

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
