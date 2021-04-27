import "./styles.css";
import { useState } from "react";
import FoodItem from "./FoodItem";
import data from "./data.js";
import Categories from "./Categories";
export default function App() {
  const [items, setItems] = useState(data);
  const [currentCategory, setCurrentCategory] = useState("All");
  const allCategories = [
    "All",
    ...new Set(
      //Using Set to remove the duplicate Elements in the array of Categories
      data.map((element) => {
        return element.category;
      })
    )
  ];

  const filterItems = (category) => {
    if (category === "All") {
      setItems(data);
      setCurrentCategory("All");
      return;
    }
    const newItems = data.filter((item) => item.category === category);
    setItems(newItems);
    setCurrentCategory(category);
    return;
  };
  // console.log(items);

  return (
    <>
      <h1>Food Menu</h1>
      <main>
        <Categories
          currentCategory={currentCategory}
          allCategories={allCategories}
          filterItems={filterItems}
        />
        <div className="food-items">
          {items.map((item) => {
            return <FoodItem key={item.id} item={item} />;
          })}
        </div>
      </main>
    </>
  );
}
