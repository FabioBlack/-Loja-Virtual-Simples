let cart = [];
let total = 0;

function addToCart(product, price) {
  cart.push({ product, price });
  total += price;

  updateCart();
}

function updateCart() {
  const cartDiv = document.getElementById('cart');
  const totalDiv = document.getElementById('total');

  // Atualiza o carrinho
  cartDiv.innerHTML = cart
    .map(item => `<p>${item.product} - R$ ${item.price.toFixed(2)}</p>`)
    .join('');

  // Atualiza o total
  totalDiv.textContent = `Total: R$ ${total.toFixed(2)}`;
}
