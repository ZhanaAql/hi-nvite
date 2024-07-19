import "./App.css";
import Hero from "./component/Hero";
import Catalog from "./page/Catalog";
import Footer from "./page/Footer";

function App() {
  return (
    <div className="App">
      <Hero /> 
      <Catalog />
      <Footer/>
    </div>
  );
}

export default App;
