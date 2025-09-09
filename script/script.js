


fetch('https://openapi.programming-hero.com/api/categories')
  .then(res => res.json())
  .then(data => displayCategories(data.categories))
  .catch(err => console.error('Error fetching categories:', err));

  function displayCategories(categories) {
  const container = document.getElementById('category-list');
  container.innerHTML = ''; // Clear previous content

  categories.forEach(category => {
    const div = document.createElement('div');
    div.className = 'p-4 shadow-sm bg-white hover:bg-green-50 transition';
    div.innerHTML = `
      <h3 class="font-bold text-green-800 text-lg mb-1">${category.category_name}</h3>
      <p class="text-gray-600 text-sm"></p>
    `;
    container.appendChild(div);
  });
}



     async function fetchFruitTrees() {
      try {
        const response = await fetch('https://openapi.programming-hero.com/api/category/1');
        const result = await response.json();
        const trees = result.plants; // ✅ Correct key from API

        const container = document.getElementById('treeContainer');
        container.innerHTML = '';

        trees.forEach(tree => {
          const card = document.createElement('div');
          card.className = 'bg-white rounded-lg shadow-md p-4 hover:shadow-xl transition duration-300';

          card.innerHTML = `
            <img src="${tree.image}" alt="${tree.name}" class="w-full h-48 object-cover rounded-md mb-4">
            <h2 class="text-xl font-semibold text-green-700">${tree.name}</h2>
            <p class="text-gray-600 mt-2">${tree.description}</p>
            <p class="text-green-900 font-bold mt-2">Price: ${tree.price} BDT</p>
            <button onclick='addToCart(${JSON.stringify(tree)})' class="mt-3 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Add to Cart</button>

          `;

          container.appendChild(card);
        });
      } catch (error) {
        console.error('Error fetching data:', error);
        document.getElementById('treeContainer').innerHTML = `<p class="text-red-600 text-center">Failed to load fruit trees.</p>`;
      }
    }

    document.addEventListener('DOMContentLoaded', fetchFruitTrees);

const cart = [];

function addToCart(tree) {
cart.push(tree);
updateCart();
}


function updateCart() {
  const cartContainer = document.getElementById('cart');
  cartContainer.innerHTML = '';

  cart.forEach((tree, index) => {
    const item = document.createElement('div');
    item.className = 'flex justify-between items-center bg-green-100 p-2 rounded mb-2';

    item.innerHTML = `
      <span>${tree.name}</span>
      <span>${tree.price} BDT</span>
      <button onclick="removeFromCart(${index})" class="text-gray font-bold">❌</button>
    
    `;
   cartContainer.appendChild(item);
  });

  calculateTotal();


function calculateTotal() {
  const total = cart.reduce((sum, tree) => sum + parseInt(tree.price), 0);
  document.getElementById('totalPrice').innerText = `Total: ${total} BDT`;
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCart();
}
}









  





