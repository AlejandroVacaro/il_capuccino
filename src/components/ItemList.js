import React from "react";
import Item from "./Item";

export const ItemList = ({ productos }) => {
    return (
        <div style={style.divRow} className="row">
            {productos.map((producto) => (
                <Item key={producto.id} producto={producto} />
            ))}
        </div>
    )
}

export default ItemList;

const style = {
    divRow: {
        marginTop: "60px"
    }
}