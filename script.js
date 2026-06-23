let count = 0;

document.querySelectorAll(".add-cart").forEach(button => {

button.addEventListener("click", () => {

count++;

document.getElementById("cart-count").innerText = count;

alert("Added to cart!");

});

});
