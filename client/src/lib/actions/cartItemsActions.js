import ApiClient from "../ApiClient";
import * as types from "../constants/actionTypes";

export const addNewCartItemSuccess = (cartItem) => {
  return { type: types.ADD_CARTITEM, payload: { cartItem } };
};

export const updateExistingCartItemSuccess = (cartItem) => {
  return {
    type: types.INCREMENT_QUANTITY,
    payload: {
      cartItem,
    },
  };
};

export const clearCartSuccess = () => {
  return { type: types.CLEAR_CART };
};

export const initializeCartSuccess = (cartItems) => {
  return {
    type: types.INITIALIZE_CARTITEMS,
    payload: {
      cartItems,
    },
  };
};

export const addNewCartItem = (cartItem) => {
  return (dispatch) => {
    ApiClient.addProductToCart(cartItem, (cartItem) =>
      dispatch(addNewCartItemSuccess(cartItem))
    );
  };
};

export const updateExistingCartItem = (cartItem) => {
  return (dispatch) => {
    ApiClient.addProductToCart(cartItem, (cartItem) =>
      dispatch(updateExistingCartItemSuccess(cartItem))
    );
  };
};

export const clearCart = () => {
  return (dispatch) => {
    ApiClient.checkoutCart(() => dispatch(clearCartSuccess()));
  };
};

export const initializeCart = () => {
  return (dispatch) =>
    ApiClient.getCart((cartItems) =>
      dispatch(initializeCartSuccess(cartItems))
    );
};
