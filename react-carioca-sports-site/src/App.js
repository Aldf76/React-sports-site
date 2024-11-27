import "./App.css";

import Header from "./Components/Header/Header.js"
import CarouselContainer from "./Moleculas/CarouselContainer/CarouselContainer.js";
import Main from "./Moleculas/Main/Main.js";
import Grid from "./Moleculas/GridProdutos/GridProdutos.js";
import Footer from "./Components/Footer/Footer.js";

function App() {


  return (
    <>
      <Header />
      <CarouselContainer />
      <Main />
      <Grid/>
      <Footer />
    </>
  );
}

export default App;
