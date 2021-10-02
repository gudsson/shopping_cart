import * as types from "../constants/actionTypes";

const products = (state = [], action) => {
  switch (action.type) {
    case types.ADD_PRODUCT: {
      return [...state, action.payload.addedProduct];
    }
    case types.DELETE_PRODUCT: {
      return state.filter((p) => p._id !== action.payload.id);
    }
    case types.EDIT_PRODUCT: {
      return state.map((p) => {
        if (p._id === action.payload.newProduct._id) {
          return action.payload.newProduct;
        }
        return p;
      });
    }
    case types.INITIALIZE_PRODUCTS: {
      return action.payload.products;
    }
    default:
      return state;
  }
};

export default products;
