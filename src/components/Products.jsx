import React, { useEffect, useState } from "react";
import { getDocuments, productsCollection } from "../config/firestore.js";
import Skeleton from "react-loading-skeleton";
import ProductPopup from "./ProductPopup"; // Import the ProductPopup compone
import "../style/products.css";

export const handleQuantityChange = (productId, delta, quantities, setQuantities) => {
  if ((quantities[productId] || 0) <= 0 && delta === -1) {
    return;
  }
  setQuantities((prevQuantities) => ({
    ...prevQuantities,
    [productId]: (prevQuantities[productId] || 0) + delta,
  }));
};

export default function Products() {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState(products);
  const [loading, setLoading] = useState(true);
  const [selectedProductId, setSelectedProductId] = useState(null); // State to manage the selected product ID
  const [quantities, setQuantities] = useState({});



  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocuments(productsCollection);
        const productsData = [];
        querySnapshot.forEach((doc) => {
          productsData.push({ id: doc.id, ...doc.data() });
        });
        setProducts(productsData);
        setFilter(productsData);
      } catch (error) {
        // Handle error if needed
      } finally {
        // After setting products, set loading to false
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const ShowProducts = () => {

    const handleProductClick = (productId) => {
      setSelectedProductId(productId); // Set the selected product ID when a product card is clicked
    };

    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="buttons d-flex justify-content-center mb-5 pb-2">
            <button
              className="btn btn-outline-dark me-2"
              onClick={() => filterProduct("n")}
            >
              פטריות הזיה
            </button>
            <button
              className="btn btn-outline-dark me-2"
              onClick={() => filterProduct("יין")}
            >
              יין
            </button>
            <button
              className="btn btn-outline-dark me-2"
              onClick={() => filterProduct("שמן")}
            >
              שמן בוטיק
            </button>
            <button
              className="btn btn-outline-dark me-2"
              onClick={() => filterProduct("יבשים")}
            >
              יבשים
            </button>
            <button
              className="btn btn-outline-dark me-2"
              onClick={() => filterProduct("תבלינים")}
            >
              תבלינים
            </button>
            <button
              className="btn btn-outline-dark me-2"
              onClick={() => setFilter(products)}
            >
              כל המוצרים
            </button>
          </div>
        </div>
        <div className="row justify-content-center">
        {filter.map((product, i) => (
  <div key={product.id} className="col-12 col-md-3 mb-4">
    <div
      onClick={() => handleProductClick(product.id)}
      onMouseEnter={() => {
        document.body.style.cursor = "pointer"; // Change cursor to pointer when mouse enters the card div
      }}
      onMouseLeave={() => {
        document.body.style.cursor = "auto"; // Change cursor back to default when mouse leaves the card div
      }}
      className="card h-100 text-center p-4"
      style={{
        position: "relative",
      }}
    >
      <div>

      <img
        src={product.imgUrl}
        className="card-img-top"
        alt={product.category}
        style={{ height: "250px" ,width:'200px'}}
      />
      </div>
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
))}

        </div>
      </div>
    );
  };

  const Loading = () => {
    return (
      <>
        <div className="col-12 col-md-3 mb-4">
          <Skeleton height={350} />
        </div>
        <div className="col-12 col-md-3 mb-4">
          <Skeleton height={350} />
        </div>
        <div className="col-12 col-md-3 mb-4">
          <Skeleton height={350} />
        </div>
        <div className="col-12 col-md-3 mb-4">
          <Skeleton height={350} />
        </div>
      </>
    );
  };

  const filterProduct = (cat) => {
    if (cat === "") {
      setFilter(products); // Reset filter to all products
    } else {
      const updateList = products.filter((pr) => pr.category === cat);
      setFilter(updateList);
    }
  };

  return (
    <div>
      <div className="container my-4 py-2">
        <div className="row">
          <div className="col-12 mb-2">
            <h1 className="display-6 fw-bolder text-center">המוצרים שלנו</h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
      <ProductPopup
        product={
          selectedProductId
            ? products.find((product) => product.id === selectedProductId)
            : null
        }
        closeProductPopup={() => setSelectedProductId(null)}
      />
    </div>
  );
}

