import Item from "../Item/Item";
import { Link } from "react-router-dom";

const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <Link
          key={item.id}
          to={`details/${item.id}`}
          style={{ textDecoration: "none" }}
        >
          <Item
            title={item.title}
            price={item.price}
            description={item.description}
            image={item.image}
          />
        </Link>
      ))}
    </div>
  );
};

//Aquí se tendría que hacer el < Link /> para
export default ItemList;
