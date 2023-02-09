import React from "react";
import NavBar from "./NavBar";


const Usuario = () => {
  const userName = "Pepe";
  const userLastName = "Botella";
  return (
    <>
      <NavBar name={userName} lastName={userLastName} id="1" />
    </>
  );
};

export default Usuario;
