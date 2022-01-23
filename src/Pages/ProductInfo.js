import React, { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import fireDb from "../firebaseConfig";
import { useNavigate, useParams } from "react-router-dom";
import Layout from "../Components/Layout";
import Loading from "../Components/Loading";

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

  return (
    <Layout>
      {/* <button className="btn card-btn" onClick={() => navigate("/")}>
        Go Back
      </button> */}

      {product ? (
        <div
          className="product-detail text-center d-flex flex-column align-items-center px-2"
          style={{ maxWidth: "600px", margin: "0 auto" }}
        >
          <div className="title">
            <h5>{product?.title}</h5>
          </div>
          <img
            className="py-3"
            src={product.image}
            alt=""
            style={{ maxWidth: "400px", height: "400px" }}
          />
          <div className="description">
            <p>{product.description}</p>
            <h3>Price: {product.price}$</h3>
          </div>
          <button className="btn card-btn my-3" onClick={() => navigate("/")}>
            Go Back
          </button>
        </div>
      ) : (
        <Loading />
      )}
    </Layout>
  );
};

export default ProductInfo;
