import { useState } from "react";
import "./App.css";
import ItemCount from "./Componentes/ItemCount/ItemCount";
import ItemListContainer from "./Componentes/ItemListContainer/ItemListContainer";
import NavBar from "./Componentes/NavBar/NavBar";

function App() {
  const [cantidad, setCantidad] = useState(0);
  const incrementar = () => {
    setCantidad(cantidad + 1);
  };
  const disminuir = () => {
    setCantidad(cantidad - 1);
  };
  return (
    <>
      <NavBar />
      <ItemListContainer name="Rosendo" />
      <ItemCount
        cantidad={cantidad}
        incrementar={incrementar}
        disminuir={disminuir}
      />
    </>
  );
}

export default App;
