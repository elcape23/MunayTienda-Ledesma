import { createContext, useEffect, useState } from "react";
import Products from "../../API/Products";
import CartContainer from "../../Componentes/CartContainer/CartContainer";

export const ItemsProvider = createContext();

const CartContext = ({ children }) => {
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
  return (
    <ItemsProvider.Provider>
      <CartContainer />
    </ItemsProvider.Provider>
  );
};

export default CartContext;
