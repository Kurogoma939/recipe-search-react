import React from "react";
import style from "./recipe.module.css"

const Recipe = ({ title, calories, img, ingredients }) => {
  const calorie = Math.floor(calories);
  return (
    <div className={style.recipe}>
      <h1>{title}</h1>
      <p>{calorie}kcal</p>
      <p className={style.p}>~~~ ingredients ~~~</p>
      <ol>
        {ingredients.map(ingredient => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
      <img className={style.image} src={img} alt="" />
    </div>
  );
}

export default Recipe;