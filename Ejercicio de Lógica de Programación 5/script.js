// Ejercicio #:

/* 

Pequeño resumen del ejercicio

 */

// Funcion para resolver el ejercicio
// function(){}


// Funcion para traer valores de los inputs
  //Se inicializa una variable con un numero random entre 1 y 100, redondeando
    // a un numero entero con Math.floor
    var numeroSecreto;
    let secretFlag = true;
function generarNumeroSecreto(){
    if(secretFlag){
        numeroSecreto = Math.floor((Math.random() * 100) + 1);
    }
}

generarNumeroSecreto();

function encontrarNumeroSecreto(){
    // Obtener los valores de los inputs 1, 2, y 3, con .value
    let input1 = inputNum1.value;
    let input2 = inputNum2.value;
    
    //Si el input 2 no esta vacio, el numero ingresado es el nuevo numero aleatorio,
    //pero primero se revisa si el dato ingresado es un numero entero positivo en el
    //rango de 1<= input <= 100
    if(input2!=""){
        console.log("Hay numero secreto diferente");
        if((isNaN(input2)|| (input2<1||input2>100)) ||!(Number.isInteger(Number(input2)))){
            // Si se obtiene NaN, mostramos un error
            alert('Error! Por favor ingrese un numero secreto entre 1 y 100, o deje en blanco para generar un numero secreto aleatorio.')
        } else{
            //Se asigna el nuevo numero secreto
            numeroSecreto = input2;
            console.log("Nuevo numero secreto: "+ numeroSecreto);
            //Se modifica la bandera a true para que la proxima vez que el input opcional este vacio, se pueda generar un nuevo numero aleatorio
            secretFlag = true;
        }
    } else{
        //Si el input2 esta vacio, no se le vuelve a asignar valor al numero secreto
        //Se llama a la funcion para generar un numero secreto aleatorio
        generarNumeroSecreto();
        //Se cambia la bandera a false para que no se genere un nuevo numero aleatorio cada vez que se pique el boton de calcular
        secretFlag = false;
        console.log("Numero secreto random: " + numeroSecreto);
    }

     // Se revisa si la variable es un dato numerico
     if((isNaN(input1)|| (input1<1||input1>100)) ||!(Number.isInteger(Number(input1)))){
        // Si se obtiene NaN, mostramos un error
        alert('Error! Por favor revise que su valor de entrada sea un número entero positivo entre 1 y 100.')
    }
    //Si el numero ingresado para adivinar es un numero valido, se procede a comparar
    else{
        
        //El texto de la ubicacionB se cambia dependiendo del
        if(input1==numeroSecreto){
            ubicacionB.textContent="Felicidades, adivinaste el número secreto.";
        }
        else{
            ubicacionB.textContent= "Ups, el número secreto es incorrecto, vuelve a intentarlo";
        }
        //Se van mostrando en el DOM los numeros que el usuario ha ingresado
        ubicacionA.innerHTML += input1 + ", ";
        
    }
}

// Para obtener valores desde el DOM
// Ubicacion de los inputs
const inputNum1 = document.querySelector('#inputNum1');
const inputNum2 = document.querySelector('#inputNum2');

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
botonCalcular.addEventListener('click', encontrarNumeroSecreto);

// Ubicacion para mostrar resultados
const ubicacionA = document.querySelector('#ubicacionA');
const ubicacionB = document.querySelector('#ubicacionB');