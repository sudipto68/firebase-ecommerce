import { combineReducers } from "redux";
import { cartReducer } from "../Redux/cartReducer";

const rootReducer = combineReducers({
  cartReducer: cartReducer,
});

export default rootReducer;
