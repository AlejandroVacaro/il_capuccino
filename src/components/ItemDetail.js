import React, { useState, useContext } from "react";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import { CartContext } from "./context/CartContext";


const ItemDetail = ({ productos }) => {

    const [botonPresionado, setBotonPresionado] = useState(false);
    const { agregarProductos } = useContext(CartContext);

    const agregar = (count) => {
        setBotonPresionado(true);
        agregarProductos(productos, count);
    };

    return (
        <>
            <div style={style.containerDetail}>
                <img style={style.imgDetail} alt={productos.nombre} src={productos.imagen} />
                <div>
                    <h1 style={style.textDetail} >{productos.nombre}</h1>
                    <h2 style={style.textDetail} >${productos.precio}</h2>
                    <p style={style.textDetailP} >{productos.descripcion}</p>
                </div>
            </div>
            <div style={style.botones}>
                {botonPresionado ? (
                    <Link to="/cart">
                        <button>Continuar compra</button>
                    </Link>
                ) : (
                    <ItemCount agregar={agregar} />
                )}
            </div>
        </>

    )
}

export default ItemDetail;

const style = {
    containerDetail: {
        marginTop: "100px",
        display: "flex",
        flexDirection: "row",
        boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1)",
        marginRight: "20%",
        marginLeft: "20%",
    },
    imgDetail: {
        width: "50%",
        height: "auto",
    },
    textDetail: {
        fontSize: "2rem",
        paddingRight: "10px",
        paddingLeft: "10px",
    },
    textDetailP: {
        paddingRight: "10px",
        paddingLeft: "10px",
        paddingBottom: "15px"
    },
    botones: {
        marginTop: "20px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center"
    }
}