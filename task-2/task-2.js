const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];
const ingredientsRef = document.querySelector("#ingredients");

const makeIngredientsList = (ingredient) => {
  const nameEl = document.createElement("li");
  nameEl.textContent = ingredient;
  return nameEl;
};
const IngredientsList = ingredients.map((ingredient) =>
  makeIngredientsList(ingredient)
);

ingredientsRef.append(...IngredientsList);

console.log(ingredientsRef);
