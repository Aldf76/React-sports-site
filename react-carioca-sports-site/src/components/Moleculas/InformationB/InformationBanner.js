import React from "react";
import { Box, Grid, Typography, Link } from "@mui/material";
import {
  LocalShippingOutlined,
  DiscountOutlined,
  CreditCardOutlined,
  AttachMoneyOutlined,
  AccessibilityNewOutlined,
  CachedOutlined,
} from "@mui/icons-material";
import InformationBannerStyle from "./InformationBannerStyles";

const InformationBanner = () => {
  const bannerItems = [
    {
      icon: <LocalShippingOutlined fontSize="large" />,
      title: "FRETE GRÁTIS",
      description: "Consulte as condições",
    },
    {
      icon: <DiscountOutlined fontSize="large" />,
      title: "DESCONTO À VISTA",
      description: "3% no Pix ou Boleto",

    },
    {
      icon: <CreditCardOutlined fontSize="large" />,
      title: "PARCELE NO CARTÃO",
      description: "Até 5x sem juros",

    },
    {
      icon: <AttachMoneyOutlined fontSize="large" />,
      title: "CASHBACK",
      description: "Compre e ganhe",

    },
    {
      icon: <AccessibilityNewOutlined fontSize="large" />,
      title: "TAMANHOS GRANDES",
      description: "Até o 4G",

    },
    {
      icon: <CachedOutlined fontSize="large" />,
      title: "1ª TROCA GRÁTIS",
      description: "Solicite dentro de 10 dias",

    },
  ];

  return (
    <Box sx={InformationBannerStyle.container}>
      <Grid
        container
        spacing={2}
        justifyContent="space-between"
        alignItems="center"
      >
        {bannerItems.map((item, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            lg={2}
            textAlign="center"
            key={index}
            sx={InformationBannerStyle.itemContainer}
          >

            <Box sx={InformationBannerStyle.iconWrapper}>{item.icon}</Box>
            <Typography variant="h6" sx={InformationBannerStyle.title}>
              {item.title}
            </Typography>
            <Typography variant="body2" sx={InformationBannerStyle.description}>
              {item.description}
            </Typography>

          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default InformationBanner;
