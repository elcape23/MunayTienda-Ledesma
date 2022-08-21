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

  return (
    <>
      <div className="item-detail-div">
        <img src={items.image} className="item-detail-image" />
        <h1 className="item-detail-title">{items.title}</h1>
        <h5 className="item-detail-id">{items.id}</h5>
        <h2 className="item-detail-description">{items.description}</h2>
        <h1>{items.precio}</h1>
      </div>
      <ItemCount items={items} onAdd={onAdd} />
      <Link to="/cart">Ir al carrito</Link>
    </>
  );
};

export default ItemDetail;
