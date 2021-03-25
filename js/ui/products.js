import { getExistingFavs } from "../wishlist/wishlistFunctions.js";

export function products(renderProducts) {
	const resultsContainer = document.querySelector(".results");

	resultsContainer.innerHTML = "";

	renderProducts.forEach(function (lorem) {
		resultsContainer.innerHTML += `<div class="result">
    <h3>${lorem.name}</h3>
    <p>NOK: ${lorem.price}</p>
    <button class="btn" data-id="${lorem.id}" data-name="${lorem.name}">add to wishlist</button>
    </div>`;
	});

	const favButtons = document.querySelectorAll(".result button");

	favButtons.forEach((button) => {
		button.addEventListener("click", handleClick);
	});

	function handleClick() {
		console.log(event);
		this.classList.toggle("btn");
		this.classList.toggle("remove");

		const id = this.dataset.id;
		const name = this.dataset.name;

		const currentWishlist = getExistingFavs();

		const productExists = currentWishlist.find(function (fav) {
			return fav.id === id;
		});

		if (productExists === undefined) {
			const product = { id: id, name: name };

			currentWishlist.push(product);

			saveWishlist(currentWishlist);
		} else {
			const newWishlist = currentWishlist.filter((fav) => fav.id !== id);
			saveWishlist(newWishlist);
		}
	}

	function saveWishlist(favs) {
		localStorage.setItem("wishlist", JSON.stringify(favs));
	}
}
