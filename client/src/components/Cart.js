import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, initializeCart } from "../lib/actions/cartItemsActions";
import CartTable from "./CartTable";
import Button from "./Button";

const Cart = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeCart());

    // axios.get("/api/cart").then((response) => {
    //   dispatch(initializeCart(response.data));
    // });
  }, [dispatch]);

  const handleCheckout = (e) => {
    dispatch(clearCart());
  };

  const cartItems = useSelector((state) => state.cartItems);

  return (
    <div className='cart'>
      <h2>Your Cart</h2>
      {cartItems.length ? (
        <CartTable />
      ) : (
        <>
          <p>Your cart is empty</p>
          <p>Total: $0</p>
        </>
      )}
      <Button
        classStyles={`button checkout ${
          cartItems.length === 0 ? "disabled" : ""
        }`}
        title={"Checkout"}
        onClick={
          cartItems.length === 0 ? (e) => e.preventDefault() : handleCheckout
        }
      />
    </div>
  );
};

export default Cart;
