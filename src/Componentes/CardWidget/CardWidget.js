import Carrito from "../../Assets/Carrito.png";
import "./CardWidget.css";

const CardWidget = (props) => {
  return (
    <>
      {/* <h1>{items.cantidad}</h1> */}
      <img src={Carrito} className="carrito" />
    </>
  );
};

export default CardWidget;
