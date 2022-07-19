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
  return items.map((items, index) => (
    <div style={styles.itemDetail}>
      <h1>{items.title}</h1>
      <h6>Producto Nº{index}</h6>
      <img src={items.image} style={styles.itemImage} />
      <h2 style={styles.itemButton}>{items.price}</h2>
    </div>
  ));
};

export default ItemDetail;
