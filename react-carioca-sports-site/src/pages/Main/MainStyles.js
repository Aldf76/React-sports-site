
const MainStyles = {
  // Estilização principal da página
  Main: {
    padding: "24px",
    backgroundColor: "#f9f9f9",
  },

  // Título da seção
  sectionTitle: {
    marginBottom: "24px",
    textAlign: "center",
    fontSize: "28px",
    fontWeight: "600",
    color: "#33333",
  },
  // Cartão do produto
  productCard: {
    backgroundColor: "#fff",
    color: "#33333",
    padding: "16px",
    borderRadius: "12px",
    textAlign: "center",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    transition: "box-shadow 0.2s ease-in-out",
    position: "relative",
    width: "400px", // Largura fixa
    height: "550px", // Altura fixa
    display: "flex", // Centraliza os elementos internamente
    flexDirection: "column", // Alinha título, descrição e imagem em coluna
    justifyContent: "space-between", // Espaçamento uniforme
    "&:hover": {
      boxShadow: "0 6px 12px rgba(0, 0, 0, 0.2)",
    },
  },
  
  productImage: {
    maxWidth: "100%",
    height: "60%", // Ocupa 60% da altura do card
    objectFit: "cover",
    borderRadius: "8px",
  },
  // criado para centralizar os itens dentro do card, eu estava com problemas 
  productContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    flexGrow: 1, // Garante que o espaço abaixo da imagem seja usado uniformemente
    gap: "8px", // Espaçamento entre os itens
  },
  
  productTitle: {
    fontSize: "18px",
    fontWeight: "600",
    color: "#33333",
  },
  
  productDescription: {
    fontSize: "14px",
    color: "#666666",
    textAlign: "center", // Centraliza o texto
  },
  
  productPrice: {
    fontSize: "16px",
    fontWeight: "bold",
    color: "#d32f2f",
  },
  
  productInstallments: {
    fontSize: "14px",
    color: "#333333",
  },
  
      // Badge de desconto (como "26% OFF")
  discountBadge: {
    position: "absolute",
    top: "16px",
    left: "16px",
    backgroundColor: "#d32f2f", // Vermelho chamativo
    color: "#fff",
    fontSize: "12px",
    fontWeight: "bold",
    padding: "4px 8px",
    borderRadius: "4px",
  },
  };

  export default MainStyles;