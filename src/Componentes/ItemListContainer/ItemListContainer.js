const styles = {
  itemStyles: {
    color: "#b7b6b5",
    backgroundColor: "#edeae5",
    width: "50%",
    marginRight: "auto",
    marginLeft: "auto",
    textAlign: "center",
    marginTop: "50px",
    fontSize: "70px",
    borderRadius: "40px",
    paddingTop: "10px",
    paddingBottom: "10px",
  },
};

const ItemListContainer = ({ name }) => {
  return <h1 style={styles.itemStyles}>¡Hola {name}! Bienvenido a Munay</h1>;
};

export default ItemListContainer;
