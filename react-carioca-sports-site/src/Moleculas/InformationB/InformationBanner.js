import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { InformationBannerStyle } from "./InformationBannerStyles"; // Importa os estilos

const InformationBanner = () => {
  // Array com os itens do banner (ícone, título, descrição e link)
  const bannerItems = [
    {
      imgSrc: "https://cdn.dooca.store/292/files/icone-frete-gratis.png?v=1693396471&webp=0",
      title: "FRETE GRÁTIS*",
      description: "Consulte as condições",
      link: "https://www.studiogeek.com.br/frete-e-entrega",
    },
    {
      imgSrc: "https://cdn.dooca.store/292/files/icone-desconto-40x40-preto.png?v=1692968907&webp=0",
      title: "DESCONTO À VISTA",
      description: "3% off no Pix ou Boleto",
      link: "",
    },
    {
      imgSrc: "https://cdn.dooca.store/292/files/cartao-de-credito-icone-40x40-preto.png?v=1692968920&webp=0",
      title: "PARCELE NO CARTÃO",
      description: "Até 5x sem juros*",
      link: "",
    },
    {
      imgSrc: "https://cdn.dooca.store/292/files/icone-cashback-2.png?v=1717763603&webp=0",
      title: "CASHBACK",
      description: "Compre e ganhe",
      link: "https://www.studiogeek.com.br/cashback-studio-geek",
    },
    {
      imgSrc: "https://cdn.dooca.store/292/files/icone-tamanho40x40-preto.png?v=1692968934&webp=0",
      title: "TAMANHOS GRANDES",
      description: "Até o 4G",
      link: "",
    },
    {
      imgSrc: "https://cdn.dooca.store/292/files/icone-troca-40x40-preto.png?v=1692968948&webp=0",
      title: "1ª TROCA GRÁTIS",
      description: "Solicite dentro de 10 dias",
      link: "",
    },
  ];

  return (
    <Box className="information-banner-container">
      <Grid
        container
        spacing={2}
        justifyContent="space-between"
        alignItems="center"
        className="information-banner-grid"
      >
        {bannerItems.map((item, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            lg={2}
            textAlign="center"
            key={index}
            className="information-banner-item"
          >
            <Link href={item.link} underline="none" className="information-banner-link">
              <Box className="information-banner-image-wrapper">
                <img
                  loading="lazy"
                  src={item.imgSrc}
                  alt={item.title}
                  className="information-banner-image"
                />
              </Box>
              <Typography variant="h6" className="information-banner-title">
                {item.title}
              </Typography>
              <Typography variant="body2" className="information-banner-description">
                {item.description}
              </Typography>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default InformationBanner;
