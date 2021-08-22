const list = document.querySelectorAll("li.item");
const howManyLiItem = list.length;
console.log(`Number of categories: ${howManyLiItem}`);

const categories = list.forEach(item => {
    const category = item.querySelector("h2").innerHTML;
    const categoryElementsNum = item.querySelectorAll("li").length;
    console.log(`Category: ${category}`);
    console.log(`Elements: ${categoryElementsNum}`);
});