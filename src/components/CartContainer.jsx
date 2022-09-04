import CartItem from "./CartItem";
import { useSelector, useDispatch } from "react-redux";
import { selectAllCart } from "../features/cart/cartSlice";
import { openModal } from "../features/modal/modalSlice";
const CartContainer = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectAllCart);
  if (cartItems.amount < 1) {
    return (
      <section className="cart">
        <header>
          <h2>Your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
      <header>{cartItems.cartItems.length > 0 && <h2>Your bag</h2>}</header>
      <div>
        {cartItems.cartItems.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>${cartItems.total.toFixed(2)}</span>
          </h4>
        </div>
        <button onClick={() => dispatch(openModal())} className="btn clear-btn">
          Clear cart
        </button>
      </footer>
    </section>
  );
};
export default CartContainer;
