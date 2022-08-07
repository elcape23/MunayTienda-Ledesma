import ItemList from "../ItemList/ItemList";
import { useState, useEffect } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";

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

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const getProducts = async () => {
    const db = getFirestore();
    await getDocs(collection(db, "items")).then((snapshot) => {
      const dataExtraida = snapshot.docs.map((datos) => datos.data());
      setItems(dataExtraida);
      console.log(dataExtraida);
    });
  };

  useEffect(() => {
    // const getProducts = new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     resolve(Products);
    //   }, 2000);
    // });
    // getProducts
    //   .then((data) => {
    //     setItems(data);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    getProducts();
  }, []);

  return (
    <>
      <h1 style={styles.itemStyles}>¡Hola! Bienvenido a Munay</h1>
      <div style={styles.ItemListContainer}>
        <ItemList items={items} />
      </div>
    </>
  );
};

export default ItemListContainer;
