import {ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from "../actions/types";

const initialState = { items: []};
export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return { ...state, items: action.payload.cartItems };
     
    case REMOVE_FROM_CART:
      return { ...state, items: action.payload.cartItems };
      
    case CLEAR_CART:
      return initialState;
     
    default:
      return state;
      
  }
}