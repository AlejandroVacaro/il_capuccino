import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { dataBase } from "../firebase/firestore";
import { getDocs, collection, query, where } from "firebase/firestore";


const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const { name } = useParams();

  useEffect(() => {

    const coleccionProductos = collection(dataBase, "stockProductos");
    const q = name ? query(coleccionProductos, where("categoria", "==", name)) : coleccionProductos;

    getDocs(q)
      .then((data) => {
        const lista = data.docs.map((producto) => {
          return {
            ...producto.data(),
            id: producto.id,
          };
        });
        setProducts(lista);
      })
      .catch(() => {
        setError(true);
      });

  }, [name]);

  return (
    <>
      {!error ? (
        <>
          {products.length ? (
            <ItemList productos={products} />
          ) : (
            <div style={style.divCargando}>
              <h1 style={style.sitioCargando}>Cargando productos...</h1>
              <img style={style.imgCargando} src="https://media.istockphoto.com/id/1175851148/es/vector/personaje-de-la-taza-de-caf%C3%A9-kawaii-en-poses-meditada.jpg?s=612x612&w=0&k=20&c=kceTKZaDyLuFlb6LcSmnnWYpiHJxlWcOf19f0mMLQm0=" />
            </div>
          )}
        </>
      ) : (
        <div style={style.divError}>
          <h1 style={style.sitioError}>Ocurrió un error, recargue la página.</h1>
          <img style={style.imgError} src="https://static.vecteezy.com/system/resources/previews/006/796/852/non_2x/sad-coffee-character-in-flat-style-illustration-coffee-cup-cartoon-character-with-funny-expression-free-vector.jpg" />
        </div>
      )}
    </>
  )
}


export default ItemListContainer;

const style = {
  divError: {
    display:"flex",
    flexDirection:"column",
    alignItems: "center"
  },
  sitioError: {
    marginTop: "60px",
  },
  imgError: {
    width:"40%",
    height: "auto",
    borderRadius: "100%"
  },
  divCargando: {
    display:"flex",
    flexDirection:"column",
    alignItems: "center"
  },
  sitioCargando: {
    marginTop: "60px",
  },
  imgCargando: {
    width:"40%",
    height: "auto",
    borderRadius: "100%"
  }
}