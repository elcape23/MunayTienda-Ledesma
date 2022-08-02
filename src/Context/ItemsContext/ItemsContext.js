import { createContext, useEffect, useState } from "react";
import Products from "../../API/Products";
import CartContainer from "../../Componentes/CartContainer/CartContainer";

const ItemsContext = ({ children }) => {
  const [items, setItems] = useState([]);
  console.log(items.title);
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
  return <CartContainer />;
};

export default ItemsContext;
