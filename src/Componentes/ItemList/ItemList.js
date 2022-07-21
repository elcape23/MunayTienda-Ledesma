import Item from "../Item/Item";
import { Link } from "react-router-dom";

const ItemList = ({ items }) => {
  return (
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
  );
};

//Aquí se tendría que hacer el < Link /> para
export default ItemList;
