import "./App.scss";
import { useState } from "react";
import { PRODUCTS } from "./products";
import Home from "./components/home/Home";
import Cart from "./components/cart/Cart";
import Navbar2 from "./components/navbar/Navbar2";
import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";
import MyProvider from "./context/MyProvider";

function App() {
  return (
    <MyProvider>
      <div className="App flex">
        <Router>
          <Navbar2 />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            {/* <Route path="/" element={<>home</>}></Route> */}
            <Route path="/cart" element={<Cart />}></Route>
          </Routes>
        </Router>
      </div>
     </MyProvider>
  );
}
export default App;
