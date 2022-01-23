import React from "react";
import { useNavigate } from "react-router-dom";

const Product = (props) => {
  const { image, title, price, id } = props.data;

  const navigate = useNavigate();
  return (
    <>
      <div className="col-md-4 my-3">
        <div className="product">
          <div className="p-2 product-card">
            <div className="text-center">
              <img
                src={image}
                className="card-img-top"
                style={{ width: "200px", height: "200px" }}
                alt=""
              />
            </div>
            <div className="card-body">
              <h5 className="card-title text-center">
                {title.substring(0, 15)}
              </h5>
            </div>
          </div>
          <div className="product-actions">
            <h2 className="price">Price: {price}$</h2>
            <button
              className="btn card-btn text-center"
              onClick={() => navigate(`productInfo/${id}`)}
            >
              See Details
            </button>
            <button className="btn card-btn text-center">Add to Cart</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
