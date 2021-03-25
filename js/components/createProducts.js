import displayMessage from "./displayMessage.js";
import {getWishlist, saveWishlist } from "../utils/wishlistFunctions.js"

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

    const wishlistButtons = document.querySelectorAll(".product i");

    wishlistButtons.forEach(function(icon) {
        icon.addEventListener("click", handleClick); 

    })

    function handleClick() {
        this.classList.toggle("far");
        this.classList.toggle("fa");

        const id = this.dataset.id;
        const name = this.dataset.name;
        const price = this.dataset.price;

        const currentWishlist = getWishlist();

        const product = currentWishlist.find(function(wishlistItem){
            if(wishlistItem.id === id) {
                return true;
            }

        })

        if (!product) {
            const newWishlistItem = { id: id, name: name, price: price};
            currentWishlist.push(newWishlistItem)
            saveWishlist(currentWishlist);
        }
        else {
            const updatedWishlist = currentWishlist.filter(function(item){
                if(item.id !== id) {
                    return true;

                }
            });
            saveWishlist (updatedWishlist);
        }
    }
}