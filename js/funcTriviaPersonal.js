
const callUrlApi= sessionStorage.getItem("callUrlApi");

console.log(callUrlApi)

let answerPrueba;

let elementDomPrueba= document.querySelectorAll("#prueba");
  
  getData();

  let contador=0;

  let pruebaRespuestasC;

  async function getData() {
    try {
      const response = await fetch(callUrlApi);
      const data = await response.json();
      console.log(data);

      for(let i=0;i<elementDomPrueba.length;i++){
        elementDomPrueba[i].innerHTML=[i+1]+"."+ " " +data.results[i].question;

        if(data.results[i].type==="boolean"){

          console.log("funciona")
          let correct_answer=data.results[i].correct_answer;
          console.log(correct_answer)
          let incorrect_answers=data.results[i].incorrect_answers;
          let answersQuestion= correct_answer + "," + incorrect_answers;

          let arr = answersQuestion.split(",");
          arr.sort(() => Math.random() - 0.7);

          console.log(arr)


          let directionDiv=document.querySelectorAll("body main #boxTrivia form fieldset");
          let recorrer=directionDiv[i];

          let b=[i]

          console.log(b)

          for(let j=0;j<arr.length;j++){

            // let a=contador+=parseInt([j])

            let a=contador+=j + 1

            let div = document.createElement("div");
            div.setAttribute("id","contenedorAnswers")

            let label = document.createElement("label");
            label.setAttribute("for", "myInput" + a);
            label.setAttribute("id","pruebaDeRespuesta")
            label.innerHTML=arr[j];

            let input = document.createElement("input");
            input.setAttribute("type", "radio");
            input.setAttribute("id", "myInput" + a);
            input.setAttribute("name", "example" + b);
            input.setAttribute("value", arr[j]);
            input.classList.add("form-check-input")

            recorrer.appendChild(div);
            div.appendChild(input);
            div.appendChild(label);
          
        }
      }

        else if(data.results[i].type==="multiple"){
          console.log("funciona")

          let correct_answer=data.results[i].correct_answer;

            pruebaRespuestasC+= "," +correct_answer;

          console.log(correct_answer)
          let incorrect_answers=data.results[i].incorrect_answers;
          let answersQuestion= correct_answer + "," + incorrect_answers;

          let arr = answersQuestion.split(",");
          arr.sort(() => Math.random() - 0.7);

          console.log(arr)


          let directionDiv=document.querySelectorAll("body main #boxTrivia form fieldset");
          let recorrer=directionDiv[i];

          let b=[i]

          console.log(b)

          for(let j=0;j<arr.length;j++){

            // let a=contador+=parseInt([j])

            let a=contador+=j + 1

            let div = document.createElement("div");
            div.setAttribute("id","contenedorAnswers")

            let label = document.createElement("label");
            label.setAttribute("for", "myInput" + a);
            label.setAttribute("id","pruebaDeRespuesta")
            label.innerHTML=arr[j];

            let input = document.createElement("input");
            input.setAttribute("type", "radio");
            input.setAttribute("id", "myInput" + a);
            input.setAttribute("name", "example" + b);
            input.setAttribute("value", arr[j]);
            input.classList.add("form-check-input")
            input.setAttribute("required","");

            recorrer.appendChild(div);
            div.appendChild(input);
            div.appendChild(label);
            
            
          }

        }
      }
      // Código que se ejecutará después de que se cumpla la promesa

    } catch (error) {
      console.error(error);
    }
  }

  let respuestasCoincidientes=[];

  const formulario= document.querySelector("#formulario");

  formulario.addEventListener("submit",resultadoTrivia)

function resultadoTrivia(a){
      a.preventDefault()

      let fieldset= document.querySelectorAll("fieldset"); 

      console.log(pruebaRespuestasC)

      for(let i=0;i<fieldset.length;i++){

        let valoresInput=document.querySelectorAll(".form-check-input").value;

        console.log(valoresInput)

        // let recorreInput = valoresInput[i];
        // let recorrerAnswers= pruebaRespuestasC[i];
        // // let comparation= recorreInput === recorrerAnswers;

        // console.log(recorreInput)
        // console.log(recorrerAnswers)

        // if(comparation===true){

        //   respuestasCoincidientes.push(recorrerAnswers)
        //   console.log(respuestasCoincidientes)
        // }

        // console.log(comparation)
       
      }


}