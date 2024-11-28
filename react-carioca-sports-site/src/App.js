import "./App.css";

import { ThemeProvider, createTheme } from '@mui/material/styles';
import Header from "./Components/Header/Header.js"
import CarouselContainer from "./Moleculas/CarouselContainer/CarouselContainer.js";
import Main from "./Moleculas/Main/Main.js";
import Grid from "./Moleculas/GridProdutos/GridProdutos.js";
import Footer from "./Components/Footer/Footer.js";
import InformationBanner from "./Moleculas/InformationB/InformationBanner.js";
import InformationBannerStyle from "./Moleculas/InformationB/InformationBannerStyles.js";

function App() {

  const theme = createTheme({
    components: {
      MuiCssBaseline: {
        styleOverrides: InformationBannerStyle['@global'],
      },
    },
  });


  return (
    <>
      <Header />
      <CarouselContainer />
      <ThemeProvider theme={theme}>
      <InformationBanner />
    </ThemeProvider>
      <Main />
      <Grid/>
      <Footer />
    </>
  );
}

export default App;
