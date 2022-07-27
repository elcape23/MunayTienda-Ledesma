import Carrito from "../../Assets/Carrito.png";

const styles = {
  cardStyle: {
    width: "50%",
    marginRight: "30px",
  },
};

const CardWidget = (props) => {
  return (
    <div>
      {/* <h1>{items.cantidad}</h1> */}
      <img style={styles.cardStyle} src={Carrito} className="Carrito" />
    </div>
  );
};

export default CardWidget;
