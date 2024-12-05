import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import produtos from './Produtos';
import MainStyles from "./MainStyles";
import { CenterFocusStrong } from "@mui/icons-material";

const Main = () => {
  return (
    <Box sx={MainStyles.Main}>
      {/* Seção 1: Produtos Destaque */}
      <Typography variant="h4" sx={MainStyles.sectionTitle}>
        Destaques
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {produtos.map((produto, index) => (
          <Grid item key={index}>
            <Box sx={MainStyles.productCard}>
              {/* Badge de Desconto */}
              {produto.desconto && (
                <Box sx={MainStyles.discountBadge}>{produto.desconto}</Box>
              )}

              {/* Imagem do Produto */}
              <img
                src={produto.imagem}
                alt={produto.titulo}
                alt2={produto.parcelas}
                style={MainStyles.productImage}
              />

              {/* Conteúdo do card */}
              <Box sx={MainStyles.productContent}>
                {/* Título */}
                <Typography variant="h6" sx={MainStyles.productTitle}>
                  {produto.titulo}
                </Typography>

                {/* Descrição */}
                <Typography variant="body2" sx={MainStyles.productDescription}>
                  {produto.descricao}
                </Typography>

                {/* Preço */}
                <Typography variant="body1" sx={MainStyles.productPrice}>
                  R${produto.preco.toFixed(2)}
                </Typography>

                {/* Parcelas */}
                <Typography variant="body2" sx={MainStyles.productInstallments}>
                  R${produto.parcelas}
                </Typography>
              </Box>
              {/* Título */}

            </Box>
          </Grid>
        ))}
      </Grid>

    </Box>
  );
};

export default Main;