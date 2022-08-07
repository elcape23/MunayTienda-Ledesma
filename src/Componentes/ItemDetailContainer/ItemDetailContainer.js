import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import Products from "../../API/Products.js";
import { useParams } from "react-router-dom";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [items, setItems] = useState([]);

  const getProductById = async () => {
    const db = getFirestore;
    const q = query(collection(db, "items"), where("id", "=", id));
    await getDocs(q).then((snapshot) => {
      console.log(snapshot);
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
