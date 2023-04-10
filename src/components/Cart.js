import React, { useContext } from "react";
import { CartContext } from "./context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, totales, eliminarProducto, vaciarCarrito } = useContext(CartContext);

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
          <div style={style.detalleCarrito}>
            <p style={style.pDetalle}>Detalle de su compra:</p>
            <div style={style.detalleCompra}>
              {cart.map((producto) => {
                return (
                  <div key={producto.id} style={style.detalleProducto}>
                    <div style={style.divImgCarrito}>
                      <img src={producto.imagen} style={style.imgCarrito} />
                    </div>
                    <p style={style.pProductoNombre}>{producto.nombre}</p>
                    <p style={style.pProducto}>Cantidad: {producto.cantidad}</p>
                    <p style={style.precioProducto}>$ {producto.precio}</p>
                    <a className="waves-effect waves-light btn-small"
                      onClick={() => eliminarProducto(producto.id)}>
                      Eliminar
                    </a>
                  </div>
                );
              })}
            </div>
            <a style={style.vaciarCarrito} className="waves-effect waves-light btn-small"
              onClick={vaciarCarrito}>
              Vaciar carrito
            </a>
            <p style={style.pTotal}>TOTAL: ${totales.total}</p>
            <Link to="/checkout" style={style.finalizarCompra} className="waves-effect waves-light btn-large">
              Finalizar compra
            </Link>
          </div>
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
  },
  detalleCarrito: {
    backgroundColor: "white",
    boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1)",
    marginTop: "60px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  imgCarrito: {
    width: "100%",
    height: "auto"
  },
  pProducto: {
    fontSize: "1.2rem"
  },
  detalleProducto: {
    display: "flex",
    justifyContent: "spaceBetween",
    gap: "50px",
    padding: "2rem",
    borderBottom: "solid 1px grey"
  },
  divImgCarrito: {
    width: "100px",
  },
  finalizarCompra: {
    backgroundColor: "rgb(3, 155, 229)",
    fontSize: "1.2rem",
    marginBottom: "20px",
  },
  pDetalle: {
    fontSize: "2rem",
    marginBottom: "40px",
    marginTop: "20px"
  },
  pTotal: {
    fontSize: "2rem",
    marginBottom: "20px",
    marginTop: "20px",
    fontWeight: "bold"
  },
  precioProducto: {
    fontSize: "1.5rem",
    marginLeft: "auto"
  },
  pProductoNombre: {
    fontWeight: "bold",
    fontSize: "1.5rem"
  },
  detalleCompra: {
    with: "auto",
    height: "400px",
    overflowY: "scroll"
  }
}