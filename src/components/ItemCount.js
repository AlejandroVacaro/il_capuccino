import React, { useState, useEffect } from "react";
import M, { toast } from "materialize-css";
import { doc, getDoc } from "firebase/firestore";
import { dataBase } from "../firebase/firestore";

const ItemCount = ({ agregar, productoId}) => {

    const [count, setCount] = useState(1);
    const [stockDB, setStockDB] = useState(null);

    useEffect (() => {
        const datosStock = async () => {
            try {
                const docRef = doc(dataBase, "stockProductos", productoId);
                const docProd = await getDoc(docRef);
                if(docProd.exists()) {
                    const dataP = docProd.data();
                    setStockDB(dataP.stock);
                }
            } catch (error) {
                console.error ("Error al obtener el stock:", error);
            }
        };
        datosStock();
    }, [productoId]);

    const handlerClickAgregar = () => {
        if (count < stockDB) {
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
        M.toast({ html: "Producto agregado al carrito", classes: "light-blue darken-2 rounded"});
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
            <a style={style.botonAgregar} className="waves-effect waves-light btn-small"
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
    },
}