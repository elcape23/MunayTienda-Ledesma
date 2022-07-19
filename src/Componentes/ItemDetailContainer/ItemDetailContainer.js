import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import Products from "../../API/Products.js";

const ItemDetailContainer = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const getProducts = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Products);
      }, 2000);
    });
    getProducts
      .then((data) => {
        setItems(data);
      })
      .catch((error) => {
        console.log(error);
      });
  });
  return (
    <>
      <ItemDetail items={items} />
    </>
  );
};

export default ItemDetailContainer;
