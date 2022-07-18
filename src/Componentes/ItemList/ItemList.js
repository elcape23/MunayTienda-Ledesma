import Item from "../Item/Item";
import Imagen1 from "../../Assets/Producto1.png";
import Imagen2 from "../../Assets/Producto2.png";
import Imagen3 from "../../Assets/Producto3.png";

const items = [
  {
    image: Imagen1,
    title: "Pijama Estrellas",
    description:
      "Estos modelitos de pijama son babuchas, de algodón con lycra.",
  },
  {
    image: Imagen2,
    title: "Pijama Cielo",
    description: "Sus pantalones son rectos y súper cómodos.",
  },
  {
    image: Imagen3,
    title: "Pijama Vani",
    description:
      "Lo que más amamos de este modelito es su sencillez pero con sus detalles que lo hacen TODO",
  },
];

const ItemList = () => {
  return items.map((item, index) => (
    <Item
      key={index}
      image={item.image}
      title={item.title}
      description={item.description}
    />
  ));
};

export default ItemList;
