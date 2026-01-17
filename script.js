const products = [
    { id: 1, name: "Wired Headphones", price: 99, image: "https://techshop-assets-2026.s3.eu-north-1.amazonaws.com/black-and-white-close-up-hanging-159463.jpg", category: "audio" },
    { id: 2, name: "Smart Watch", price: 199, image: "https://techshop-assets-2026.s3.eu-north-1.amazonaws.com/noise-pulse-2-max-smartwatch_1.webp", category: "wearables" },
    { id: 3, name: "Gaming mouse", price: 59, image: "https://techshop-assets-2026.s3.eu-north-1.amazonaws.com/OIP.jpg", category: "gamingaccesories"}
];

let cart = JSON.parse(localStorage.getItem('TECH_STORE_CART')) || [];

function renderProducts(items) {
    const grid = document.getElementById('product-grid');
    if (!grid) return;

    grid.innerHTML = items.map(product => `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}" onerror="this.src='https://via.placeholder.com/150'">
            <div class="product-info">
                <h3>${product.name}</h3>
                <p class="price">$${product.price}</p>
                <button class="add-btn" onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
        </div>
    `).join('');
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    updateCart();
    
    const drawer = document.getElementById('cart-drawer');
    if (drawer && !drawer.classList.contains('open')) toggleCart();
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
}

function updateCart() {
    localStorage.setItem('TECH_STORE_CART', JSON.stringify(cart));
    
    const badge = document.getElementById('cart-count');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    if (badge) badge.innerText = totalItems;

    const cartContainer = document.getElementById('cart-items');
    if (!cartContainer) return;

    if (cart.length === 0) {
        cartContainer.innerHTML = `
            <div style="text-align:center; padding: 40px 0; color: #94a3b8;">
                <p>Your cart is empty.</p>
            </div>`;
    } else {
        cartContainer.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div class="item-details">
                    <h4>${item.name}</h4>
                    <p>$${item.price} × ${item.quantity}</p>
                </div>
                <button class="remove-link" onclick="removeFromCart(${item.id})">Remove</button>
            </div>
        `).join('');
    }

    const totalElement = document.getElementById('cart-total');
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    if (totalElement) totalElement.innerText = total.toFixed(2);
}

function toggleCart() {
    const drawer = document.getElementById('cart-drawer');
    if (drawer) drawer.classList.toggle('open');
}

document.getElementById('search')?.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    const filtered = products.filter(p => 
        p.name.toLowerCase().includes(term) || 
        p.category.toLowerCase().includes(term)
    );
    renderProducts(filtered);
});

document.addEventListener('DOMContentLoaded', () => {
    renderProducts(products); 
    updateCart();
});

function toggleCheckout() {
    const modal = document.getElementById('checkout-modal');
    const isOpening = modal.style.display !== 'flex';
    
    modal.style.display = isOpening ? 'flex' : 'none';

    if (isOpening) {
        const currentTotal = document.getElementById('cart-total').innerText;
        document.getElementById('modal-total').innerText = `$${currentTotal}`;
    }
}

document.querySelector('.checkout-btn')?.addEventListener('click', toggleCheckout);

document.getElementById('checkout-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your purchase! Your order has been placed.');
    cart = [];
    updateCart();
    toggleCheckout();
    toggleCart();
});