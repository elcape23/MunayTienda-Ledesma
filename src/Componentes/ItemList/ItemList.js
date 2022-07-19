import Item from "../Item/Item";

const ItemList = ({ items }) => {
  return(
  items.map((items, index) => (
    <Item key={index} image={items.image} title={items.title} description={items.description} />
  ))
  );
};

export default ItemList;
