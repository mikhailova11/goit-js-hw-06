const itemsEl = document.querySelectorAll('.item');
console.log(`Number of categories`, itemsEl.length);

for (const item of itemsEl) {
    console.log(`Category: ${item.querySelector('h2').textContent}`);
    console.log(`Elements: ${item.querySelectorAll('li').length}`);
}