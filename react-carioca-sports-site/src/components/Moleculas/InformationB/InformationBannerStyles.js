const InformationBannerStyle = {
  container: {
    backgroundColor: "#F5F5F5", // Fundo cinza claro
    padding: "20px 0", // Espaçamento vertical
    borderTop: "1px solid #E1E1E1", // Borda superior leve
    borderBottom: "1px solid #E1E1E1", // Borda inferior leve
    fontFamily: "Montserrat, sans-serif", // Fonte do container
  },
  itemContainer: {
    marginBottom: "16px", // Espaço entre os itens no layout responsivo
  },
  link: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textDecoration: "none", // Remove o sublinhado
  },
  imageWrapper: {
    marginBottom: "8px", // Espaço entre a imagem e o texto
  },
  image: {
    maxWidth: "100%", // Limita a largura ao tamanho do container
    height: "auto", // Mantém a proporção
  },
  title: {
    color: "#1E1F20", // Cor do texto do título
    fontWeight: 600, // Peso da fonte para destacar
    marginBottom: "4px", // Espaço inferior
    fontFamily: "Montserrat, sans-serif", // Fonte específica para título
  },
  description: {
    color: "#1E1F20", // Cor do texto da descrição
    fontSize: "14px", // Tamanho da fonte
    fontFamily: "Montserrat, sans-serif", // Fonte específica para descrição
  },
};

export default InformationBannerStyle;
