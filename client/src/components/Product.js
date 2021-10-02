import { useState } from "react";
import { editProduct, deleteProduct } from "../lib/actions/productsAction";
import {
  addNewCartItem,
  updateExistingCartItem,
} from "../lib/actions/cartItemsActions";
import { useDispatch, useSelector } from "react-redux";
import Button from "./Button";
import Form from "./Form";

const Product = ({ product }) => {
  const { _id, title, price, quantity } = product;
  const [showEditForm, setEditForm] = useState(false);

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartItems);

  const addToCartHandler = (e) => {
    e.preventDefault();
    if (product.quantity === 0) return;
    product.quantity--;
    const cartItem = { productId: _id, title, price };

    if (cartItems.filter((item) => item.productId === _id).length === 1) {
      dispatch(updateExistingCartItem(cartItem));
    } else {
      dispatch(addNewCartItem(cartItem));
    }

    dispatch(editProduct(product));
  };

  const editProductHandler = (e, productObj) => {
    e.preventDefault();
    productObj._id = _id;
    if (productObj.quantity <= 0 || productObj.price < 0) {
      alert(`Can't put price or quantity less than 0`);
      return;
    }
    dispatch(
      editProduct(productObj, () => {
        setEditForm(false);
      })
    );
  };

  const cancelFormHandler = (e) => {
    e.preventDefault();
    setEditForm(false);
  };

  const deleteProductHandler = (e) => {
    e.preventDefault();
    dispatch(deleteProduct(_id));
  };

  return (
    <div className="product">
      <div className="product-details">
        <h3>{title}</h3>
        <p className="price">${price.toFixed(2)}</p>
        <p className={`quantity ${quantity ? "" : "none-left"}`}>
          {quantity} left in stock
        </p>
        <div className="actions product-actions">
          {showEditForm ? (
            <Form
              successBtn={{ onClick: editProductHandler, text: "Update" }}
              cancelBtn={{ onClick: cancelFormHandler, text: "Cancel" }}
              product={product}
            />
          ) : (
            <>
              <Button
                classStyles={`button add-to-cart ${
                  quantity === 0 ? "disabled" : ""
                }`}
                title={"Add to Cart"}
                onClick={
                  quantity ? addToCartHandler : (e) => e.preventDefault()
                }
              />
              <Button
                classStyles={"button edit"}
                title={"Edit"}
                onClick={(e) => setEditForm(true)}
              />
            </>
          )}
        </div>
        <Button
          classStyles={"delete-button"}
          title={"X"}
          onClick={deleteProductHandler}
        />
      </div>
    </div>
  );
};

export default Product;
