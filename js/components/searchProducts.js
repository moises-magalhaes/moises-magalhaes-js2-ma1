import createProducts from "./createProducts.js";

export default function searchProducts(products) {
	const search = document.querySelector("input.search");

    search.addEventListener("keyup", doFiltering)

    function doFiltering(event) {
        const filterValue = parseFloat(event.target.value.trim());
        console.log(filterValue);

        if(isNaN(filterValue)) {
            return createProducts(products);
        }

        const filteredProducts = products.filter(function(product){
            if(product.price <= filterValue){
                return true;
            }
        });

        createProducts(filteredProducts);

    }
/*
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
	};*/
}
