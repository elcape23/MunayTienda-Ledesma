import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [items, setItems] = useState([]);

  const getProductById = async () => {
    const db = getFirestore();
    const productConfig = doc(db, "items", id);
    await getDoc(productConfig).then((snapshot) => {
      setItems({ ...snapshot.data(), id: id });
    });
  };

  useEffect(() => {
    getProductById();
  }, []);

  return <ItemDetail items={items} />;
};

export default ItemDetailContainer;
