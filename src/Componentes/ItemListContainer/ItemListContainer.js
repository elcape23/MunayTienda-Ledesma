import ItemList from "../ItemList/ItemList";
import { useState, useEffect } from "react";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import "./ItemListContainer.css";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState("");

  const getProducts = async () => {
    const db = getFirestore();
    let q;
    if (filter) {
      q = query(collection(db, "items"), where("category", "==", filter));
    } else {
      q = query(collection(db, "items"));
    }
    await getDocs(q).then((snapshot) => {
      const dataExtraida = snapshot.docs.map((datos) => {
        return { ...datos.data(), id: datos.id };
      });
      setItems(dataExtraida);
    });
  };

  const setFilterValue = (e) => {
    const filter = e.target.value;
    setFilter(filter);
    getProducts();
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
  }, [filter]);

  return (
    <>
      <h1 className="welcome-title">¡Hola! Bienvenido a Munay</h1>
      <div className="list-container">
        <ItemList items={items} setFilterValue={setFilterValue} />
      </div>
    </>
  );
};

export default ItemListContainer;
