import * as types from "../constants/actionTypes";
import ApiClient from "../ApiClient";

export const createProductSuccess = (addedProduct) => {
  return {
    type: types.ADD_PRODUCT,
    payload: {
      addedProduct,
    },
  };
};

export const deleteProductSuccess = (id) => {
  return {
    type: types.DELETE_PRODUCT,
    payload: {
      id,
    },
  };
};

export const editProductSuccess = (editedProduct) => {
  return {
    type: types.EDIT_PRODUCT,
    payload: {
      newProduct: editedProduct,
    },
  };
};

export const initializeProductsSuccess = (products) => {
  return {
    type: types.INITIALIZE_PRODUCTS,
    payload: {
      products,
    },
  };
};

export const createProduct = (newProduct) => {
  return async (dispatch) => {
    const addedProduct = await ApiClient.addProduct(newProduct).then(
      (response) => {
        return response.data;
      }
    );
    dispatch(createProductSuccess(addedProduct));
  };
};

export const deleteProduct = (id) => {
  return (dispatch) => {
    ApiClient.deleteProduct(id);
    dispatch(deleteProductSuccess(id));
  };
};

export const editProduct = (product, callback) => {
  return (dispatch) => {
    ApiClient.editProduct(product, (editedProduct) => {
      dispatch(editProductSuccess(editedProduct));
      if (callback) {
        callback();
      }
    });
  };
};

export const initializeProducts = () => {
  return (dispatch) => {
    ApiClient.getProducts((products) =>
      dispatch(initializeProductsSuccess(products))
    );
  };
};
