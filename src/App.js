import React from "react";
import NavBar from "./components/header/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer"
import Cart from "./components/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFoundPage from "./components/NotFoundPage";
import "./App.css";
import Checkout from "./components/Checkout";

const App = () => {
  const userName = "Pepe Botella";

  return (
    <>

      <BrowserRouter>
        <NavBar name={userName} />
        <div style={style.margenesGrles}>
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/categoria/:name" element={<ItemListContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </BrowserRouter >

    </>
  );
};

export default App;

const style = {
  greeting: {
    padding: "0.5rem 0 0 1rem",
    color: "#B7CADB",
  },
  margenesGrles: {
    paddingLeft: "10%",
    paddingRight: "10%"
  }
};