import ItemList from "../ItemList/ItemList";
import Products from "../../API/Products.js";
import { useState, useEffect } from "react";

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
  const [items, setItems] = useState([]);
  useEffect(() => {
    const getProducts = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Products);
      }, 2000);
    });
    getProducts
      .then((data) => {
        setItems(data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <>
      <h1 style={styles.itemStyles}>¡Hola {name}! Bienvenido a Munay</h1>
      <div style={styles.ItemListContainer}>
        <ItemList items={items} />
      </div>
    </>
  );
};

export default ItemListContainer;
