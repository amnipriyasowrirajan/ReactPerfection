import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  // console.log(props);

  const { resData } = props;

  //destructure it
  const {
    name,
    deliveryTime,
    cloudinaryImageId,
    cuisines,
    costForTwo,
    avgRating,
  } = props.restaurant;
  return (
    <div className="restaurant-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="restaurant-logo"
        src={CDN_URL + cloudinaryImageId}
        alt="image of food"
      />
      <h3> {name}</h3>

      {/* .join(", ") */}
      <h4>{cuisines.join(", ")}</h4>
      <h4>{costForTwo}</h4>
      <h4>{avgRating} stars</h4>
      <h4> {deliveryTime} minutes</h4>

      {/* <h4>{resData.deliveryTime}in minutes</h4> */}
    </div>
  );
};

export default RestaurantCard;
