import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import Products from "../../API/Products.js";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getProductById = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Products.find((prod) => prod.id === id));
      }, 2000);
    });
    getProductById
      .then((data) => {
        console.log(data);
        setItems(data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return <ItemDetail items={items} />;
};

export default ItemDetailContainer;
