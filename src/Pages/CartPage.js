import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../Components/Layout";
import { MdDelete } from "react-icons/md";
import EmptyCart from "../Components/EmptyCart";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";

const CartPage = () => {
  const { cartItems } = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();

  //remove one item
  const removeFromCart = (product) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: product });
  };

  //clear all item from cart
  const ClearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  //increment product
  const IncrementProduct = (product) => {
    dispatch({ type: "INCREMENT", payload: product }); //adding product onlick to cart
  };

  //decrement product
  const DecrementProduct = (product) => {
    dispatch({ type: "DECREMENT", payload: product }); //adding product onlick to cart
  };

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems)); //adding cart data to lcoal storaage
  }, [cartItems]);

  const total = cartItems.reduce((a, c) => a + c.quantity * c.price, 0); //calculating the total amount

  return (
    <Layout>
      <div className="cartpage container">
        {cartItems.length === 0 ? (
          <EmptyCart />
        ) : (
          <>
            <h2 className="mb-4">Shopping Cart Page</h2>
            <table className="table">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Amount</th>
                  <th>Action</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {cartItems?.map((item) => {
                  return (
                    <tr key={item.id}>
                      <td>
                        <img
                          src={item.image}
                          alt=""
                          style={{ height: "80px", width: "80px" }}
                        />
                      </td>
                      <td>
                        <h6>{item.title}</h6>
                      </td>
                      <td>
                        <span>
                          <AiOutlinePlus
                            className="icon"
                            onClick={() => IncrementProduct(item)}
                          />
                        </span>
                        <span className="quantity">{item.quantity}</span>
                        <span>
                          <AiOutlineMinus
                            className="icon"
                            onClick={() => DecrementProduct(item)}
                          />
                        </span>
                      </td>
                      <td>
                        <MdDelete
                          size={20}
                          color="red"
                          style={{ cursor: "pointer" }}
                          onClick={() => removeFromCart(item)}
                        />
                      </td>
                      <td>
                        <h6>
                          {item.quantity} X {item.price} ={" "}
                          {item.price * item.quantity}$
                        </h6>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <div className="total d-flex justify-content-end mt-4 fw-bold">
              Total Amount - {total} $
            </div>
            <button
              className="btn btn-danger mb-4 mt-2 mx-3"
              onClick={ClearCart}
            >
              Clear Cart
            </button>
            <button
              className="btn card-btn mb-4 mt-2"
              style={{ float: "right" }}
              onClick={() => alert("This Feature is under working")}
            >
              Place Order
            </button>
          </>
        )}
      </div>
    </Layout>
  );
};

export default CartPage;
