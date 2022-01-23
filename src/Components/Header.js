import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const { cartItems } = useSelector((state) => state.cartReducer);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-navbar">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Firebase Ecommerce
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  User
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Orders
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Logout
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cart">
                  Cart({cartItems})
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
