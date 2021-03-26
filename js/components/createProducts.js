import displayMessage from "./displayMessage.js";
import {getWishlist } from "../utils/wishlistFunctions.js"
import WishlistToggling from "../utils/wishlistToggling.js";
 

export default function createProducts(products) {
    const container = document.querySelector(".product-container");

    container.innerHTML = "";

    if(products.length === 0) {
        displayMessage("warning", "No products found", ".product-container");
    }
  

    const currentWishlist = getWishlist();


    products.forEach(function(product){


        let cssClass = "far";
        const inWishlist = currentWishlist.find(function(item){
            return parseInt(item.id) === product.id;
        });

        console.log(inWishlist);

        if(inWishlist !== undefined) {
            cssClass = "fa";
        }


        container.innerHTML += `<div class="product">
        <i class="${cssClass} fa-heart" data-id="${product.id}" data-name="${product.name}" data-price="${product.price}"></i>
                    <h4>${product.name}</h4>
                    <p>Price:${product.price}</p>
                </div>`;      
    });

    WishlistToggling();
}