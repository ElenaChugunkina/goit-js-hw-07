const categoriesItems = document.querySelectorAll('ul#categories > li.item');
console.log(`Number of categories: ${categoriesItems.length}`);


categoriesItems.forEach((element) => {
    const nameContent = element.querySelector("h2").textContent;
   
    console.log(`Category: ${nameContent}`);
    const calculateList = element.querySelectorAll('ul > li');
    console.log(`Elements: ${calculateList.length}`);
});
        