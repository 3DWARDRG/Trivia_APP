const UrlBase="https://opentdb.com/api.php?amount=10";



fetch('')
.then(Response => Response.json())
.then(Response => console.log(Response))
.catch(error => console.error(error));

console.log("hola")