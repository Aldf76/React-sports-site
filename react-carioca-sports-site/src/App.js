import "./App.css";

import { ThemeProvider, createTheme } from '@mui/material/styles';
import Header from "./Components/organism/Header/Header.js"
import CarouselContainer from "./Components/Moleculas/CarouselContainer/CarouselContainer.js";
import Main from "./pages/Main/Main.js";
import Grid from "./Components/Moleculas/GridProdutos/GridProdutos.js";
import Footer from "./Components/organism/Footer/Footer.js";
import InformationBanner from "./Components/Moleculas/InformationB/InformationBanner.js";
import InformationBannerStyle from "./Components/Moleculas/InformationB/InformationBannerStyles.js";
import NewsLetterForm from "./Components/organism/newsLetterForm/newsLetterForm.js";
import Saudacao from './Components/Moleculas/Saudacao/Saudacao.js';

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
      <Saudacao/>
      <NewsLetterForm />
      <Footer />
    </>
  );
}

export default App;
