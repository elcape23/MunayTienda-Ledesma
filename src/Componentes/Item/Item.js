const styles = {
  item: {
    backgroundColor: "#edeae5",
    borderRadius: "15px",
    color: "#000",
    width: "200px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontSize: "13px",
  },
  itemImage: {
    heigth: "150px",
    width: "200px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    borderRadius: "15px 15px 0 0",
  },
  itemButton: {
    backgroundColor: "#b7b6b5",
    border: "0px",
    paddingLeft: "15px",
    paddingRight: "15px",
    paddingTop: "10px",
    paddingBottom: "10px",
    borderRadius: "10px",
    alignSelf: "end",
    fontWeight: "600",
  },
};
const Item = ({ image, title, description }) => {
  return (
    <div style={styles.item}>
      <img style={styles.itemImage} src={image} />
      <h2>{title}</h2>
      <div>{description}</div>
      <button style={styles.itemButton}>Agregar</button>
    </div>
  );
};

export default Item;
