import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ items }) => {
  const handleClick = (items) => {
  };
  return (
    <>
      <div className="div-detail">
        <img src={items.image} className="image-item" />
        <h1 className="item-title">{items.title}</h1>
        <h5 className="item-id">{items.id}</h5>
        <h2 className="item-description">{items.description}</h2>
        <h1>{items.precio}</h1>
      </div>
      <ItemCount items={items} handleClick={handleClick} />
    </>
  );
};

export default ItemDetail;
