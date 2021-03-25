export function displayError(messageType, message) {
	const element = document.querySelector(".results");
	element.Html = `<div class="message ${messageType}">${message}</div>`;
}
