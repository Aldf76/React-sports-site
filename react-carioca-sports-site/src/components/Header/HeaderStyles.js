import { margin } from "@mui/system";

const headerStyles = {
  appBar: {
    position: 'sticky',
    backgroundColor: "#8B0000", // Vinho escuro para representar elegância e sofisticação.
    boxShadow: "none", // Remove sombra para um design mais clean.
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
