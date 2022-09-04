import NavBar from "./components/NavBar";
import CartContainer from "./components/CartContainer";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  selectAllCart,
  calculateTotals,
  getCartItems,
} from "./features/cart/cartSlice";
import Modal from "./components/Modal";

function App() {
  const { isOpen } = useSelector((state) => state.modal);
  const cartItems = useSelector(selectAllCart);
  const { isLoading } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems.cartItems, dispatch]);

  useEffect(() => {
    dispatch(getCartItems());
  }, [dispatch]);
  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <main>
      <NavBar />
      <CartContainer />
      {isOpen && <Modal />}
    </main>
  );
}

export default App;
