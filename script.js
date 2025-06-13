function addToCart(name, price) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push({ name, price });
  localStorage.setItem('cart', JSON.stringify(cart));
  alert(`${name} added to cart!`);
}

if (window.location.pathname.includes("cart.html")) {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  const list = document.getElementById('cart-items');
  const total = document.getElementById('total');
  let sum = 0;

  cartItems.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - $${item.price}`;
    list.appendChild(li);
    sum += item.price;
  });

  total.textContent = `Total: $${sum}`;
}

function checkout() {
  alert("Thank you for your purchase (demo only)!");
  localStorage.removeItem('cart');
  window.location.href = 'index.html';
}
