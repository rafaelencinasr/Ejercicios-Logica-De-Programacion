// Ejercicio #4:

/* 

Mostrar la serie de fibonacci hasta una posicion ingresada por el usuario

 */

// Funcion para resolver el ejercicio
// function(){}


// Funcion para traer valores de los inputs
function calcularFibonacci(){
    // Obtener los valores del input 1 con .value
    let input1 = inputNum1.value;
    let resultString = "0";

        // Se revisa si la variable es un dato numerico
        if((isNaN(input1)|| input1<1) ||!(Number.isInteger(Number(input1)))){
            // Si se obtiene NaN, mostramos un error
            alert('Error! Por favor revise que su valor de entrada sea un número entero positivo.')
        }else{
            // Si no se obtiene NaN, procedemos con las conversiones y se muestran en la pagina
            if(input1-1==0){
                //console.log("Fib: " + resultString);
            } else if(input1-1 == 1){
                resultString += ", 1"
                //console.log("Fib: 1");
            } else{
                resultString = "0, 1"
                let n0 = 0;
                let n1 = 1;
                let n3;
                for(let i = 1; i<input1-1;i++){
                    n3 = n0 + n1;
                    resultString += ", "+n3;
                    n0 = n1;
                    n1 = n3;
                }
            }
            ubicacionA.innerHTML=resultString;
            console.log(resultString)
        }
}

// Para obtener valores desde el DOM
// Ubicacion de los inputs
const inputNum1 = document.querySelector('#inputNum1');


// Para detectar si el usuario presiono Enter en el teclado, crear un evento "click" en botonCalcular
inputNum1.addEventListener("keypress", function(event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
        console.log(`Enter presionado`)
        document.getElementById("botonCalcular").click();
    }
  });


// Ubicacion del boton
const botonCalcular = document.querySelector('#botonCalcular');

// Agregamos un event listener
botonCalcular.addEventListener('click', calcularFibonacci);

// Ubicacion para mostrar resultados
const ubicacionA = document.querySelector('#ubicacionA');