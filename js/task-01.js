const categoryList = document.querySelector('#categories');
const categoryItems = categoryList.children;
const categoryItemArr = [...categoryItems];


console.log(`Number of categories: ${categoryItemArr.length}`);

const showCategoryInfo = categoryItemArr.forEach(categoryItem => {
    const categoryTitle = categoryItem.querySelector('h2').textContent;
    const categoryNestedItems = categoryItem.querySelectorAll('li');

    console.log(`Category: ${categoryTitle}`);
    console.log(`Elements: ${categoryNestedItems.length}`);
});
