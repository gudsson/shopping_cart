/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import { useSelector } from "react-redux";
import Button from "./Button";

const Form = ({ successBtn, cancelBtn, product }) => {
  const [title, setTitle] = useState(product ? product.title : "");
  const [price, setPrice] = useState(product ? product.price : "");
  const [quantity, setQuantity] = useState(product ? product.quantity : "");

  const products = useSelector((state) => state.products);
  const inputProduct = { title, price, quantity };

  const resetForm = () => {
    setTitle(product ? product.title : "");
    setPrice(product ? product.price : "");
    setQuantity(product ? product.price : "");
  };

  return (
    <div className="add-form visible">
      <p>
        <a className="button add-product-button">Add A Product</a>
      </p>
      <h3 data-testid="headboi">
        {product ? "Update Product" : "Add Product"}
      </h3>
      <form>
        <div className="input-group">
          <label htmlFor="product-name">Product Name</label>
          <input
            type="text"
            id="product-name"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label htmlFor="product-price">Price</label>
          <input
            type="text"
            id="product-price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label htmlFor="product-quantity">Quantity</label>
          <input
            type="text"
            id="product-quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>

        <div>
          <Button
            classStyles={"button actions form-actions"}
            title={successBtn.text}
            onClick={(e) =>
              successBtn.onClick(e, inputProduct, products, resetForm)
            }
          />
          <Button
            classStyles={"button actions form-actions"}
            title={cancelBtn.text}
            onClick={(e) => cancelBtn.onClick(e, resetForm)}
          />
        </div>
      </form>
    </div>
  );
};

export default Form;
