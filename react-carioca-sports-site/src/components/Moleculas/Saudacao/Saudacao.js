import { Box, Typography, Container } from "@mui/material";
import SaudacaoStyles from './SaudacaoStyles';


const Saudacao = () => {
    return (
        <Box sx={SaudacaoStyles.introducao}>
            <Container>
                {/* Título */}
                <Typography variant="h2" sx={SaudacaoStyles.titulo}>
                    Bem vindo ao TavernaGeek
                </Typography>

                {/* Descrição */}
                <Typography variant="body1" sx={SaudacaoStyles.descricao}>
                    Com mais de uma década de experiência, somos a sua fonte confiável de produtos geek e cultura pop.
                     Nossa missão é oferecer itens exclusivos e de alta qualidade, perfeitos para quem leva o mundo geek a sério.
                    Em nosso catálogo, você encontrará uma vasta seleção de produtos inovadores, incluindo camisetas geek, camisetas femininas geek, canecas divertidas,
                     camisetas personalizadas, ecobags customizadas, moletons e muito mais. 
                    Todos os nossos produtos são ideais tanto para o uso diário quanto para presentear alguém especial que compartilhe da sua paixão pelo universo nerd.
                    Você está prestes a explorar a melhor loja geek do Brasil, onde cada detalhe foi pensado para encantar os verdadeiros fãs!
                </Typography>

                {/* Chamada */}
                <Typography variant="body2" sx={SaudacaoStyles.chamada}>
                    Explore nosso catálogo e descubra um universo de possibilidades!
                </Typography>
            </Container>
        </Box>
    );
};

export default Saudacao;
