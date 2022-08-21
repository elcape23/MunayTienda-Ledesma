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
import imageBackground from "../../Assets/img/semen-zhuravlev-5FuBbHonciU-unsplash.jpg";

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
    getProducts();
  }, [filter]);

  return (
    <>
      <div className="container">
        <img src={imageBackground} className="image-background"/>
        <h1 className="title">NUEVOS PRODUCTOS</h1>
      </div>
      <div className="list-container">
        <ItemList items={items} setFilterValue={setFilterValue} />
      </div>
    </>
  );
};

export default ItemListContainer;
