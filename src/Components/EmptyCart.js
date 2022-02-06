import { useNavigate } from "react-router-dom";
import cart from "../assets/cart.png";

const EmptyCart = () => {
  let navigate = useNavigate();

  return (
    <div className="empty-cart">
      <img src={cart} alt="empty-cart-img" />
      <button className="btn card-btn my-3" onClick={() => navigate("/")}>
        Go Back to Add Some Products
      </button>
    </div>
  );
};

export default EmptyCart;
