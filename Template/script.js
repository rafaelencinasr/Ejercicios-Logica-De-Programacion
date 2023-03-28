// Ejercicio #:

/* 

Pequeño resumen del ejercicio

 */

// Funcion para resolver el ejercicio
// function(){}


// Funcion para traer valores de los inputs
function obtenerValoresDeInputsYProgramaSolucion(){
    // Obtener los valores de los inputs 1, 2, y 3, con .value
    let input1 = inputNum1.value;
    let input2 = inputNum2.value;
    let input3 = inputNum3.value;

    switch(results){
        case 'Error':
            alert('¡Error!\nPor favor revise que los datos introducidos sean números.');
            break;
        case 'Iguales':
            
            break;
        default:
            
    }
}

// Para obtener valores desde el DOM
// Ubicacion de los inputs
const inputNum1 = document.querySelector('#inputNum1');
const inputNum2 = document.querySelector('#inputNum2');
const inputNum3 = document.querySelector('#inputNum3');

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
botonCalcular.addEventListener('click', obtenerValoresDeInputs);

// Ubicacion para mostrar resultados
const ubicacionA = document.querySelector('#ubicacionA');
const ubicacionB = document.querySelector('#ubicacionB');