import React from "react";
export default function Categories({
  allCategories,
  filterItems,
  currentCategory
}) {
  return (
    <div className="categories">
      {allCategories.map((category, index) => {
        return (
          <h4
            className={category === currentCategory && "underline"}
            onClick={() => {
              filterItems(category);
            }}
            key={index}
          >
            {category}
          </h4>
        );
      })}
    </div>
  );
}
