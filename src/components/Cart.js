import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { collection, addDoc, serverTimestamp, doc, updateDoc } from "firebase/firestore";
import { dataBase } from "../firebase/firestore";

const Cart = () => {
  const { cart, totales } = useContext(CustomContext);

  const cliente = {
    nombre: "",
    apellido: "",
    email: "",
    celular: "",
    domicilio: "",
  }

  const handlerClickVentas = () => {
    const coleccionVentas = collection(dataBase, "ventas");
    addDoc(
      coleccionVentas, {
      cliente,
      item: cart,
      total: totales.total,
      time: serverTimestamp(),
    }
    )
      .then(result => console.log(result.id))
  };

  const handlerStock = () => {
    const docReference = doc(dataBase, "stockProductos", product.id);
    updateDoc(docReference, { stock: product.stock - product.cantidad})
  };

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
          <button onClick={handlerStock}>Finalizar compra</button>
        </>
      )}
    </>
  );

};

export default Cart;