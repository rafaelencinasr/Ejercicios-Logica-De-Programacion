// Ejercicio 1:

// Valores de entrada para trabajar desde la consola
let num1 = 1;
let num2 = '132';
let num3 = '5142';

// Esta funcion realiza lo siguiente:
// - Convierte los inputs en datos numericos de tipo flotante
// - Revisa si los datos ingresados son numeros o no
// - Revisa si los tres datos ingresados son iguales o no
// - Acomoda los valores de mayor a menor, y de menor a mayor, y los muestra al usuario

function sortingNumbers(n1, n2, n3){
    // Convertimos los inputs en numeros en caso de recibir strings
    console.log(`Datos ingresados: ${n1}, ${n2}, ${n3}`)
    n1 = parseFloat(n1);
    n2 = parseFloat(n2);
    n3 = parseFloat(n3);
    let tempArray;
    let mayorMenor;
    let menorMayor;
    
    // Revisamos si algun dato no es un numero, "NaN"
    if(!isNaN(n1)&&(!isNaN(n2)&&!isNaN(n3)) ){
        // Si todos los numeros son iguales, desplegamos este mensaje
        if(n1==n2&&n2==n3){
            return console.log(`Todos los numeros son iguales:\n${n1}, ${n2}, ${n3}`)
        }
        // Si hay algun numero diferente
        else{
            // Convertir en array
            tempArray = [n1, n2, n3];
            
            // Sortear con funcion de comparacion b-a para acomodar de mayor a menor
            mayorMenor = tempArray.sort((a, b) => {return b-a});

            // Copiar array en otra variable para hacer reverse() y no afectar
            // al array original
            menorMayor = [...mayorMenor];
            menorMayor.reverse();
            //console.log(`Mayor a menor: ${mayorMenor}`);
            //console.log(`Menor a mayor: ${menorMayor}`);         
            return console.log(`Mayor a menor: ${mayorMenor.join(', ')}\nMenor a mayor: ${menorMayor.join(', ')}`)
        }
    }else{
        return console.log('Error! Por favor revise que los datos introducidos sean numeros.')
    }
}

// Invocamos la funcion
sortingNumbers(num1, num2, num3)



// 
function sortingNumbersDOM(n1, n2, n3){
    // Convertimos los inputs en numeros
    // console.log(`Datos ingresados: ${n1}, ${n2}, ${n3}`)
    n1 = parseFloat(n1);
    n2 = parseFloat(n2);
    n3 = parseFloat(n3);
    let tempArray;
    let mayorMenor;
    let menorMayor;
    
    // Revisamos si algun dato no es un numero, "NaN"
    if(!isNaN(n1)&&(!isNaN(n2)&&!isNaN(n3)) ){
        // Si todos los numeros son iguales, regresamos este mensaje
        if(n1==n2&&n2==n3){
            return 'Iguales'
        }
        // Si hay algun numero diferente
        else{
            // Convertir en array
            tempArray = [n1, n2, n3];
            
            // Sortear con funcion de comparacion b-a para acomodar de mayor a menor
            mayorMenor = tempArray.sort((a, b) => {return b-a});

            // Copiar array en otra variable para hacer reverse() y no afectar
            // al array original
            menorMayor = [...mayorMenor];
            menorMayor.reverse();
            //console.log(`Mayor a menor: ${mayorMenor}`);
            //console.log(`Menor a mayor: ${menorMayor}`);   

            // Regresamos el resultado en un array
            let returnArray = [mayorMenor.join(', '), menorMayor.join(', ')]      
            return returnArray;
        }
    }else{
        // En caso de que algun dato ingresado no sea un numero, regresamos un error
        return 'Error';
    }
}

function obtenerValoresyCalcular(){
    // Obtener los valores de los inputs 1, 2, y 3, con .value
    let input1 = inputNum1.value;
    let input2 = inputNum2.value;
    let input3 = inputNum3.value;

    // Invocamos nuestra funcion con los inputs previamente obtenidos como parametros
    let results = sortingNumbersDOM(input1, input2, input3);
    // console.log('Resultado de la funcion: ', results);

    // Revisamos si:
    // - Hubo algun error
    // - Todos los numeros introducidos son iguales
    // Si no pasa ninguno de los das situaciones, se obtiene un array los strings de
    // resultados ordenados y los ingresar como innerHTML al elemento de ubicacion

    switch(results){
        case 'Error':
            alert('¡Error!\nPor favor revise que los datos introducidos sean números.');
            break;
        case 'Iguales':
            alert(`Todos los numeros son iguales:\n${input1}, ${input2}, ${input3}`);
            ubicacionMayor.innerHTML = `${input1}, ${input2}, ${input3}`;
            ubicacionMenor.innerHTML = `${input1}, ${input2}, ${input3}`; 
            break;
        default:
            ubicacionMayor.innerHTML = results[0];
            ubicacionMenor.innerHTML = results[1];    
    }
}

// Para obtener valores desde el DOM
// Ubicacion de los inputs
const inputNum1 = document.querySelector('#inputNum1');
const inputNum2 = document.querySelector('#inputNum2');
const inputNum3 = document.querySelector('#inputNum3');


// Ubicacion del boton
const botonCalcular = document.querySelector('#botonCalcular');

// Agregamos un event listener
botonCalcular.addEventListener('click', obtenerValoresyCalcular);

// Ubicacion para mostrar resultados
const ubicacionMayor = document.querySelector('#ubicacionMayor');
const ubicacionMenor = document.querySelector('#ubicacionMenor');