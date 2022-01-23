import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Product = (props) => {
  const { image, title, price, id } = props.data;

  const { cartItems } = useSelector((state) => state.cartReducer);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems)); //adding cart data to lcoal storaage
  }, [cartItems]);

  const dispatch = useDispatch();
  const addToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product }); //adding product onlick to cart
  };

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
            <button
              className="btn card-btn text-center"
              onClick={() => addToCart(props.data)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
