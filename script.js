let cart = JSON.parse(localStorage.getItem("cart")) || [];
let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
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

<button onclick="addToWishlist(${p.id})">❤️ Wishlist</button>

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
function addToWishlist(id){

const item = products.find(p => p.id === id);

wishlist.push(item);

localStorage.setItem(

"wishlist",

JSON.stringify(wishlist)

);

updateWishlist();

}

function updateWishlist(){

const count =

document.getElementById("wishlistCount");

if(count){

count.innerText = wishlist.length;

}

}

function openWishlist(){

const items =

document.getElementById("wishlistItems");

if(items){

items.innerHTML =

wishlist.map(w =>

`<p>${w.name}</p>`

).join("");

document.getElementById(

"wishlistModal"

).style.display = "block";

}

}

function closeWishlist(){

document.getElementById(

"wishlistModal"

).style.display = "none";

}

document.addEventListener(

"DOMContentLoaded",

function(){

const darkBtn =

document.getElementById(

"darkModeBtn"

);

if(darkBtn){

darkBtn.onclick = function(){

document.body.classList.toggle(

"dark-mode"

);

};

}

updateWishlist();

});

function filterCategory(type){

if(type === "all"){

filtered = [...products];

}

else{

filtered =

products.filter(

(p,i)=>

(type==="Clothes" && i<17) ||

(type==="Shoes" && i>=17 && i<34) ||

(type==="Groceries" && i>=34)

);

}

render(filtered);

}
