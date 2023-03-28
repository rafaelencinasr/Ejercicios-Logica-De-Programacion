// Ejercicio #:

/* 

Escribir un programa que calcule el factorial de un numero, y revise
si el dato ingresado es un numero, si no alertar al usuario y solicitar
otro input

 */




// Funcion para revisar si los datos ingresados son numeros y
// calcular el factorial.
function calcularFactorial(){
    // Obtener los valores del input 1 con .value
    let input1 = inputNum1.value;

        // Se revisa si la variable es un dato numerico
        if(isNaN(input1)){
            // Si se obtiene NaN, mostramos un error
            alert('Error! Por favor revise que su valor de entrada sea un número.')
        }else{
            // Si no se obtiene NaN, procedemos con el calculo y se muestran en la pagina
            let resultado = 1;
            for(let i=1; i<=input1;i++){
                resultado *= i;
            }
            ubicacionResultado.innerHTML = resultado;
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
botonCalcular.addEventListener('click', calcularFactorial);

// Ubicacion para mostrar resultados
const ubicacionResultado = document.querySelector('#ubicacionResultado');
