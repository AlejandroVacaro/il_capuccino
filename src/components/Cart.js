import React, { useContext } from "react";
import { CartContext } from "./context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, totales } = useContext(CartContext);

  return (
    <>
      {!cart.length ? (
        <>
          <h1>El carrito está vacío.</h1>
          <h2><Link to={"/"}>Ir a inicio</Link></h2>
        </>
      ) : (
        <>
          <div>
            {cart.map((producto) => {
              return (
                <div key={producto.id}>
                  <h1>{producto.nombre}</h1>
                  <h2>Precio: {producto.precio}</h2>
                  <h2>Cantidad: {producto.cantidad}</h2>
                </div>
              );
            })}
          </div>
          <h1>TOTAL: {totales.total}</h1>
        </>
      )}
    </>
  );

};

export default Cart;