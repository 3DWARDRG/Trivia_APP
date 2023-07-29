
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
    return `<fieldset class="border-0 rounded-4 shadow p-3 mb-5 bg-body rounded">
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

const informationScore={
  score:0
};


for(let i=0;i < answers_correct.length;i++){

  if(answers_correct[i] === valoresSeleccionados[i]){

    informationScore.score+=100

    console.log("hola")
  }
}

console.log(informationScore.score)



if(informationScore.score<=300){
  informationScore.text = "tu puntuacion fue MALA."
  informationScore.image = "../images/Bronze Medal.png"
}

else if(informationScore.score>=300 && informationScore.score<=500){
    informationScore.text = "tu puntuacion fue REGULAR"
    informationScore.image = "../images/Silver Trophy.png"
}

else if(informationScore.score>=600 && informationScore.score<=800){
    informationScore.text = "tu score fue BUENA."
    informationScore.image = "../images/Gold Trophy.png"
}

else if(informationScore.score>=900 && informationScore.puntuacion<=1000){
  informationScore.text = "tu score fue EXCELENTE."
  informationScore.image = "../images/Diamond Trophy.png"
}

const idea1= createModal(informationScore);

  const convertN= document.createRange().createContextualFragment(idea1);
      body.prepend(convertN);
      let myModalPokemon = document.querySelector('#staticBackdrop');
      let modalBootstrap = new bootstrap.Modal(myModalPokemon);
      modalBootstrap.show();

      myModalPokemon.addEventListener('hidden.bs.modal', () => {
      myModalPokemon.remove();
      window.location.href="../index.html";
    });
}


formulario.addEventListener('submit',functionsTriviaApp.loadScore)

function createModal(data){
  return `<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-body d-flex flex-column align-items-center">
        <h5 class="modal-title" id="staticBackdropLabel">!You Score¡</h5>
        <img src="${data.image}" id="image-trofeo" alt="logo">
        <p>${data.score}</p>
        <p>${data.text}</p>
      </div>
      <div class="modal-footer d-flex justify-content-center">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">!Intentarlo de Nuevo¡</button>
      </div>
    </div>
  </div>
</div>`
}