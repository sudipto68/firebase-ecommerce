import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import CartPage from "./Pages/CartPage";
import Login from "../src/Pages/Login";
import Registration from "../src/Pages/Registration";
import ProductInfo from "../src/Pages/ProductInfo";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/productinfo" element={<ProductInfo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
