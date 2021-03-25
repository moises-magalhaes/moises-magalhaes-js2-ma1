export function displayMessage(results) {
	const element = document.querySelector(".results");
	console.log(element);
	element.innerHTML = `<div class= "results not-found">Sorry! No products found.</div>`;
}


