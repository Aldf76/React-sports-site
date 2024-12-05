const newsletterFormStyles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center", // Centraliza horizontalmente
      justifyContent: "center",
      gap: "16px",
      padding: "24px",
      backgroundColor: "#333333",
      borderRadius: "8px",
      width: "100%",
      maxWidth: "600px", // Limita largura máxima
      margin: "0 auto", // Centraliza no eixo horizontal
    },
    title: {
      fontSize: "18px",
      color: "#FFFFFF",
      fontWeight: 600,
      textAlign: "center", // Centraliza o texto
    },
    input: {
      width: "100%", // Ocupa toda a largura do container
      "& .MuiInputBase-root": {
        backgroundColor: "#FFFFFF",
        borderRadius: "4px",
      },
      "& .MuiInputBase-input": {
        color: "#333",
      },
    },
    checkboxContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start", // Alinha à esquerda
      gap: "8px",
      width: "100%",
    },
    checkbox: {
      color: "#FFFFFF",
      "&.Mui-checked": {
        color: "#00C2C5",
      },
    },
    link: {
      fontSize: "14px",
      color: "#00C2C5",
      textDecoration: "none",
      "&:hover": {
        textDecoration: "underline",
      },
    },
    button: {
      backgroundColor: "#00C2C5",
      color: "#FFFFFF",
      fontWeight: 600,
      textTransform: "uppercase",
      width: "100%", // Ocupa toda a largura do container
      padding: "12px",
      borderRadius: "4px",
      "&:hover": {
        backgroundColor: "#019A9C",
      },
    },
    message: (success) => ({
      marginTop: "16px",
      color: success ? "#00C2C5" : "#FF0000",
      textAlign: "center",
    }),
  };
  
  export default newsletterFormStyles;
  