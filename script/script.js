// const loadLessons = () => {
//     fetch("https://openapi.programming-hero.com/api/categories")
//     .then((res) => res.json())
//     .then((json) => displayLesson(json.categories));
// };

// const displayLesson = (lessons) => {
//  const levelContainer = document.getElementById("level-Container");
//  levelContainer.innerHTML = "";
//  for(let lesson of lessons){
//     console.log(lesson);
//     const categoryDiv= document.createElement("div")
//     categoryDiv.innerHTML = 
//         <ul class="Categories">
//         <li>Category</li>
//         <li>All Trees</li>
//     </ul>;
      
    
    
//     levelContainer.append(categoryDiv);

//  }
// };

// loadLessons();

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




