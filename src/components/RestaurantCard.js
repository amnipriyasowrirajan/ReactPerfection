import { CDN_URL } from "../utils/constants";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
  // console.log(props);

  const { resData } = props;

  //console.log(resData);

  const { loggedInUser } = useContext(UserContext);

  //destructure it
  const {
    name,
    deliveryTime,
    cloudinaryImageId,
    cuisines,
    costForTwo,
    avgRating,
  } = resData?.info;
  return (
    <div
      data-testid="resCard"
      className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200"
    >
      <img
        className="rounded-lg"
        src={CDN_URL + cloudinaryImageId}
        alt="image of food"
      />
      <h3 className="font-bold py-4 text-lg"> {name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo} </h4>
      <h4>{deliveryTime} minutes</h4>
      <h4>User: {loggedInUser}</h4>
    </div>
  );
};

// Higher Order Components

// input is =>RestaurantCard ==>  output will be=>RestaurantCardDicountTag

export const withDiscountTag = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
          Discount
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
