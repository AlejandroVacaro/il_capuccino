import React from "react";

const ItemDetail = ({ producto }) => {
    return (
        <div style={style.container}>
            <img alt={producto.nombre} src={producto.imagen} />
            <div>
                <h1>{producto.nombre}</h1>
                <h2>{producto.precio}</h2>
                <p>{producto.descripcion}</p>
            </div>
        </div>
    )
}

export default ItemDetail;

const style = {
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1)"
    }
}