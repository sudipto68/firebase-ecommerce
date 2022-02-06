import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const Layout = (props) => {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">{props.children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
