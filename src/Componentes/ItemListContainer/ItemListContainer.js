import ItemList from "../ItemList/ItemList";

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
  ItemListContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    margin: "0 auto",
  },
};

const ItemListContainer = ({ name }) => {
  return (
    <>
      <h1 style={styles.itemStyles}>¡Hola {name}! Bienvenido a Munay</h1>
      <div style={styles.ItemListContainer}>
        <ItemList />
      </div>
    </>
  );
};

export default ItemListContainer;
