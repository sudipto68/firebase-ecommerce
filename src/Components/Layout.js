import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const Layout = (props) => {
  return (
    <>
      <Header />
      <div className="content">{props.children}</div>
      <Footer />
    </>
  );
};

export default Layout;
