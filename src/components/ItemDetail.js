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

    const productoId = productos.id;

    return (
        <>
            <div style={style.containerDetail}>
                <img style={style.imgDetail} alt={productos.nombre} src={productos.imagen} />
                <div>
                    <h1 style={style.textDetail} >{productos.nombre}</h1>
                    <p style={style.textDetailP} >{productos.descripcion}</p>
                    <h2 style={style.textDetail} >${productos.precio}</h2>
                    <div style={style.botones}>
                        {botonPresionado ? (
                            <Link to="/cart" style={style.continuarCompra} className="waves-effect waves-light btn-small">
                                    Continuar compra
                            </Link>
                        ) : (
                            <ItemCount agregar={agregar} productoId={productoId}/>
                        )}
                    </div>
                </div>
            </div>

        </>

    )
}

export default ItemDetail;

const style = {
    containerDetail: {
        backgroundColor: "white",
        marginTop: "100px",
        display: "flex",
        flexDirection: "row",
        boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1)",
        marginRight: "10%",
        marginLeft: "10%",
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
        paddingBottom: "15px",
    },
    botones: {
        marginTop: "20px",
        marginBottom: "20px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center"
    },
    continuarCompra: {
        backgroundColor: "rgb(3, 155, 229)",
    }
}