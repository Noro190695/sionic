import React from 'react';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import {Route, Routes} from "react-router-dom";
import Cart from "./components/cart/Cart";
import Checkout from "./components/checkout/Checkout";
import Products from './components/products/Products';
import NoteFound from './404';
function App() {
  return (
    <div className="app">
      <div className="container">
        <Header />
        <div className="content">
            <Routes>
                <Route path={'/'} element={<Products />} />
                <Route path={'/cart'} element={<Cart />} />
                <Route path={'/checkout'} element={<Checkout />} />
                <Route path={'/order'} element={<Checkout />} />
                <Route path='*' element={<NoteFound />} />
            </Routes>
        </div>
       
      </div>
      <Footer />
    </div>
  );
}

export default App;
