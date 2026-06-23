

let cart = JSON.parse(localStorage.getItem("novamartCart")) || [];

function saveCart() {

    localStorage.setItem("novamartCart", JSON.stringify(cart));

}

function addToCart(name, price) {

    cart.push({

        name: name,

        price: price

    });

    saveCart();

    updateCart();

    alert(name + " added to cart!");

}

function removeFromCart(index) {

    cart.splice(index, 1);

    saveCart();

    updateCart();

}

function updateCart() {

    const cartItems = document.getElementById("cart-items");

    const cartTotal = document.getElementById("cart-total");

    if (!cartItems || !cartTotal) return;

    cartItems.innerHTML = "";

    let total = 0;

    cart.forEach((item, index) => {

        total += item.price;

        const li = document.createElement("li");

        li.innerHTML = `

            ${item.name} - ₦${item.price.toLocaleString()}

            <button onclick="removeFromCart(${index})">

                Remove

            </button>

        `;

        cartItems.appendChild(li);

    });

    cartTotal.textContent = total.toLocaleString();

}

function checkoutWhatsApp() {

    if (cart.length === 0) {

        alert("Your cart is empty.");

        return;

    }

    let message = "Hello NovaMart GenStore,%0A%0AI want to order:%0A";

    let total = 0;

    cart.forEach(item => {

        message += `• ${item.name} - ₦${item.price}%0A`;

        total += item.price;

    });

    message += `%0A*Total:* ₦${total.toLocaleString()}`;

    const whatsappNumber = "2348149504860";

    window.open(

        `https://wa.me/${whatsappNumber}?text=${message}`,

        "_blank"

    );

}

document.addEventListener("DOMContentLoaded", () => {

    updateCart();

    const buttons = document.querySelectorAll(".buy-btn");

    buttons.forEach(button => {

        button.addEventListener("click", () => {

            const product =

                button.parentElement;

            const name =

                product.querySelector("h3").innerText;

            const priceText =

                product.querySelector(".price").innerText;

            const price =

                Number(

                    priceText

                        .replace("₦", "")

                        .replace(/,/g, "")

                );

            addToCart(name, price);

        });

    });

});
