import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { dataBase } from "./../firebase/firestore";
import { doc, getDoc, collection } from "firebase/firestore";



const ItemDetailContainer = () => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {

    const productosStock = (dataBase, "stockProductos")
    const refDoc = doc(productosStock, id)
    getDoc(refDoc).then(
      (data) => {
        setProducts({
          id: data.id,
          ...data.data(),
        });
      }
    )
      .finally(() => {
        setLoading(false);
      })
  }, []);


  return (
    <>
      {<>{loading ?
        <div style={style.divCargandoP}>
          <h1 style={style.sitioCargandoP}>Cargando productos...</h1>
          <img style={style.imgCargandoP} src="https://media.istockphoto.com/id/1175851148/es/vector/personaje-de-la-taza-de-caf%C3%A9-kawaii-en-poses-meditada.jpg?s=612x612&w=0&k=20&c=kceTKZaDyLuFlb6LcSmnnWYpiHJxlWcOf19f0mMLQm0=" />
        </div>
        : <ItemDetail productos={products} />}</>}
    </>
  );

};

export default ItemDetailContainer;

const style = {
  divCargandoP: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  sitioCargandoP: {
    marginTop: "60px",
  },
  imgCargandoP: {
    width: "40%",
    height: "auto",
    borderRadius: "100%"
  }
}