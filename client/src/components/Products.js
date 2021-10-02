import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import {
  initializeProducts,
  createProduct,
} from "../lib/actions/productsAction";
import Button from "./Button";
import Form from "./Form";
import Product from "./Product";

const Products = () => {
  const [showForm, setShowForm] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeProducts());
  }, [dispatch]);

  const addProductHandler = (e, productObj, productsArr, callback) => {
    e.preventDefault();
    if (productObj.quantity <= 0 || productObj.price < 0) {
      alert("Cant put price or quantity less than 0");
      return;
    }

    dispatch(createProduct(productObj));
    if (callback) {
      callback();
      setShowForm(false);
    }
  };

  const closeAddProductHandler = (e, callback) => {
    setShowForm(false);
    callback();
  };

  const products = useSelector((state) => state.products);
  return (
    <div className="product-listing">
      <h2>Products</h2>
      {products.map((product) => (
        <Product key={product._id} product={product} />
      ))}
      {showForm ? (
        <Form
          successBtn={{ onClick: addProductHandler, text: "Add" }}
          cancelBtn={{ onClick: closeAddProductHandler, text: "Cancel" }}
        />
      ) : (
        <Button
          classStyles={"button actions form-actions"}
          title={"Add a Product"}
          onClick={(e) => setShowForm(true)}
        />
      )}
    </div>
  );
};

export default Products;
