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
            <div>
                <a
                    className="btn-floating btn-large waves-effect waves-light red"
                    onClick={handlerClickQuitar}
                >
                    <i className="material-icons">-</i>
                </a>
                <h2>{count}</h2>
                <a
                    className="btn-floating btn-large waves-effect waves-light red"
                    onClick={handlerClickAgregar}
                >
                    <i className="material-icons">+</i>
                </a>
            </div>
            <a
                className="waves-effect waves-light btn-large"
                onClick={agregarAlCarrito}
            >
                Agregar al carrito
            </a>
        </div>
    );
};

export default ItemCount;