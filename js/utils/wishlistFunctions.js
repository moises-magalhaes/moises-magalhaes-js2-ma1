const wishlistKey = "wishlist";

export function getWishlist() {
    const wishlist = localStorage.getItem(wishlistKey);

    if (wishlist === null) {
        return []; 
    }
        return JSON.parse(wishlist);
}
export function saveWishlist(wishlist) {
    localStorage.setItem(wishlistKey, JSON.stringify(wishlist));
}