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
                <a style={style.sumarRestar} className="btn-floating btn-small waves-effect waves-light"
                    onClick={handlerClickQuitar}>
                    <i className="material-icons">-</i>
                </a>
                <p style={style.contador}>{count}</p>
                <a style={style.sumarRestar} className="btn-floating btn-small waves-effect waves-light"
                    onClick={handlerClickAgregar}>
                    <i className="material-icons">+</i>
                </a>
            </div>
            <a style={style.botonAgregar} className="waves-effect waves-light btn-small  "
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
        justifyContent: "center",
        fontSize: "1.7rem"
    },
    contador: {
        marginTop: "0",
        marginBottom: "15px",
        paddingRight: "30px",
        paddingLeft: "30px"
    },
    sumarRestar: {
        backgroundColor: "rgb(218, 184, 139)",
    },
    botonAgregar: {
        backgroundColor: "rgb(3, 155, 229)",
    }
}