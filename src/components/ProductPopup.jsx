import React, { useState } from "react";
import "../style/productPopUp.css";
import {handleQuantityChange } from './Products'

const ProductPopup = ({ product, closeProductPopup }) => {
  const [quantities, setQuantities] = useState({});
  if (!product) {
    return null; // Don't render the popup if no product is selected
  }
  const handleCardBackgroundClick = () => {
    closeProductPopup();
  };
  return (
    <div onClick={handleCardBackgroundClick} className="popup-container">
      <div className="row justify-content-center">
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="card h-100 text-center p-5"
          onMouseEnter={() => {
            document.body.style.cursor = "auto"; // Change cursor to pointer when mouse enters the card div
          }}
          onMouseLeave={() => {
            document.body.style.cursor = "pointer"; // Change cursor back to default when mouse leaves the card div
          }}
        >
          <img
            src={product.imgUrl}
            className="card-img-top"
            alt={product.category}
            style={{ height: "300px" }}
          />
          <div className="card-body d-flex flex-column justify-content-end align-items-end">
            <h5 className="card-title mb-0">{product.name}</h5>
            <p>{product.description}</p>
            <p className="card-text lead fw-bold">{product.price} ₪</p>
            <div className="btn-quantity">       
        <div className="quantity-buttons">
          <button
            className="btn btn-success"
            onClick={(e) => {
              e.stopPropagation();
              handleQuantityChange(product.id, 1,quantities, setQuantities);
            }}
          >
            +
          </button>
          <span>{quantities[product.id] || 0}</span>
          <button
            className="btn btn-danger"
            style={{width:'36px'}}
            onClick={(e) => {
              e.stopPropagation();
              handleQuantityChange(product.id, -1,quantities, setQuantities);
            }}

          >
            -
          </button>
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="btn btn-primary add-to-cart-button"
        >
          הוסף לעגלה
        </button>
        </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPopup;
