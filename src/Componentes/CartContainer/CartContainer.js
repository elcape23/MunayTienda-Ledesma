import { useContext } from "react";
import { CartContext } from "../../Context/CartContext/CartContext";
import "./CartContainer.css";
import { Link } from "react-router-dom";

const CartContainer = () => {
  const { cart } = useContext(CartContext);
  console.log(cart);

  return (
    <>
      <h1 className="carrito-title">Carrito</h1>
      <div className="oders">
        {cart.map((prod) => (
          <div className="selected-prod">
            <img src={prod.image} className="img" />
            <h1>{prod.title}</h1>
            <h3>{prod.cantidad}</h3>
            <h3>${prod.price}</h3>
            <h3>Total: ${prod.price * prod.cantidad}</h3>
            <h5>Eliminar</h5>
          </div>
        ))}
      </div>
      <Link to="/" className="home-link">Seguir comprando</Link>
    </>
  );
};

export default CartContainer;
