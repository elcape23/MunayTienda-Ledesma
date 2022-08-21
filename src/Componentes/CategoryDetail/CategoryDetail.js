import React from "react";
import "./CategoryDetail.css";
import Hearth from "../../Assets/hearth.png";
import Arrow from "../../Assets/arrow.png";
import BraImage from "../../Assets/img/bra-category.jpg";

export const CategoryDetail = () => {
  return (
    <div className="category-detail-container">
      <div className="category-image-container">
        <img src={BraImage} className="bra-category" />
        <img src={Arrow} className="arrow-category" />
        <h4 className="category-detail-title">Bombachas</h4>
      </div>
    </div>
  );
};

export default CategoryDetail;
