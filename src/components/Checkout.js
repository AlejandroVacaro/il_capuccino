import React, { useContext, useState, useEffect, useRef } from "react";
import { CartContext } from "./context/CartContext";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { dataBase } from "../firebase/firestore";
import { useNavigate } from "react-router-dom";
import M, { Modal } from "materialize-css";

const Checkout = () => {
    const { cart, totales, vaciarCarrito } = useContext(CartContext);
    const [cliente, setCliente] = useState({
        nombre: "",
        apellido: "",
        email: "",
        celular: "",
        domicilio: "",
    });
    const [mensaje, setMensaje] = useState("");
    const modalRef = useRef(null);
    const navigate = useNavigate();

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
            .then((docRef) => {
                if (!window.closed) {
                    vaciarCarrito();
                    const mensaje = "La compra se realizó con éxito, su número de orden es: " + docRef.id;
                    setMensaje(mensaje);
                    if (modalRef.current) {
                        M.Modal.getInstance(modalRef.current).open();
                    }
                    setTimeout(() => {
                        if (!window.closed) {
                            setMensaje("");
                            navigate("/");
                        }
                    }, 5000);
                }
            })
            .catch((error) => {
                console.error("Error adding document: ", error);
                setMensaje("Error al realizar la compra, intente nuevamente");
            });
    };

    useEffect(() => {
        const elem = document.getElementById("modal1");
        const options = {
            onCloseEnd: () => {
                setMensaje("");
            },
            inDuration: 300,
        };
        const instance = M.Modal.init(elem, options);
    }, []);

    return (
        <>
            <div style={style.contenedorFormulario}>
                <div style={style.formulario}>
                    <p style={style.datosEnvio}>Datos de envío</p>
                    <form>
                        <label style={style.label} htmlFor="nombre">Nombre</label>
                        <input
                            style={style.input}
                            type="text"
                            name="nombre"
                            value={cliente.nombre}
                            onChange={handleChange}
                            required
                        />
                        <label style={style.label} htmlFor="apellido">Apellido</label>
                        <input
                            style={style.input}
                            type="text"
                            name="apellido"
                            value={cliente.apellido}
                            onChange={handleChange}
                            required
                        />
                        <label style={style.label} htmlFor="email">Email</label>
                        <input
                            style={style.input}
                            type="email"
                            name="email"
                            value={cliente.email}
                            onChange={handleChange}
                            required
                        />
                        <label style={style.label} htmlFor="celular">Celular</label>
                        <input
                            style={style.input}
                            type="tel"
                            name="celular"
                            value={cliente.celular}
                            onChange={handleChange}
                            required
                        />
                        <label style={style.label} htmlFor="domicilio">Domicilio</label>
                        <input
                            style={style.input}
                            type="text"
                            name="domicilio"
                            value={cliente.domicilio}
                            onChange={handleChange}
                            required
                        />
                        <div style={style.divBoton}>
                            <a style={style.enviarPedido} onClick={handlerClick} className="waves-effect waves-light btn-large modal-trigger" data-target="modal1">
                                Enviar pedido
                            </a>
                        </div>
                    </form>
                    {mensaje && (
                        <div id="modal1" className="modal">
                            <div className="modal-content">
                                <h4>Compra realizada</h4>
                                <p>{mensaje}</p>
                            </div>
                            <div className="modal-footer">
                                <a
                                    href="#!"
                                    className="modal-close waves-effect waves-green btn-flat"
                                >
                                    Cerrar
                                </a>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Checkout;

const style = {
    contenedorFormulario: {
        display: "flex",
        justifyContent: "center"
    },
    formulario: {
        width: "70%",
        marginTop: "80px",
        boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1)",
        backgroundColor: "white",
        padding: "2rem"
    },
    datosEnvio: {
        textAlign: "center",
        fontSize: "2rem"
    },
    enviarPedido: {
        backgroundColor: "rgb(3, 155, 229)",
        fontSize: "1.2rem",
        marginTop: "20px",
        marginBottom: "20px",
    },
    label: {
        fontSize: "1.2rem"
    },
    divBoton: {
        display: "flex",
        justifyContent: "center"
    },
    input: {
        fontSize: "1.2rem"
    }
}