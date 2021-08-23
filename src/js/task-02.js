const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ul = document.querySelector("ul");
console.log(ul);

ingredients.forEach(ingredient => {
  // console.log(ingredient);
  let item = document.createElement("li");
  item.classList.add("item");
  item.textContent = ingredient;
  ul.append(item);
});

console.log(ul);