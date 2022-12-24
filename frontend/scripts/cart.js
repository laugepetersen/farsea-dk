import {ClassWatcher} from './util/classWatcher';

const addToCartButton = document.querySelector('.add-to-cart');
const cartIcon = document.querySelector('.icon-cart');
const cart = document.querySelector('#cart');
const overlay = document.querySelector('#overlay');
const cartContinue = document.querySelector('#cart-continue');
const body = document.querySelector('body');

//const cartWatcher = new ClassWatcher(cart, 'active', onOpenCart, onCloseCart);

addToCartButton.addEventListener('click', (event) => {
  event.preventDefault();
  addToCart(() => openCart());
});

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
  .then(response => {
    return response.json();
  })
  .then(data => {
    console.log('Success:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });

  addToCartButton.removeAttribute('disabled');
  
  callback();
}

function openCart() {
  cart.classList.add('active');
  overlay.classList.add('active');
  body.classList.add('no-scroll');
}

function closeCart() {
  cart.classList.remove('active');
  overlay.classList.remove('active');
  body.classList.remove('no-scroll');
}