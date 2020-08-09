(function(){
  'use strict';

  const items = [
    {
      id: 0,
      title: 'Camisa do Flamengo',
      img: 'img/default-product.jpg',
      quant: 0
    },
    {
      id: 1,
      title: 'Camisa do Corinthians',
      img: 'img/default-product.jpg',
      quant: 0
    },
    {
      id: 2,
      title: 'Camisa do Bahia',
      img: 'img/default-product.jpg',
      quant: 0
    },
  ]

  function initStore() {
    var containerProducts = document.getElementById('products');
    items.map((product) => {
      containerProducts.innerHTML += `
        <div class="single-product">
          <img with="200" height="200" src="${product.img}" />
          <p>${product.title}</p>
          <a key="${product.id}" href="#">Add ao carrinho</a>
        </div>
      `;
    });
  }

  initStore();

  function updateCart() {
    var containerCart = document.getElementById('cart');
    containerCart.innerHTML = '';
    items.map((product) => {
      if(product.quant > 0) {
        containerCart.innerHTML += `
          <p>${product.title} | Quant: ${product.quant}</p>
          <hr>
        `;
      }
    });
  }

  var links = document.getElementsByTagName('a');
  
  for( var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function() {
      let key = this.getAttribute('key');
      items[key].quant++;
      updateCart();
      return false;
    })
  }

})();