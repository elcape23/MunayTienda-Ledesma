import Carrito from "../../Assets/Carrito.png";

const styles = {
  cardStyle: {
    width: "50%",
    marginRight: "30px",
  },
};

const CardWidget = () => {
  return (
    <div>
      <img style={styles.cardStyle} src={Carrito} className="Carrito" />
    </div>
  );
};

export default CardWidget;
