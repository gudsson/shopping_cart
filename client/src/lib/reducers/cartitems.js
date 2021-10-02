import * as types from "../constants/actionTypes";

const cartItems = (state = [], action) => {
  switch (action.type) {
    case types.ADD_CARTITEM: {
      return [...state, action.payload.cartItem];
    }
    case types.INCREMENT_QUANTITY: {
      return state.map((item) => {
        return item._id === action.payload.cartItem._id
          ? action.payload.cartItem
          : item;
      });
    }
    case types.CLEAR_CART: {
      return [];
    }
    case types.INITIALIZE_CARTITEMS: {
      return action.payload.cartItems;
    }
    default:
      return state;
  }
};

export default cartItems;
