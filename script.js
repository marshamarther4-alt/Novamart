let cart = JSON.parse(localStorage.getItem("cart")) || [];

const startNumber = 3974;

const totalProducts = 50;

const products = Array.from({ length: totalProducts }, (_, i) => {

  const num = startNumber + i;

  return {

    id: i,

    name: "Product " + (i + 1),

    price: 5000 + (i * 200),

    image: `images/IMG_${num}.jpeg`

  };

});

let filtered = [...products];

// RENDER PRODUCTS

function render(list = filtered) {

  const container = document.getElementById("productList");

  container.innerHTML = list.map(p => `

    <div class="product">

      <img src="${p.image}" onerror="this.src='https://via.placeholder.com/150'">

      <h3>${p.name}</h3>

      <p>₦${p.price}</p>

      <button onclick="addToCart(${p.id})">Add to Cart</button>

    </div>

  `).join("");

}

// ADD TO CART

function addToCart(id) {

  const item = products.find(p => p.id === id);

  cart.push(item);

  localStorage.setItem("cart", JSON.stringify(cart));

  updateCart();

}

// UPDATE CART COUNT

function updateCart() {

  document.getElementById("cartCount").innerText = cart.length;

}

// OPEN CART

function openCart() {

  let total = 0;

  document.getElementById("cartItems").innerHTML = cart.map(c => {

    total += c.price;

    return `<p>${c.name} - ₦${c.price}</p>`;

  }).join("");

  document.getElementById("totalPrice").innerText = "Total: ₦" + total;

  document.getElementById("cartModal").style.display = "block";

}

// CLOSE CART

function closeCart() {

  document.getElementById("cartModal").style.display = "none";

}

// CHECKOUT

function checkout() {

  if (cart.length === 0) return alert("Cart is empty!");

  let msg = "Hello, I want to order:%0A";

  cart.forEach(c => {

    msg += `- ${c.name} ₦${c.price}%0A`;

  });

  window.open(`https://wa.me/2348149504860?text=${msg}`, "_blank");

}

// SEARCH

document.getElementById("search").addEventListener("input", function () {

  const value = this.value.toLowerCase();

  filtered = products.filter(p =>

    p.name.toLowerCase().includes(value)

  );

  render(filtered);

});

// INIT

updateCart();

render();
