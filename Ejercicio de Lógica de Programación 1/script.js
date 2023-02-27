// Ejercicio 1:

// Valores de entrada
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