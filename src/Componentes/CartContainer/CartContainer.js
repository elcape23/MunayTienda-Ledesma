import { useContext } from "react";
import { CartContext } from "../../Context/CartContext/CartContext";

const CartContainer = () => {
  const { cart } = useContext(CartContext);
  console.log(cart);
  return (
    <div>
      {cart.map((prod) => (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "70%",
            alignContent: "center",
          }}
        >
          <img src={prod.image} style={{ width: "50px" }} />
          <h1>{prod.title}</h1>
          <h3>{prod.cantidad}</h3>
          <h3>${prod.price}</h3>
          <h3>Total: ${prod.price * prod.cantidad}</h3>
          <h5>Eliminar</h5>
        </div>
      ))}
    </div>
  );
};

export default CartContainer;
