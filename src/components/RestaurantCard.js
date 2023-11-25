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
  } = resData?.info;
  return (
    <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
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
    </div>
  );
};

export default RestaurantCard;
