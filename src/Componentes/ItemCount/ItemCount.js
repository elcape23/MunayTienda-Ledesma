import { createContext, useState } from "react";
import { Link } from "react-router-dom";
import "./ItemCount.css";

export const CantidadContext = createContext();

const ItemCount = ({ items, onAdd }) => {
  const [count, setCount] = useState(0);
  const incrementar = () => {
    count < items.cantidad ? setCount(count + 1) : alert("Sin stock");
  };
  const disminuir = () => {
    count > "0" ? setCount(count - 1) : console.log("error");
  };

  return (
    <div className="masterButton">
      <div className="countButton">
        <img
          src="https://dm2306files.storage.live.com/y4mNmExvOV8qbHn4A13ulQlNHNpifKdsu44WGotFh7bcEGyNVjUKgOWL04f9RP56tl0w4a5yocGRG-tQWvo5N0iw0iZP8ADVq0CekumFA5Kev93t4rywqdH-h1rsrtpswSQW3J_fdter1y5ACrihcTMDw-lpDxU981oR7ZjH43nC5ARyUBP5H6lkq0HgUwL3-y3?width=50&height=50&cropmode=none"
          className="addButton"
          onClick={disminuir}
        />
        <h2 className="countText">{count}</h2>
        <img
          src="https://dm2306files.storage.live.com/y4msc0yd6e8CDacc5AkhXWEbnnP6EH7R6c0Kbnq5B4_eOXUBL3QAObTnv4pCWA-pLvUGxReoPQ_cHczuflw9UHMEjTd6oIsGedMYfy-QKtW00FGwbyoWmz8HE-22-vafdKC9lILWiCWEBHX4SyVFCBRe9MVEWFvZnf-MxCNiiJ1wIX1xp5H6pn5wzdxebODwFQJ?width=50&height=50&cropmode=none"
          className="addButton"
          onClick={incrementar}
        />
      </div>
      <div className="addCart">
        <Link to={"/cart"}>
          <button className="addCartButton" onClick={() => onAdd(count)}>
            Agregar al Carrito
          </button>
        </Link>
        <h4 className="itemAmount">{items.cantidad} disponibles</h4>
      </div>
    </div>
  );
};

export default ItemCount;
