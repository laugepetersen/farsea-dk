import {ClassWatcher} from './util/classWatcher';

const addToCartButton = document.querySelector('.add-to-cart');
const cartIcon = document.querySelector('header .cart-icon');
const cart = document.querySelector('#cart');
const cartInner = cart.querySelector('#cart-inner');
const overlay = document.querySelector('#overlay');
const cartContinue = document.querySelector('#cart-continue');
const body = document.querySelector('body');
const cartIconCounter = document.querySelector('#cart-icon-counter');

let cartData;

if (addToCartButton) {
  addToCartButton.addEventListener('click', (event) => {
    event.preventDefault();
    addToCart(() => openCart());
  });
}

cartIcon.addEventListener('click', (event) => {
  openCart();
});

overlay.addEventListener('click', (event) => {
  closeCart();
});

cartContinue.addEventListener('click', (event) => {
  closeCart();
});

async function addToCart(callback) {
  let form = document.querySelector('#product-form');
  let formData = new FormData(form);

  addToCartButton.setAttribute('disabled', true);

  await fetch(window.Shopify.routes.root + 'cart/add.js', {
    method: 'POST',
    body: formData
  })
  .catch((error) => {
    console.error('Error adding to cart...');
  });

  addToCartButton.removeAttribute('disabled');

  await updateCart();

  updateCartCounter();
  
  callback();
}

async function openCart() {
  if(cartData == null) {
    cartData = await fetch(window.Shopify.routes.root + '?view=cart').then(res => res.text());
  }
  updateCartHTML();
  cart.classList.add('active');
  overlay.classList.add('active');
  body.classList.add('no-scroll');
}

async function removeItem(item, event) {
  item.classList.add('removed');

  let postData = {
    id: item.getAttribute('data-variant-id'),
    quantity: 0
  }

  await fetch(window.Shopify.routes.root + 'cart/change.js', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(postData)
  })
  .catch(err => console.log('Error removing item from cart...'));

  await updateCart();
  updateCartCounter();
  updateCartHTML();
}

async function closeCart() {
  cart.classList.remove('active');
  overlay.classList.remove('active');
  body.classList.remove('no-scroll');
}

async function updateCart() {
  cartData = await fetch(window.Shopify.routes.root + '?view=cart').then(res => res.text());
  updateCartCounter();
}

async function updateCartCounter() {
  let cartjson = await fetch(window.Shopify.routes.root + 'cart.js').then(res => res.json());
  cartIconCounter.innerHTML = cartjson.item_count;
}

function updateCartHTML() {
  cartInner.innerHTML = cartData;
  let items = cartInner.querySelectorAll('.item');
  items.forEach(item => {
    item.querySelector('.remove-item').addEventListener('click', (event) => removeItem(item, event));
  })
}