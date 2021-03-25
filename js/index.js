import createProducts from "./components/createProducts.js";
import displayMessage from "./components/displayMessage.js";

const url = "https://t9jt3myad3.execute-api.eu-west-2.amazonaws.com/api/products";

(async function(){

    try{
    const response = await fetch(url);
    const json = await response.json();
    console.log(json);

    const products = json.data;
 createProducts(products);
    }
    catch(error) {
        console.log(error);
        displayMessage( "error", error, ".product-container");
    }
})();

