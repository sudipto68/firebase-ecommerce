import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../Components/Layout";
import { MdDelete } from "react-icons/md";
import EmptyCart from "../Components/EmptyCart";

const CartPage = () => {
  const { cartItems } = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();
  const removeFromCart = (product) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: product });
  };
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems)); //adding cart data to lcoal storaage
  }, [cartItems]);

  const total = cartItems.reduce((a, c) => a + c.price, 0); //calculating the total amount

  return (
    <Layout>
      <div className="cartpage container">
        {cartItems.length === 0 ? (
          <EmptyCart />
        ) : (
          <>
            <table className="table">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Action</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => {
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
                        <MdDelete
                          size={20}
                          color="red"
                          style={{ cursor: "pointer" }}
                          onClick={() => removeFromCart(item)}
                        />
                      </td>
                      <td>
                        <h6>{item.price} $</h6>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <div className="total d-flex justify-content-end mt-4">
              Total Amount - {total} $
            </div>
            <button
              className="btn card-btn mb-4 mt-2"
              style={{ float: "right" }}
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
