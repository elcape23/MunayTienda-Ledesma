import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { useContext, useState } from "react";
import { CartContext } from "../../Context/CartContext/CartContext";
import { Link } from "react-router-dom";

const ItemDetail = ({ items }) => {
  const [cantidad, setCantidad] = useState(0);
  const { addToCart } = useContext(CartContext);
  const onAdd = (cantidad) => {
    setCantidad(cantidad);
    addToCart(items, cantidad);
  };

  // if (cantidad === 0) {
  //   return <h1>La cantidad es 0</h1>;
  // }

  return (
    <>
      <div className="div-detail">
        <img src={items.image} className="image-item" />
        <h1 className="item-title">{items.title}</h1>
        <h5 className="item-id">{items.id}</h5>
        <h2 className="item-description">{items.description}</h2>
        <h1>{items.precio}</h1>
      </div>
      <ItemCount items={items} onAdd={onAdd} />
      <Link to="/cart">Ir al carrito</Link>
    </>
  );
};

export default ItemDetail;
