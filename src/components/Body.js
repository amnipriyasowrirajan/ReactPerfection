import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import restaurantFoodList from "../utils/mockData";
//import the useState it like named import

// not using keys(not acceptable) <<<< index as key => use is it last result<<<<< unique (best practice)
const Body = () => {
  // Local state variable => super powerful variable
  const [listOfRestaurant, setListOfRestaurant] = useState(restaurantFoodList);
  // normal js i can update it like this
  // let list=[];
  // list =["Abc"];
  // const list = [];
  // list.push("hhghhjh");

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            // Filter Logic here
            const filteredList = listOfRestaurant.filter(
              (res) => res.avgRating > 4
            );
            setListOfRestaurant(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="restaurant-container">
        {/* map function you can use forloop also */}
        {listOfRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
