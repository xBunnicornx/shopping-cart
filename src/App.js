import React,{useState} from "react";
import Cart from "./Cart";
import Shop from "./Shop";
import "./index.css";
import Nav from "./Nav";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";


const Home = () => {
  return <div>Homepage</div>;
};

function App() {
  const [cart, setCart] = useState([]);

  function onAddToCart(item) {
    setCart([item, ...cart]);
  }

  return (
    <Router>
      <div className="App">
        <Nav cart={cart} />

        <Routes>
          <Route path="/shop" element={<Shop onDataUpdate={onAddToCart} />} />
          <Route path="/cart" element={<Cart cart={cart} />} />
          <Route path="/" element={<Home/>} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;
