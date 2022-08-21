import React from "react";
import CategoryDetail from "../CategoryDetail/CategoryDetail";
import "./CategoryContainer.css";

export const CategoryContainer = () => {
  return (
    <div className="category-container">
      <div className="category-container-titles">
        <h3 className="category-title">CATEGORIAS</h3>
        <h4 className="category-text">categorias</h4>
        <h4 className="category-text">categorias</h4>
      </div>
      <CategoryDetail />
    </div>
  );
};

export default CategoryContainer;
