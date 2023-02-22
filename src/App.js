import React from "react";
import NavBar from "./components/header/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer"
import Cart from "./components/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFoundPage from "./components/NotFoundPage";

import "./App.css";

const App = () => {
  const userName = "Pepe Botella";

  return (
    <>
      <BrowserRouter>
        <NavBar name={userName}/>
        <Routes>
          <Route path="/" element={<ItemListContainer/>} />
          <Route path="/categoria/:name" element={<ItemListContainer/>} />
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/producto/:id" element={<ItemDetailContainer/>} />
          <Route path="/*" element={<NotFoundPage/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

const style = {
  greeting: {
    padding: "0.5rem 0 0 1rem",
    color: "#B7CADB",
  },
};
