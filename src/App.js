import "./App.css";
import ItemDetailContainer from "./Componentes/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./Componentes/ItemListContainer/ItemListContainer";
import NavBar from "./Componentes/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartContainer from "./Componentes/CartContainer/CartContainer";
import Provider from "./Context/CartContext/CartContext";

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route
            path="category/:category"
            element={<ItemListContainer />}
          ></Route>
          <Route path="details/:id" element={<ItemDetailContainer />} />
          <Route path="cart" element={<CartContainer />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
