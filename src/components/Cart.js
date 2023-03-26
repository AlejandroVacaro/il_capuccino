import React, { useContext } from "react";
import { CartContext } from "./context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, totales } = useContext(CartContext);

  return (
    <>
      {!cart.length ? (
        <div style={style.divCarritoVacio}>
          <p style={style.carritoVacio}>El carrito está vacío.</p>
          <img style={style.imgCarritoVacio} src="https://static.vecteezy.com/system/resources/previews/006/796/852/non_2x/sad-coffee-character-in-flat-style-illustration-coffee-cup-cartoon-character-with-funny-expression-free-vector.jpg" />
          <p style={style.volverInicio}><Link to={"/"}>Ir a inicio</Link></p>
        </div>
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
          <Link to="/checkout">
            <button>Finalizar compra</button>
          </Link>
        </>
      )}
    </>
  );

};

export default Cart;

const style = {
  divCarritoVacio: {
    marginTop: "100px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  carritoVacio: {
    fontSize: "45px",
    color: "#039be5",

  },
  volverInicio: {
    fontSize: "35px"
  },
  imgCarritoVacio: {
    width: "20%",
    height: "auto",
    borderRadius: "100%"
  }
}