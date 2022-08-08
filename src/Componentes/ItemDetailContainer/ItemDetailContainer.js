import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import Products from "../../API/Products.js";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore, query, where } from "firebase/firestore";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [items, setItems] = useState([]);

  const getProductById = async () => {
    const db = getFirestore();
    const productConfig = doc(db, "items", id);
    getDoc(productConfig).then((snapshot) => {
      console.log(snapshot.data());
      setItems(snapshot.data());
    });
  };

  useEffect(() => {
    // const getProductById = new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     resolve(Products.find((prod) => prod.id === id));
    //   }, 2000);
    // });
    // getProductById
    //   .then((data) => {
    //     setItems(data);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    getProductById();
  }, []);

  return <ItemDetail items={items} />;
};

export default ItemDetailContainer;
