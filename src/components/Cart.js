import { useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
import emptyCart from "../assets/empty_cart.png";
//import ItemList from "./ItemList";

const Cart = () => {
  // subscribe

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  // for clear use dispatch function
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="w-6/12 m-auto">
        <button
          className="p-2 m-2 bg-black text-white rounded-lg"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        {cartItems.length === 0 && (
          <div>
            {/* <img className="w-45 " src={require("../assets/empty_cart.png")} /> */}
            <img className="w-45" src={emptyCart} />
            <h1>Cart is empty. Add Items to the Cart!</h1>
          </div>
        )}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
