import Item from "../Item/Item";

const ItemList = ({ items }) => {
  console.log(items);
  return;
  items.map((title, image, description) => (
    <Item key={index} image={image} title={title} description={description} />
  ));
};

export default ItemList;
