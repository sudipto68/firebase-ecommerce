import React, { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import fireDb from "../firebaseConfig";
import { useNavigate, useParams } from "react-router-dom";

const ProductInfo = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState("");

  //fetch or get single product using id
  const getProduct = async () => {
    try {
      const pRef = doc(fireDb, "products", id);
      const productInfo = await getDoc(pRef);
      productInfo && setProduct(productInfo);
      console.log(product);
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
    <>
      <button className="btn card-btn" onClick={() => navigate("/")}>
        Go Back
      </button>
      <div className="title">
        <h4>{product.title}</h4>
      </div>
    </>
  );
};

export default ProductInfo;
