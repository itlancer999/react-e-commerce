import { combineReducers } from "redux";
import productReducers  from "./productReducers";
import cartReducer  from "./cartReducer";


export default combineReducers({
  products: productReducers,
  cart: cartReducer
});