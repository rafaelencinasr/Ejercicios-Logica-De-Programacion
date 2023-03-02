// Ejercicio 2:



/* // Metodo por consola
 // Escribir un programa que convierta de grados Celisus a grados Fahrenheit y a Kelvin

// Para hacer pruebas
 let tempC = 35;     

// Funcion c -> f
// formula: (C × 9/5) + 32
const celsiusToFahr = tempC => {return `Grados Fahrenheit: ${(tempC*9/5)+32}°F`};

// Funcion c -> k
// formula: C + 273.15 
const celsiusToKelv = tempC => {return `Grados Kelvin: ${tempC+273.15}°K`};

function tempConverter(tempC){
    tempC = parseFloat(tempC);
    if(isNaN(tempC)){
        // error
        alert('Error! Por favor revise que su valor de entrada sea un número.')
    }else{
        console.log(`Grados Celsius introducidos: ${tempC}°C`);
        console.log(celsiusToFahr(tempC));
        console.log(celsiusToKelv(tempC));
    }
}
 */

// Funcion c -> f
// formula: (C × 9/5) + 32
const celsiusToFahr = tempC => {return `${(tempC*9/5)+32}°F`};

// Funcion c -> k
// formula: C + 273.15 
const celsiusToKelv = tempC => {return `${tempC+273.15}°K`};

// Funcion para traer valores de los inputs
function tempConverter(){

    // Obtener valor del input de temperatura celsius .value
    let tempC = inputTempC.value;
    // Se convierte el valor a un numero float
    tempC = parseFloat(tempC);
    
    // Se revisa si la variable es un dato numerico
    if(isNaN(tempC)){
        // Si se obtiene NaN, mostramos un error
        alert('Error! Por favor revise que su valor de entrada sea un número.')
    }else{
        // Si no se obtiene NaN, procedemos con las conversiones y se muestran en la pagina
        tempF.innerHTML = celsiusToFahr(tempC);
        tempK.innerHTML = celsiusToKelv(tempC);  
    }
}

// Para obtener valores desde el DOM
// Ubicacion de los inputs
const inputTempC = document.querySelector('#inputTempC');

// Para detectar si el usuario presiono Enter en el teclado, crear un evento "click" en botonCalcular
inputTempC.addEventListener("keypress", function(event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
        console.log(`Temperatura ingresada por Enter: ${inputTempC.value}`)
        document.getElementById("botonCalcular").click();
    }
  });



// Ubicacion del boton
const botonCalcular = document.querySelector('#botonCalcular');

// Agregamos un event listener
botonCalcular.addEventListener('click', tempConverter);

// Ubicacion para mostrar resultados
const tempF = document.querySelector('#tempF');
const tempK = document.querySelector('#tempK');