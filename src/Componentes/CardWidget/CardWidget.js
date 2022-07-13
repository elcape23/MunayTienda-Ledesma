const styles = {
  cardStyle: {
    width: "50%",
    marginRight: "30px",
  },
};

const CardWidget = () => {
  return (
    <div>
      <img
        style={styles.cardStyle}
        src="./images/Carrito.png"
        className="Carrito"
      />
    </div>
  );
};

export default CardWidget;
