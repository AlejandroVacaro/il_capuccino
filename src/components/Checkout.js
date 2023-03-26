import React, { useContext, useState } from "react";
import { CartContext } from "./context/CartContext";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { dataBase } from "../firebase/firestore";
import { useHistory } from "react-router-dom";

const Checkout = () => {
    const { cart, totales, clearCart } = useContext(CartContext);
    const [cliente, setCliente] = useState({
        nombre: "",
        apellido: "",
        email: "",
        celular: "",
        domicilio: "",
    });
    const [mensaje, setMensaje] = useState("");
    const history = useHistory();

    const handleChange = (e) => {
        setCliente({
            ...cliente,
            [e.target.name]: e.target.value,
        });
    };

    const handlerClick = () => {
        const coleccionVentas = collection(dataBase, "ventas");
        addDoc(coleccionVentas, {
            cliente,
            item: cart,
            total: totales.total,
            time: serverTimestamp(),
        })
            .then(() => {
                clearCart();
                setMensaje("La compra se realizó con éxito");
                setTimeout(() => {
                    setMensaje("");
                    history.push("/");
                }, 3000);
            })
            .catch((error) => {
                console.error("Error adding document: ", error);
                setMensaje("Error al realizar la compra, intente nuevamente");
            });
    };

    return (
        <>
            <h1>Checkout</h1>
            <form>
                <label htmlFor="nombre">Nombre</label>
                <input
                    type="text"
                    name="nombre"
                    value={cliente.nombre}
                    onChange={handleChange}
                    required
                />
                <label htmlFor="apellido">Apellido</label>
                <input
                    type="text"
                    name="apellido"
                    value={cliente.apellido}
                    onChange={handleChange}
                    required
                />
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    name="email"
                    value={cliente.email}
                    onChange={handleChange}
                    required
                />
                <label htmlFor="celular">Celular</label>
                <input
                    type="tel"
                    name="celular"
                    value={cliente.celular}
                    onChange={handleChange}
                    required
                />
                <label htmlFor="domicilio">Domicilio</label>
                <input
                    type="text"
                    name="domicilio"
                    value={cliente.domicilio}
                    onChange={handleChange}
                    required
                />
                <button type="button" onClick={handlerClick}>
                    Comprar
                </button>
            </form>
            {mensaje && <p>{mensaje}</p>}
        </>
    );
};

export default Checkout;