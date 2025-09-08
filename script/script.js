


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
const API_URL = "https://openapi.programming-hero.com/api/category/1";

fetch(API_URL)
  .then(res => res.json())
  .then(data => {
    const plants = data.plants;

  

    // Our Impact: show 3 cards
    const impactContainer = document.getElementById("impact-cards");
    plants.slice(0, 3).forEach(plant => {
      const card = document.createElement("div");
      card.className = "bg-white p-4 rounded-lg shadow hover:shadow-lg transition";
      card.innerHTML = `
        <img src="${plant.image}" alt="${plant.name}" class="w-full h-40 object-cover rounded">
        <h3 class="text-xl font-semibold mt-4">${plant.name}</h3>
        <p class="text-sm mt-2">${plant.description}</p>
        <p class="mt-2 text-green-600 font-bold">৳ ${plant.price}</p>
        <button class="mt-4 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded add-to-cart">
          Add to Cart
        </button>
      `;
      impactContainer.appendChild(card);
    });
  })
  .catch(err => console.error("Error fetching data:", err));





