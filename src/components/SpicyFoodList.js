import React, { useState } from "react";
import { spicyFoods, getNewRandomSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);

  function handleAddFood() {
    const newFood = getNewRandomSpicyFood();
    const newFoodArray = [...foods, newFood]
    setFoods(newFoodArray);
  }

  function handleClick(id) {
    // add to array -----------(1)
    const newFoodArray = foods.filter((food) => food.id !== id);

    // remove from array ------------(2)
    // const newFoodArray = foods.filter((food) => food.id !== id);
    
    // update element in array ------------(3)
    // const newFoodArray = foods.map((food) => {
    //   if(food.id === id){
    //     return {...food, heatLevel: food.heatLevel + 1};
    //   }else{
    //     return food;
    //   }
    // });
    
    setFoods(newFoodArray);
    
    
  }

  const foodList = foods.map((food) => (
    <li key={food.id} onClick={() => handleClick(food.id)}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));

  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{foodList}</ul>
    </div>
  );
}

export default SpicyFoodList;
