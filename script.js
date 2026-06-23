const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup", function() {

let filter = searchInput.value.toLowerCase();

let products = document.querySelectorAll(".product-card");

products.forEach(product => {

let text = product.innerText.toLowerCase();

if(text.includes(filter)){

product.style.display = "";

}else{

product.style.display = "none";

}

});

});
