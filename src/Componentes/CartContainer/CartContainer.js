import { useContext } from "react";
import { CartContext } from "../../Context/CartContext/CartContext";

const CartContainer = () => {
  const { cart } = useContext(CartContext);
  console.log(cart.title);
  return (
    <div>
      <h2>{cart.cantidad}</h2>
    </div>
  );
};

export default CartContainer;
