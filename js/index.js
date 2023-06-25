const UrlBase="https://opentdb.com/api.php?amount=10";



fetch('')
.then(Response => Response.json())
.then(Response => console.log(Response))
.catch(error => console.error(error));

console.log("hola")


const formulario= document.querySelector(".form-api");


formulario.addEventListener("submit", obtenerValores)


function obtenerValores (a){
    a.preventDefault();
    console.log("funciona")

    let prueba= document.querySelectorAll(".form-control");

    let valores=[];


    for(i=0;i<prueba.length;i++){
        
        valores.push(prueba[i].value)

        console.log(x)

        if(x>=9 && x<=32){

            console.log("agregariamos categorias a la url")
        }

    }




}
