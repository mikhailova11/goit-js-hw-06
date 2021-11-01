const ulEl = document.querySelector('.categories');
const ulLength = document.querySelectorAll('.item').length;
console.log('Number of categories:', ulLength);


const titleEl = document.querySelectorAll('.item h2');
const categoriesLength = document.querySelectorAll('.item ul');

console.log('Category:', titleEl[0].textContent);
console.log('Elements:', categoriesLength[0]); 

console.log('Category:', titleEl[1].textContent);
console.log('Elements:', categoriesLength[1]); 

console.log('Category:', titleEl[2].textContent);
console.log('Elements:', categoriesLength[2]); 