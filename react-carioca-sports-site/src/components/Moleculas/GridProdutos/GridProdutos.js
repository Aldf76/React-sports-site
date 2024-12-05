import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { GridProdutosStyle } from "./GridProdutosStyles";

const mockCards = [
  {
    id: 1,
    description: "Acho que é quarta camiseta, tem boa qualidade tanto na estampa como na temática! Muito bom!",
    name: "Pedro",
    date: "27/11/2024",
    stars: 5,
  },
  {
    id: 2,
    description: "A loja é boa, fácil de navegar, só falta ter todas estampas em baby look.",
    name: "Maria",
    date: "08/11/2024",
    stars: 4,
  },
  {
    id: 3,
    description: "Ótima variedade nas estampas, preço muito justo e atendimento excelente por parte do Gustavo.",
    name: "Paulo",
    date: "07/11/2024",
    stars: 5,
  },
];

const GridProdutos = () => {
  return (
    <Box sx={GridProdutosStyle.container}>
      <Typography variant="h5" sx={GridProdutosStyle.title}>
        Veja o que falam da nossa loja
      </Typography>
      <Grid container spacing={3} justifyContent="center"> {/*Aqui começa o card em si  */}
        {mockCards.map((card) => ( // mapa iterando
          <Grid item xs={12} sm={6} md={4} key={card.id}>  {/*Separação do espaço*/}
            <Card sx={GridProdutosStyle.card}>
              <CardContent> {/*Informações contidas dentro */}
                <Typography variant="body1" sx={GridProdutosStyle.description}>
                  &ldquo;{card.description}&rdquo;
                </Typography>
                <Typography variant="subtitle2" sx={GridProdutosStyle.customer}>
                  {card.name}
                </Typography>
                <Typography variant="caption" sx={GridProdutosStyle.date}>
                  {card.date}
                </Typography>
                <Box sx={GridProdutosStyle.stars}>
                  {"⭐".repeat(card.stars)}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Box sx={GridProdutosStyle.footer}>
        <Typography variant="body2">
          Avaliações confiáveis do <span style={{ color: "#4caf50", fontWeight: "bold" }}>ReclameAQUI</span>
        </Typography>
      </Box>
    </Box>
  );
};

export default GridProdutos;
