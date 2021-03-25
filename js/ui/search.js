import { products } from "./products.js";

export function searchPrices(prices) {
	const search = document.querySelector(".search");

	search.onkeyup = function () {
		console.log(event);
		const searchValue = parseFloat(event.target.value.trim());
		console.log(searchValue);

		const filteredPrices = prices.filter(function (cost) {
			if (cost.price < searchValue) {
				return true;
			}
		});

		products(filteredPrices);
	};
}
