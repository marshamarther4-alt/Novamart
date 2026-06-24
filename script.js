let cart = JSON.parse(localStorage.getItem("cart")) || [];

let selectedProduct = null;

let quantity = 1;

// 🔥 AUTO 50 PRODUCTS FROM YOUR IMAGES

const startNumber = 3974;

const totalProducts = 50;

const products = Array.from({ length: totalProducts }, (_, i) => {

  const imgNumber = startNumber + i;

  let category = "others";

  if (i % 3 === 0) category = "shoes";

  else if (i % 3 === 1) category = "clothes";

  return {

    id: i,

    name: "Product " + (i + 1),

    price: 5000 + (i * 200),

    image: `images/IMG_${imgNumber}.jpeg`,

    category

  };

});

let filtered = [...products];

// 🧠 RENDER PRODUCTS

function render(list = filtered) {

  document.getElementById("productList").innerHTML = list.map((p, i) => `

    <div class="product">

      <img src="${p.image}" onclick="openProduct(${p.id})">

      <h3>${p.name}</h3>

      <p>₦${p.price}</p>

      <button onclick="openProduct(${p.id})">View</button>

    </div>

  `).join("");

}

// 🔍 SEARCH

document.getElementById("search").addEventListener("input", function () {

  let value = this.value.toLowerCase();

  filtered = products.filter(p =>

    p.name.toLowerCase().includes(value)

  );

  render(filtered);

});

// 🗂 CATEGORY FILTER

function filterCategory(cat) {

  filtered = cat === "all" ? products : products.filter(p => p.category === cat);

  render(filtered);

}

// 🖼 PRODUCT MODAL

function openProduct(id) {

  selectedProduct = products.find(p => p.id === id);

  quantity = 1;

  document.getElementById("modalName").innerText = selectedProduct.name;

  document.getElementById("modalImg").src = selectedProduct.image;

  document.getElementById("modalPrice").innerText = "₦" + selectedProduct.price;

  document.getElementById("qty").innerText = quantity;

  document.getElementById("productModal").style.display = "block";

}

function closeProduct() {

  document.getElementById("productModal").style.display = "none";

}

function changeQty(val) {

  quantity += val;

  if (quantity < 1) quantity = 1;

  document.getElementById("qty").innerText = quantity;

}

function addToCartFromModal() {

  for (let i = 0; i < quantity; i++) {

    cart.push(selectedProduct);

  }

  localStorage.setItem("cart", JSON.stringify(cart));

  updateCart();

  closeProduct();

}

// 🛒 CART

function updateCart() {

  document.getElementById("cartCount").innerText = cart.length;

}

function openCart() {

  let total = 0;

  document.getElementById("cartItems").innerHTML = cart.map(c => {

    total += c.price;

    return `<p>${c.name} - ₦${c.price}</p>`;

  }).join("");

  document.getElementById("totalPrice").innerText = "Total: ₦" + total;

  document.getElementById("cartModal").style.display = "block";

}

function closeCart() {

  document.getElementById("cartModal").style.display = "none";

}

// 💬 WHATSAPP CHECKOUT

function checkout() {

  let msg = "Hello, I want to order:%0A";

  cart.forEach(c => {

    msg += `- ${c.name} ₦${c.price}%0A`;

  });

  window.open(`https://wa.me/2348149504860?text=${msg}`, "_blank");

}

updateCart();

render();
