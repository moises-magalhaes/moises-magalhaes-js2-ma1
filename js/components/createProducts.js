import displayMessage from "./displayMessage.js";

export default function createProducts(products) {
    const container = document.querySelector(".product-container");

    container.innerHTML = "";

    if(products.length === 0) {
        displayMessage("warning", "No products found", ".product-container");
    }

    products.forEach(function(product){

        container.innerHTML += `<div class="product">
                    <h4>${product.name}</h4>
                    <p>Price:${product.price}</p>
                </div>`;      
    });
}