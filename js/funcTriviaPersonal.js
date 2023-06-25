
const callUrlApi= sessionStorage.getItem("callUrlApi");

console.log(callUrlApi)

fetch(callUrlApi)
.then(Response => Response.json())
.then(Response => console.log(Response))
.catch(error => console.error(error));