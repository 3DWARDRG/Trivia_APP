const UrlBase="https://opentdb.com/api.php?amount=10";


console.log("hola")


const formulario= document.querySelector(".form-api");


formulario.addEventListener("submit", obtenerValores)


function obtenerValores (a){

    a.preventDefault();

    let newUrlConcatenada;

    let prueba= document.querySelectorAll(".form-control");

    for(i=0;i<prueba.length;i++){
        
       let x= prueba[i].value;

        console.log(x)

        if(x>=9 && x<=32){
        
            let argConcatenado="&category=";

            newUrlConcatenada= UrlBase+ argConcatenado + x;

        }

        else if(x==="easy" || x==="medium" || x==="hard"){

            let argConcatenado="&difficulty=";

            newUrlConcatenada+= argConcatenado + x;

        }

        else if(x==="multiple" || x==="boolean"){

            let argConcatenado="&type=";

            newUrlConcatenada+= argConcatenado + x;

        }

    }

    newUrlConcatenada= String(newUrlConcatenada);

    console.log(newUrlConcatenada)

    sessionStorage.setItem('callUrlApi', newUrlConcatenada);

    window.location.href="../TuTriviaPersonalizada.html";

}
