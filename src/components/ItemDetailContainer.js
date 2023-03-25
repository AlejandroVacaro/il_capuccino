import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { dataBase } from "./../firebase/firebase"; 
import { doc, getDoc, collection} from "firebase/firestore";



const ItemDetailContainer = () => {

  const [products, setProducts] = useState([]);
  const { id } = useParams();
  const resultado = productos.find((elemento) => elemento.id === id);

  useEffect(() => {
    const productosSelecionados = () => {
      const data = resultado;
      setProducts(data);
    };

    productosSelecionados();
  }, [id]);


  return (
    <>
      <ItemDetail productos={products} />
    </>
  );
};

export default ItemDetailContainer;