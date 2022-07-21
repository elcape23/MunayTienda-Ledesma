import Item from "../Item/Item";
import "./ItemDetail.css";

const ItemDetail = ({ items }) => {
  return (
    <div className="div-detail">
      <img src={items.image} className="image-item" />
      <h1 className="item-title">{items.title}</h1>
      <h5 className="item-id">{items.id}</h5>
      <h2 className="item-description">{items.description}</h2>
      <h1>{items.precio}</h1>
    </div>
  );
};

export default ItemDetail;
