import { createContext, useState } from "react";

export const CartContext = createContext();

const Provider = (props) => {
  const [cart, setCart] = useState([]);
  const addToCart = (item, cantidad) => {
    console.log(item);
    if (isInCart(item.id)) {
      alert("Ya está en el carrito");
    } else {
      setCart([...cart, { ...item, cantidad }]);
    }
    // console.log({ ...item, cantidad });
    // console.log("Agregando al carrito");
  };

  const isInCart = (id) => {
    return cart.some((item) => item.id === id);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default Provider;
