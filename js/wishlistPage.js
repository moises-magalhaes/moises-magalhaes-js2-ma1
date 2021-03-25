import {getWishlist } from "./utils/wishlistFunctions.js";
import displayMessage from "./components/displayMessage.js"

const wishlist = getWishlist();

if(wishlist.length === 0) {
    displayMessage("warning", "No items in wishlist", ".product-container")
}


const container = document.querySelector(".product-container");

wishlist.forEach(function(item) {
    container.innerHTML += `<div class="product">
                                <i class="fa fa-heart"></i>
                                <h4>${item.name}</h4>
                                <p>${item.price}</p>
                            </div>`
});