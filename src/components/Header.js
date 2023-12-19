//import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import logoImage from "../assets/logo.png";
const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  // console.log(loggedInUser);

  //Subscribing  to the store using the Selector

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div className="flex justify-between bg-red-300  shadow-lg">
      <div className="logo-container ">
        {/* <img className="logo" src={require("../assets/logo.jpg")} /> */}
        {/* <img className="w-36" src={require("../assets/logo.png")} /> */}
        <img className="w-36" src={logoImage} alt="logo Image" />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4 ">
          <li className="px-4">Online Status:{onlineStatus ? "✅" : "🔴"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact"> Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 font-bold text-xl">
            <Link to="/cart">Cart -( {cartItems.length} items)</Link>
          </li>
          <button
            className="login"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>

          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
