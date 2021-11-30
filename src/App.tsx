import React from 'react';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Button from "./components/buttons/Button";
import {Route, Routes} from "react-router-dom";
import Cart from "./components/cart/Cart";
import Checkout from "./components/checkout/Checkout";

function App() {
  return (
    <div className="app">
      <div className="container">
        <Header />
        <div className="content">
            <Routes>
                <Route path={'/cart'} element={<Cart />} />
                <Route path={'/checkout'} element={<Checkout />} />
                <Route path={'/order'} element={<Checkout />} />
            </Routes>
        </div>
       
      </div>
      <Footer />
    </div>
  );
}

export default App;
