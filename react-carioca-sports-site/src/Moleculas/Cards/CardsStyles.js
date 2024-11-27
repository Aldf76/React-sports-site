// CardsStyle.js
const CardsStyle = {
    card: {
      maxWidth: 345,
      margin: "1rem auto",
      boxShadow: 3,
      borderRadius: "12px",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
      "&:hover": {
        transform: "scale(1.05)", // Aumenta levemente no hover
        boxShadow: 6, // Eleva a sombra
      },
    },
    cardMedia: {
      borderRadius: "12px 12px 0 0", // Arredonda apenas a parte superior
    },
    cardContent: {
      backgroundColor: "#ffffff", // Fundo branco para o conteúdo
      textAlign: "center",
    },
    cardDescription: {
      fontWeight: "bold",
      color: "#333",
    },
  };
  
  export default CardsStyle;
  