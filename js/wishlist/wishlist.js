import { getExistingFavs } from "../wishlist/wishlistFunctions.js";

const wishlist = getExistingFavs();

const wishlistContainer = document.querySelector(".results");

wishlist.forEach((product) => {
	wishlistContainer.innerHtml += `<div class="result">
                                    <h3>${result.name}</h3>
                                    <button class="remove">remove from wishlist</button>
                                    </div>`;
});
