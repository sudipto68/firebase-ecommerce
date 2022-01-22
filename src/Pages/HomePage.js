import React, { useState, useEffect } from "react";
import Layout from "../Components/Layout";
import { collection, getDocs } from "firebase/firestore";
import fireDb from "../firebaseConfig";
import Product from "../Components/Product";

const HomePage = () => {
  const [product, setProduct] = useState([]);

  //to add data to firestore for the first time
  // const addData = async () => {
  //   products.map(async (product) => {
  //     try {
  //       await addDoc(collection(fireDb, "products"), product); //fireDb firebase config file , 2nd one is the collection name, then product that we want to store to firestor
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   });
  // };

  //fetching product data from firestore database
  const getData = async () => {
    try {
      const products = await getDocs(collection(fireDb, "products"));
      const ProductList = [];
      products.forEach((doc) => {
        const obj = {
          id: doc.id,
          ...doc.data(),
        };
        ProductList.push(obj);
      });
      setProduct(ProductList);
    } catch (e) {
      alert(e);
    }
  };

  useEffect(() => {
    const abortController = new AbortController();
    getData();

    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <>
      <Layout>
        <div className="container">
          <div className="row">
            <h2>Our Products</h2>
            {product?.map((e) => (
              <Product data={e} key={e.id} />
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default HomePage;
