import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter } from "react-router-dom";
import Home from "./components/pages/home/Home";
import About from "./components/pages/about/About";
import Product from "./components/pages/product/Product";
import Timer from "./components/pages/timer/Timer";
import Bestproduct from "./components/pages/best-product/Bestproduct";
import Footer from "./components/pages/footer/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Home />
        <About />
        <Product />
        <Timer />
        <Bestproduct />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
