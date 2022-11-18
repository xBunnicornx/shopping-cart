import React,{useState} from "react";
import Cart from "./Cart";
import Shop from "./Shop";
import "./index.css";
import Nav from "./Nav";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";







function App() {
  const [cart, setCart] = useState([]);
  function CartItem(data) {
    cart.push(data);
  }
  return (
    <Router>
      <div className="App">
        <Nav />

        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/shop" onDataUpdate={CartItem} element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </Router>
  );
}
const Home = () => {
  <div>Home Page</div>;
};
export default App;
