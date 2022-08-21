import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Hearth from "../../Assets/hearth.png";
import "./Item.css";

const Item = ({ id, title, description, price, image }) => {
  return (
    <div className="item">
      <Link to={`/details/${id}`} className="item-link">
        <img src={image} className="item-image" />
        <h2 className="item-title">{title}</h2>
      </Link>
      <h1 className="item-price">ARS {price}</h1>
      <h6 className="item-id">#{id}</h6>
      <img src={Hearth} className="item-hearth" />
    </div>
  );
};

export default Item;
