
const callUrlApi= sessionStorage.getItem("callUrlApi");

console.log(callUrlApi)

let answerPrueba;

let elementDomPrueba= document.querySelectorAll("#prueba");
  
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

          let correct_answer=data.results[i].correct_answer;
          console.log(correct_answer)
          let incorrect_answers=data.results[i].incorrect_answers;
          let answersQuestion= correct_answer + "," + incorrect_answers;

          let arr = answersQuestion.split(",");
          arr.sort(() => Math.random() - 0.7);

          console.log(arr)

          let fieldset=document.querySelectorAll("body main #boxTrivia form fieldset");
          let p=fieldset[i];

          for(let j=0;j<arr.length;j++){

            let input = document.createElement("input");
            input.setAttribute("type", "radio");
            input.setAttribute("id", "my-input");
            input.setAttribute("value", "Valor por defecto");

            let label = document.createElement("label");
            label.setAttribute("for", "my-input");
            label.setAttribute("id","pruebaDeRespuesta")
            label.textContent=arr[j];

            p.appendChild(input);
            p.appendChild(label);
            
            
            
          }

        }
      }
      // Código que se ejecutará después de que se cumpla la promesa

    } catch (error) {
      console.error(error);
    }
  }

