import React from "react";
import CategoryContainer from "../CategoryContainer/CategoryContainer";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import imageBackground from "../../Assets/img/semen-zhuravlev-5FuBbHonciU-unsplash.jpg";
import "./Home.css";

export const Home = () => {
  return (
    <>
      <div className="container">
        <img
          src={imageBackground}
          className="image-background"
          alt="background"
        />
        <h1 className="title">NUEVOS PRODUCTOS</h1>
      </div>
      <CategoryContainer />
      <ItemListContainer />
    </>
  );
};
