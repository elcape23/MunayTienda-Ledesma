import Item from "../Item/Item";

const ItemList = ({ items, setFilterValue }) => {
  return (
    <>
      <div>
        <select onChange={(event) => setFilterValue(event)}>
          <option value="">Todos</option>
          <option value="bombacha">Bombacha</option>
          <option value="conjunto">Conjunto</option>
          <option value="pijama">Pijama</option>
        </select>
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
