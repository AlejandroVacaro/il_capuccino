import React from "react";
import NavBar from "./components/header/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

const App = () => {
  const userName = "Alejandro Vacaro";

  return (
    <>
      <BrowserRouter>
        <NavBar name={userName}/>
        <Routes>
          <Route path="/" element={<ItemListContainer/>} />
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
