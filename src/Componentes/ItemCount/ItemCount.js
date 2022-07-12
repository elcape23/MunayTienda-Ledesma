const styles = {
  ItemCountStyle: {
    display: "flex",
    justifyContent: "center",
    marginLeft: "auto",
    marginRight: "auto",
    width: "100px",
    border: "solid black 1px",
    borderRadius: "10px",
  },
  NumberStyle: {
    width: "50px",
    textAlign: "center",
  },
  ButtonStyle: {
    backgroundColor: "transparent",
    color: "blue",
    border: "0px",
    alignContent: "center",
    fontStyle: "",
  },
  TextStyle: {
    color: "#333",
    textAlign: "center",
    fontSize: "20px",
  },
};

const ItemCount = (props) => {
  console.log(props);
  return (
    <>
      <h2 style={styles.TextStyle}>Carrito</h2>
      <div style={styles.ItemCountStyle}>
        <button onClick={props.disminuir} style={styles.ButtonStyle}>
          -
        </button>
        <h2 style={styles.NumberStyle}>{props.cantidad}</h2>
        <button onClick={props.incrementar} style={styles.ButtonStyle}>
          +
        </button>
      </div>
    </>
  );
};

export default ItemCount;
