
const callUrlApi= sessionStorage.getItem("callUrlApi");
console.log(callUrlApi)
const formulario= document.querySelector('#formulario');



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
        ${data.answers.map((answer) => `<div id="contenedorAnswers"><input type="radio" id="${answer}" name="answerOfQuestion${index}" value="${answer}" class="form-check-input" required="">
        <label for="${answer}" id="pruebaDeRespuesta">${answer}</label></div>`).join('')}
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
