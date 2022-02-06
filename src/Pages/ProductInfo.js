import React, { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import fireDb from "../firebaseConfig";
import { useNavigate, useParams } from "react-router-dom";
import Layout from "../Components/Layout";
import Loading from "../Components/Loading";
import { useDispatch, useSelector } from "react-redux";

const ProductInfo = () => {
  const navigate = useNavigate();
  const [product, setProduct] = useState();
  let params = useParams();

  //fetch or get single product using id
  const getProduct = async () => {
    try {
      const productData = await getDoc(doc(fireDb, "products", params.id)); //getDoc to fetch specific product
      setProduct(productData.data());
    } catch (e) {
      alert(e);
    }
  };

  //call the fetch function
  useEffect(() => {
    const abortController = new AbortController();

    getProduct();

    return () => {
      abortController.abort(); // this is the clean up
    };
  }, []);

  const { cartItems } = useSelector((state) => state.cartReducer);

  const dispatch = useDispatch();
  const addToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <Layout>
      {/* <button className="btn card-btn" onClick={() => navigate("/")}>
        Go Back
      </button> */}

      {product ? (
        <div className="product-detail container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="title">
                <h5>{product?.title}</h5>
              </div>
              <img
                className="py-3"
                src={product.image}
                alt=""
                style={{ maxWidth: "400px", height: "400px", width: "100%" }}
              />
              <div className="description">
                <p>{product.description}</p>
                <h5>Price: {product.price}$</h5>
              </div>
              <div className="btns">
                <button
                  className="btn card-btn my-3"
                  onClick={() => navigate("/")}
                >
                  Go Back
                </button>
                <button
                  className="btn card-btn my-3 ms-2"
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </Layout>
  );
};

export default ProductInfo;
