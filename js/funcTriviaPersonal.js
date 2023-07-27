
const callUrlApi= sessionStorage.getItem("callUrlApi");
console.log(callUrlApi)
const formulario= document.querySelector('#formulario');
const body=document.querySelector('body');



const functionsTriviaApp={};

functionsTriviaApp.getTrivia= (url)=>{
  return fetch(url)
  .then((data)=>data.json())
  .then(response=>response.results)
  .then(responseApi=> responseApi.map(organizarData))
  .then(resolve=>resolve)
  }

  functionsTriviaApp.createBoxTrivia=(data,index)=>{
    return `<fieldset class="border border-green border-5 rounded-3 shadow-lg p-3 mb-5 bg-body rounded">
  <legend id="prueba">${index+1}.${data.question}</legend>
        ${data.answers.map((answer) => `<div id="contenedorAnswers"><input type="radio" id="${answer}${index}" name="answerOfQuestion${index}" value="${answer}" class="form-check-input" required="">
        <label for="${answer}${index}" id="pruebaDeRespuesta">${answer}</label></div>`).join('')}
            </fieldset>`
  }


const answers_correct=[];


class Trivia {
  question;
  answers;
  correct_answer;
}

function organizarData (data){
  const trivia= new Trivia();
  trivia.question=data.question
  trivia.answers= data.incorrect_answers
  trivia.correct_answer= data.correct_answer

  trivia.answers.unshift(trivia.correct_answer)
  trivia.answers.sort(() => Math.random() - 0.5);
  answers_correct.push(trivia.correct_answer)
  return trivia
}

function loadTriviaItems(url) {
  functionsTriviaApp.getTrivia(url).then((items = []) => {
      const newHtml = items.map((item, index) => functionsTriviaApp.createBoxTrivia(item, index)).join('')
      const convertNodeElementDom = document.createRange().createContextualFragment(newHtml);
      formulario.prepend(convertNodeElementDom);
  })
}

loadTriviaItems(callUrlApi)

functionsTriviaApp.loadScore=(event)=>{

  event.preventDefault();

  let valoresInput= document.querySelectorAll('.form-check-input');
// Crear una lista para almacenar los valores seleccionados
let valoresSeleccionados = [];

// Recorrer la lista de elementos radio
for (let i = 0; i < valoresInput.length; i++) {
    if (valoresInput[i].checked) {

      valoresSeleccionados.push(valoresInput[i].value)
    }

}

console.log(valoresSeleccionados)

let puntuacion=0;


for(let i=0;i < answers_correct.length;i++){

  if(answers_correct[i] === valoresSeleccionados[i]){

    puntuacion+=100

    console.log("hola")
  }
}

console.log(puntuacion)


let a;

if(puntuacion<=300){
  a = "tu puntuacion fue MALA."
}

else if(puntuacion>=300 && puntuacion<=500){
  a = "tu puntuacion fue REGULAR"
}

else if(puntuacion>=600 && puntuacion<=800){
  a = "tu puntuacion fue BUENA."
}

else if(puntuacion>=900 && puntuacion<=1000){
  a = "tu puntuacion fue EXCELENTE."
}

console.log(a)

const idea1= createModal(puntuacion,a);

  const convertN= document.createRange().createContextualFragment(idea1);
      body.prepend(convertN);
      let myModalPokemon = document.querySelector('#staticBackdrop');
      let modalBootstrap = new bootstrap.Modal(myModalPokemon);
      modalBootstrap.show();

      myModalPokemon.addEventListener('hidden.bs.modal', () => {
      myModalPokemon.remove();
    });
}


formulario.addEventListener('submit',functionsTriviaApp.loadScore)

function createModal(data,data2){
  return `<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">!Tu Puntuacion¡</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>${data}</p>
        <p>${data2}</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
        <button type="button" class="btn btn-primary">Comprendido</button>
      </div>
    </div>
  </div>
</div>`
}