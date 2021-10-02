import { useSelector } from "react-redux"

const CartTable = () => {
  let price = 0;
  const cartItems = useSelector(state => state.cartItems)

  return (
    <>
      <table className="cart-items">
        <tbody><tr>
          <th>Item</th>
          <th>Quantity</th>
          <th>Price</th>
        </tr>
        {
          cartItems.map(item => {
            price += item.price * item.quantity
            return (
              <tr key={item._id}>
                <td>{item.title}</td>
                <td>{item.quantity}</td>
                <td>${item.price.toFixed(2)}</td>
              </tr>
            )
          })
        }

        <tr>
          <td colSpan="3" className="total">Total: ${price.toFixed(2)}</td>
        </tr>
      </tbody></table>
    </>
  );
};

export default CartTable;
