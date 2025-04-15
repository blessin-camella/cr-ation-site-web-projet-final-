function getCart() {
    return JSON.parse(localStorage.getItem('cart')) || [];
  }
  
  function setCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
  }
  
  function addToCart(productName) {
    let cart = getCart();
    cart.push(productName);
    setCart(cart);
    alert('${productName} a,été,a,jouté,au,panier.');
  }

  function getCart() {
    return JSON.parse(localStorage.getItem('panier')) || [];
  }
  
  
  function updateCartCount() {
    const cart = getCart();
    document.getElementById('cart-count').textContent = cart.length;
  }
  
  function getCart() {
    return JSON.parse(localStorage.getItem('cart')) || [];
  }
  
  function setCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
  }
  
  function updateCartCount() {
    const cart = getCart();
    document.getElementById('cart-count').textContent = cart.length;
  }
  
  function renderCart() {
    const cart = getCart();
    const container = document.getElementById('cart-items');
    container.innerHTML = '';
  
    if (cart.length === 0) {
      container.innerHTML = '<p>Votre panier est vide.</p>';
      return;
    }
  
    cart.forEach((item, index) => {
      const div = document.createElement('div');
      div.className = 'cart-item';
      div.innerHTML = `
        <p>${item}</p>
        <button onclick="removeFromCart(${index})">Supprimer</button>
      `;
      container.appendChild(div);
    });
  }
  
  function removeFromCart(index) {
    let cart = getCart();
    cart.splice(index, 1);
    setCart(cart);
    renderCart();
  }
  
  window.onload = () => {
    updateCartCount();
    renderCart();
  };
  function getUsers() {
    return JSON.parse(localStorage.getItem('users')) || [];
  }
  
  function setUsers(users) {
    localStorage.setItem('users', JSON.stringify(users));
  }
  
  function showMessage(message, color = 'green') {
    const msg = document.getElementById('auth-message');
    msg.textContent = message;
    msg.style.color = color;
  }
  // Connexion
document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('login-username').value.trim();
    const password = document.getElementById('login-password').value;
  
    const users = getUsers();
    const user = users.find(u => u.username === username && u.password === password);
  
    if (user) {
      localStorage.setItem('loggedUser', username);
      showMessage('Bienvenue, ${username} !');
    } else {
      showMessage("Identifiants incorrects", 'red');
    }
  }); 
