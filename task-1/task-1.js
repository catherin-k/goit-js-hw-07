const itemRef = document.querySelectorAll(".item");

console.log(`В списке ${itemRef.length} категории`);

itemRef.forEach((item) => {
  const titleRef = item.querySelector("h2").textContent;
  const productListRef = item.querySelectorAll("li");
  console.log(`Категория: ${titleRef}
Количество элементов: ${productListRef.length}`);
});
