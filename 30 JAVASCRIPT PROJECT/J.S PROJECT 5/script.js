
const products = [
    { id: 1, name: "T-shirt", price: 500 },
    { id: 2, name: "Shoes", price: 1200 },
    { id: 3, name: "Watch", price: 2500 },
    { id: 4, name: "Cap", price: 300 }
];


let cart = [];


const productsDiv = document.getElementById('products');
const cartDiv = document.getElementById('cart');
const totalDiv = document.getElementById('total');


products.forEach(product => {
    const productCard = document.createElement('div');
    productCard.className = 'product';
    productCard.innerHTML = `
        <h3>${product.name}</h3>
        <p>Price: ₹${product.price}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    productsDiv.appendChild(productCard);
});


function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    updateCart();
}


function updateCart() {
    cartDiv.innerHTML = '';

    cart.forEach((item, index) => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <h4>${item.name}</h4>
            <p>Price: ₹${item.price}</p>
            <button onclick="removeFromCart(${index})">Remove</button>
        `;
        cartDiv.appendChild(cartItem);
    });

    calculateTotal();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

function calculateTotal() {
    let total = 0;
    cart.forEach(item => {
        total += item.price;
    });
    totalDiv.innerText = `Total: ₹${total}`;
}
