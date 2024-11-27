import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import CardsStyle from "./CardsStyles"; // Importa os estilos do Cards

const Cards = ({ image, description }) => {
  return (
    <Card sx={CardsStyle.card}>
      <CardMedia
        component="img"
        height="200"
        image={image}
        alt="Imagem do Produto"
        sx={CardsStyle.cardMedia}
      />
      <CardContent sx={CardsStyle.cardContent}>
        <Typography
          variant="body1"
          sx={CardsStyle.cardDescription}
        >
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Cards;
