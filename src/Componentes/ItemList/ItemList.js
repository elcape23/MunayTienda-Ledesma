import Item from "../Item/Item";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const ItemList = ({ items, setFilterValue }) => {
  const createOrder = (e) => {
    const db = getFirestore();
    const orderCollectionQuery = collection(db, "orders");
    const order = {
      buyer: { name: "Juan", phone: "3814", email: "tester@tester" },
      items: items.map((products) => ({
        name: products.title,
        price: products.price,
      })),
      total: items.reduce((acc, products) => acc + products.price, 0),
    };
    addDoc(orderCollectionQuery, order).then((response) => {
      console.log(response);
    });
  };

  return (
    <>
      <div>
        <select onChange={(event) => setFilterValue(event)}>
          <option value="">Todos</option>
          <option value="bombacha">Bombacha</option>
          <option value="conjunto">Conjunto</option>
          <option value="pijama">Pijama</option>
        </select>
        <button onClick={(event) => createOrder(event)}>Crear orden</button>
      </div>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        {items.map((item) => (
          <Item
            id={item.id}
            title={item.title}
            price={item.price}
            description={item.description}
            image={item.image}
          />
        ))}
      </div>
    </>
  );
};

export default ItemList;
