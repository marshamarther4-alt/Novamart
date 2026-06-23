let cart = [];

let currentCategory = "all";

function display(){

  const container = document.getElementById("products");

  const search = document.getElementById("search").value.toLowerCase();

  container.innerHTML = "";

  products

    .filter(p => currentCategory === "all" || p.category === currentCategory)

    .filter(p => p.name.toLowerCase().includes(search))

    .forEach(p => {

      container.innerHTML += `

        <div class="card">

          <img src="${p.image}">

          <h3>${p.name}</h3>

          <p class="price">₦${p.price}</p>

          <button class="add" onclick="addToCart(${p.id})">Add to Cart</button>

        </div>

      `;

    });

}

function addToCart(id){

  const item = products.find(p => p.id === id);

  cart.push(item);

  document.getElementById("cartCount").innerText = cart.length;

}

function setCategory(cat){

  currentCategory = cat;

  display();

}

document.getElementById("search").addEventListener("input", display);

function checkout(){

  let msg = "Hello, I want to order:%0A";

  cart.forEach(p=>{

    msg += `- ${p.name} (₦${p.price})%0A`;

  });

  window.open(`https://wa.me/2348149504860?text=${msg}`);

}

display();
