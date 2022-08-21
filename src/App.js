import "./App.css";
import ItemDetailContainer from "./Componentes/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./Componentes/ItemListContainer/ItemListContainer";
import NavBar from "./Componentes/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartContainer from "./Componentes/CartContainer/CartContainer";
import Provider from "./Context/CartContext/CartContext";
import { CategoryContainer } from "./Componentes/CategoryContainer/CategoryContainer";
import { Home } from "./Componentes/Home/Home";

function App() {
  return (
    <Provider>
      <BrowserRouter className="master-container">
        <NavBar />
        <Routes>
          <Route
            path="category/:category"
            element={<CategoryContainer />}
          ></Route>
          <Route path="/" element={<Home />} />
          <Route path="details/:id" element={<ItemDetailContainer />} />
          <Route path="cart" element={<CartContainer />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
