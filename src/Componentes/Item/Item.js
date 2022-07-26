import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
const Item = ({ id, title, description, price, image }) => {
  return (
    <div style={styles.item}>
      <img style={styles.itemImage} src={image} />
      <h2>{title}</h2>
      <div>{description}</div>
      <h1>{price}</h1>
      <h6>Nº{id}</h6>
      <Link to={`/details/${id}`}>
        <button style={styles.itemButton}>Ver producto</button>
      </Link>
    </div>
  );
};

export default Item;
