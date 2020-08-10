(function(){
  'use strict';

  const items = [
    {
      id: 0,
      title: 'Camisa do Flamengo',
      img: 'img/default-product.jpg',
      price: 179.50,
      quant: 0
    },
    {
      id: 1,
      title: 'Camisa do Corinthians',
      img: 'img/default-product.jpg',
      price: 100,
      quant: 0
    },
    {
      id: 2,
      title: 'Camisa do Bahia',
      img: 'img/default-product.jpg',
      price: 139.50,
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
          <h3>${currencyBrl(product.price)}</h3>
          <a class="btn-cart" key="${product.id}" href="#">Add to cart</a>
        </div>
      `;
    });
  }

  initStore();

  function currencyBrl(value) {
    return value.toLocaleString('pt-br',{
      style: 'currency',
      currency: 'BRL',
    });
  }

  function updateCart() {
    var containerCart = document.getElementById('cart');
    containerCart.innerHTML = '';
    items.map((product) => {
      function total() {
        var totalPrice = product.price * product.quant;
        return currencyBrl(totalPrice)
      }
    
      if(product.quant > 0) {
        containerCart.innerHTML += `
          <p><img src="${product.img}" width="30" /> ${product.title} | Valor Unitário: ${currencyBrl(product.price)} | Quant: ${product.quant} | Total: ${total()} <a class="btn-delete" key="${product.id}" href="#">X</a></p>
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