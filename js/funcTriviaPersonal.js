
const callUrlApi= sessionStorage.getItem("callUrlApi");

console.log(callUrlApi)

let answerPrueba;

let elementDomPrueba= document.querySelectorAll("#prueba");

console.log(elementDomPrueba)
  
  getData();


  async function getData() {
    try {
      const response = await fetch(callUrlApi);
      const data = await response.json();
      console.log(data);

      for(let i=0;i<elementDomPrueba.length;i++){
        elementDomPrueba[i].innerHTML=[i+1]+"."+ " " +data.results[i].question

        if(data.results[i].type==="boolean"){

          console.log("funciona")
        }

        else if(data.results[i].type==="multiple"){
          console.log("funciona")

          let correctAnswer=data.results;
          let incorrectAnswer;

          let respuestasPrueba=correctAnswer + incorrectAnswer;
          
          for(let i=0;i<){}

        }
      }
      // Código que se ejecutará después de que se cumpla la promesa

    } catch (error) {
      console.error(error);
    }
  }
