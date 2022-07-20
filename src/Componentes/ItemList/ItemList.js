import Item from "../Item/Item";

const ItemList = ({ items }) => {
  return items.map((items) => <Item items={items} />);
};

export default ItemList;
