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
const Item = ({ items }) => {
  const [itemDetail, setItemDetail] = useState();

  const getItem = (event, id) => {
    console.log(id);
  };
  return (
    <div style={styles.item}>
      <img style={styles.itemImage} src={items.image} />
      <h2>{items.title}</h2>
      <div>{items.description}</div>
      <h1>{items.price}</h1>
      <h6>Nº{items.id}</h6>
      <button
        style={styles.itemButton}
        onClick={(event) => getItem(event, items.id)}
      >
        Agregar
      </button>
    </div>
  );
};

export default Item;
