document.addEventListener("DOMContentLoaded", () => {
    const products = [
      { id: 1, name: "Product 1", price: 29.99 },
      { id: 2, name: "Product 2", price: 19.99 },
      { id: 3, name: "Product 3", price: 49.99 },
      { id: 4, name: "Product 4", price: 59.99 },
    ];
  
    const cart = [];
    const productList = document.getElementById("product-list");
    const cartItems = document.getElementById("cart-items");
    const emptyCartMsg = document.getElementById("empty-cart");
    const cartTotal = document.getElementById("cart-total");
    const priceTotal = document.getElementById("total-price");
    const checkOutBtn = document.getElementById("checkout-btn");
  
    products.forEach((product) => {
      const productDiv = document.createElement("div");
      productDiv.classList.add("product");
      productDiv.innerHTML = `
      <span>${product.name} <p> $${product.price.toFixed(2)}</p></span>
      <button data-id="${product.id}">Add to cart</button>
      `;
      productList.appendChild(productDiv);
    });
  
    productList.addEventListener("click", (e) => {
      if (e.target.tagName === "BUTTON") {
        const productId = parseInt(e.target.getAttribute("data-id"));
        const product = products.find((p) => p.id === productId);
        addToCart(product);
        renderCart();
      }
    });
  
    function addToCart(product) {
      cart.push(product);
    }
  
    function renderCart() {
      cartItems.innerText = "";
      let totalPrice = 0;
  
      if (cart.length > 0) {
        emptyCartMsg.classList.add("hidden");
        cartTotal.classList.remove("hidden");
        cart.forEach((item, index) => {
          totalPrice += item.price;
          const cartItem = document.createElement("div");
          cartItem.classList.add("cartItemStyle");
          cartItem.innerHTML = `
          <span>${item.name} - $${item.price.toFixed(2)}</span>
          <button data-id="${item.id}">Remove</button>
          `;
          cartItems.appendChild(cartItem);
          priceTotal.textContent = `${totalPrice.toFixed(2)}`;
        });
      } else {
        emptyCartMsg.classList.remove("hidden");
        priceTotal.textContent = `0.00`;
      }
    }
  
    cartItems.addEventListener("click", (e) => {
      if (e.target.tagName === "BUTTON") {
        const productId = parseInt(e.target.getAttribute("data-id"));
        const product = products.find((p) => p.id === productId);
        removeFromCart(product);
        renderCart();
      }
    });
  
    function removeFromCart(product) {
      cart.splice(product, 1);
    }
  
    checkOutBtn.addEventListener("click", () => {
      cart.length = 0;
      alert("Checkout successfully");
      renderCart();
    });
  });
  