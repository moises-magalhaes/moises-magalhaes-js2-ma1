export default function createProducts(products) {
    const container = document.querySelector(".product-container");

    container.innerHTML = "";

    products.forEach(function(product){

        //instead of -> container.innerHTML he uses
        container.innerHTML += `<div class="product">
                    <h4>${product.name}</h4>
                    <p>Price:${product.price}</p>
                </div>`;      
    });
}