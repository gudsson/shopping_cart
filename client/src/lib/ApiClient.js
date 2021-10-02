import axios from "axios";

const apiClient = {
  getProducts: function (callback) {
    return axios
      .get("/api/products")
      .then((res) => res.data)
      .then(callback)
      .catch((e) => console.log(e));
  },
  addProduct: function (productObj) {
    return axios.post("/api/products", productObj);
  },
  getCart: function (callback) {
    return axios
      .get("/api/cart")
      .then((res) => res.data)
      .then(callback)
      .catch((e) => console.log(e));
  },
  addProductToCart: function (product, callback) {
    return axios
      .post(`/api/cart`, product)
      .then((res) => res.data)
      .then(callback);
  },
  editProduct: function (product, callback) {
    return axios
      .put(`/api/products/${product._id}`, product)
      .then((res) => res.data)
      .then(callback)
      .catch((e) => console.log(e));
  },
  checkoutCart: function (callback) {
    return axios
      .post("/api/cart/checkout")
      .then((res) => res.data)
      .then(callback)
      .catch((e) => console.log(e));
  },
  deleteProduct: function (id, callback) {
    return axios
      .delete(`/api/products/${id}`)
      .then((res) => res.data)
      .then(callback)
      .catch((e) => console.log(e));
  },
};

export default apiClient;
