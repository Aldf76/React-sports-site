import "./App.css";
import Footer from "./Components/Footer/Footer.js";
import Main from "./pages/Main/Main";
import Header from "./Components/Header/Header.js"
import CarouselContainer from "./pages/CarouselContainer/CarouselContainer.js";
import GridExemplo from "./Components/Grid/Grid.js"


function App() {

  const exemploData = [
    { id: 1, image: "https://via.placeholder.com/150", description: "Imagem 1" },
    { id: 2, image: "https://via.placeholder.com/150", description: "Imagem 2" },
    { id: 3, image: "https://via.placeholder.com/150", description: "Imagem 3" },
  ];

  return (
    <>
      <Header />
      <CarouselContainer />
      <GridExemplo data={exemploData}/>
      <Footer />
    </>
  );
}

export default App;
