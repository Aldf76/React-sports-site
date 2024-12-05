import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel as ResponsiveCarousel } from "react-responsive-carousel";
import styles from "./CarouselContainerStyles"; // Importamos o estilo
import Imagem from "../../../assets/camisa-de-time.jpg.jpg";
import Imagem2 from "../../../assets/camisa-de-time2.jpg.jpg";
import Imagem3 from "../../../assets/camisa-de-time3.jpg.jpg";
import Box from "@mui/material/Box";

const CarouselContainer = () => {
  return (
    <Box sx={styles.boxBanner}>
      <ResponsiveCarousel
        infiniteLoop={true}
        autoPlay={true}
        showStatus={false}
        showArrows={false}
        showThumbs={false}
        interval={5000}
      >
        <Box>
          <img src={Imagem} alt="Slide 1" style={styles.bannerImage} />
        </Box>
        <Box>
          <img src={Imagem2} alt="Slide 2" style={styles.bannerImage} />
        </Box>
        <Box>
          <img src={Imagem3} alt="Slide 3" style={styles.bannerImage} />
        </Box>
      </ResponsiveCarousel>
    </Box>
  );
};

export default CarouselContainer;
