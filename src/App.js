import Navbar from "./Components/Navbar";
import ProductsList from "./Components/ProductsList";
import Slider from "./Components/Slider";
import { Routes, Route } from "react-router-dom";
import About from "./Components/About";
import ProductDetatils from "./Components/ProductDetatils";


// {/* 1- routing - API Rueqst and give data - {uesState, useEffect} - function Component -Hooks */}
function App() {
  return (
    <div className="App"> 
    <Navbar/>
    <Routes>
      <Route path="/" element= {<>
        <Slider/>
    <ProductsList/>
      </>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/product/:productId" element={<ProductDetatils/>}/>
    </Routes>
    </div>
  );
}

export default App;
