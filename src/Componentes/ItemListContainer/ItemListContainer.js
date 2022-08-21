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
    getProducts();
  }, [filter]);

  return (
    <>
      <div className="list-container">
        <div className="products-container-titles">
          <h3 className="products-title">PRODUCTOS</h3>
          <h4 className="products-text">productos</h4>
          <h4 className="products-text">productos</h4>
        </div>
        <ItemList items={items} setFilterValue={setFilterValue} />
      </div>
    </>
  );
};

export default ItemListContainer;
