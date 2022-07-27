import { useContext } from "react";
import { CantidadContext } from "../ItemCount/ItemCount";

const CartContainer = () => {
  const { cantidad } = useContext(CantidadContext);
  console.log(cantidad);
  return <div>{cantidad}</div>;
};

export default CartContainer;
