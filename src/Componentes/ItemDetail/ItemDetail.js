const styles = {
  itemDetail: {
    backgroundColor: "#f4dacd",
    width: "40vw",
    marginLeft: "auto",
    marginRight: "auto",
  },
  itemImage: {
    heigth: "auto",
    width: "100%",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  },
  itemButton: {
    color: "white",
    backgroundColor: "#373435",
  },
};

const ItemDetail = ({ items }) => {

  return items.map((item) => (
    <div style={styles.itemDetail}>
      <h1>{item.title}</h1>
      <h6>Producto Nº{item.id}</h6>
      <img src={item.image} style={styles.itemImage} />
      <h2 style={styles.itemButton}>{item.price}</h2>
    </div>
  ));
};

export default ItemDetail;
