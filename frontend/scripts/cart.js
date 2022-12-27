import {ClassWatcher} from './util/classWatcher';

const addToCartButton = document.querySelector('.add-to-cart');
const cartIcon = document.querySelector('.icon-cart');
const cart = document.querySelector('#cart');
const cartInner = cart.querySelector('#cart-inner');
const overlay = document.querySelector('#overlay');
const cartContinue = document.querySelector('#cart-continue');
const body = document.querySelector('body');

let cartData = await fetch(window.Shopify.routes.root + '?view=cart').then(res => res.text());

//const cartWatcher = new ClassWatcher(cart, 'active', onOpenCart, onCloseCart);

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

  cartData = await fetch(window.Shopify.routes.root + '?view=cart').then(res => res.text());
  
  callback();
}

function openCart() {
  cartInner.innerHTML = cartData;
  cartInner.querySelectorAll('.item').forEach(item => {
    item.querySelector('.remove-item').addEventListener('click', (event) => {
      item.classList.add('removed');
      let postData = {
        id: item.getAttribute('data-variant-id'),
        quantity: 0
      }
      fetch(window.Shopify.routes.root + 'cart/change.js', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(postData)
      })
      .catch(err => console.log('Error removing item from cart...'));
    });
  })
  cart.classList.add('active');
  overlay.classList.add('active');
  body.classList.add('no-scroll');
}

async function closeCart() {
  cart.classList.remove('active');
  overlay.classList.remove('active');
  body.classList.remove('no-scroll');
  cartData = await fetch(window.Shopify.routes.root + '?view=cart').then(res => res.text());
}