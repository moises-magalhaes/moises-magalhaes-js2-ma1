/*import { displayError } from "./components/displayError.js";
import { searchPrices } from "./ui/search.js";
import { products } from "./ui/products.js";
import displayMessage from "./components/displayMessage.js";
import { getExistingFavs } from "./wishlist/wishlistFunctions.js";

const url =
	"https://t9jt3myad3.execute-api.eu-west-2.amazonaws.com/api/products/";

async function makeApiCall() {
	try {
		const response = await fetch(url);
		const results = await response.json();

		const lorem = results.data;
		console.log(lorem);
		products(lorem);
		searchPrices(lorem);

		for (let i = 0; i < lorem.length; i++) {
			if (i !== "") {
				lorem;
			} else {
				displayMessage();
			}
		}
	} catch (error) {
		console.log(error);
		displayError("error", error, ".results");
	}
}

makeApiCall();*/
