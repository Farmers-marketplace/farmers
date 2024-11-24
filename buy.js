// buy.js

let cart = [];
let total = 0;

function addToCart(product, price) {
    cart.push({ product, price });
    total += price;
    updateCart();
    showPopup(`${product} added to cart!`);
}

function updateCart() {
    const cartItems = document.getElementById('cartItems');
    const totalElement = document.getElementById('total');
    
    // Update cart items list
    cartItems.innerHTML = '';
    cart.forEach(item => {
        const itemElement = document.createElement('p');
        itemElement.textContent = `${item.product}: ₹${item.price}`;
        cartItems.appendChild(itemElement);
    });

    // Update total
    totalElement.innerHTML = `<p>Total: ₹${total}</p>`;
}

function showPopup(message) {
    const popup = document.createElement('div');
    popup.className = 'popup';
    popup.textContent = message;
    document.body.appendChild(popup);

    setTimeout(() => {
        popup.remove();
    }, 2000);
}
