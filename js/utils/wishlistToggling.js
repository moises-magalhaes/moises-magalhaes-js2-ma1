import {getWishlist, saveWishlist } from "../utils/wishlistFunctions.js";
export default function WishlistToggling() {
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