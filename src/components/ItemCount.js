import React, { useState } from "react";
import M from "materialize-css";

const ItemCount = ({ agregar, stock = 5 }) => {
    const [count, setCount] = useState(1);

    const handlerClickAgregar = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    };

    const handlerClickQuitar = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    const agregarAlCarrito = () => {
        agregar(count);
        setCount(1);
        M.toast({ html: "Producto agregado al carrito!" });
    };

    return (
        <div>
            <div style={style.count}>
                <a className="btn-floating btn-large waves-effect waves-light deep-orange accent-2"
                    onClick={handlerClickQuitar}>
                    <i className="material-icons">-</i>
                </a>
                <h2 style={style.contador}>{count}</h2>
                <a className="btn-floating btn-large waves-effect waves-light deep-orange accent-2"
                    onClick={handlerClickAgregar}>
                    <i className="material-icons">+</i>
                </a>
            </div>
            <a className="waves-effect waves-light btn-large  light-blue lighten-1"
                onClick={agregarAlCarrito}>
                Agregar al carrito
            </a>
        </div>
    );
};

export default ItemCount;

const style = {
    count: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center"
    },
    contador: {
        marginTop: "0",
        marginBottom: "15px",
        paddingRight: "30px",
        paddingLeft: "30px"
    }
}