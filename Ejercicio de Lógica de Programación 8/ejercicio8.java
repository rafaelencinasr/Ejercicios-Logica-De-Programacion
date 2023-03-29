/*
 	Este programa toma 10 numeros enteros y los almacena en un array
 	Despues se revisan cuales de estos numeros son primos y estos se colocan
 	en las primeras posiciones de array
 	
 	Al final se muestra el array acomodado, mostrando la posicion y el valor
 	correspondiente
 */


package ejerciciosLogicaProgramacion;

import java.util.ArrayList;
import java.util.Scanner;

public class Ejercicio8 {
	
	public static boolean checkPrime(int element) {
		boolean primeFlag = false;
		
		//Se revisa el modulo entre el elemento y "i", si alguno de estos es igual a 0
		// el numero no es primo
		for(int i = 2; i<element;i++ ) {
			if(element%i==0) {
				//No es primo
				primeFlag = true;
			}
		}
		//Si el numero es 1 o menor, no es un numero primo
		if(element<=1) {
			primeFlag = true;
		}
//		if(!primeFlag) {
//			System.out.println(element+ " es numero primo");
//			primeNumbers.add(element)
//		} else {
//			nonPrimeNumbers.add(element)
//			System.out.println(element+ " no es numero primo");
//		}
		return !primeFlag;
	}//Fin de la funcion

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		// for i<10 para que el usuario ingrese por medio de un scanner los numeros,
		// y que el indice del array se vaya recorriendo
		
		/*
		 Al tener los 10 inputs hacer un forEach que revise si el numero es primo o no
		 Si es primo se agrega a un segundo array: arrayPrimos
		 Si no es primo se agrega a un tercer array: arrayNoPrimos
		 Al final se toma el segundo y el tercer array se crea un 4to array, colocando primero
		 los elementos del arrayPrimos y luego los elementos del arrayNoPrimos
		 
		 Al finalizar el programa un tercer for que muestre cada indice y valor de los elementos
		 del 4to array
		 */
		
		//Se crea un ArrayList donde se iran guardando los numeros ingresados
		ArrayList<Integer> inputNumbers = new ArrayList<Integer>();
		
	    ArrayList<Integer> primeNumbers = new ArrayList<Integer>();
		ArrayList<Integer> nonPrimeNumbers = new ArrayList<Integer>();
		ArrayList<Integer> orderedNumbers = new ArrayList<Integer>();
	
		Scanner input = new Scanner(System.in);
		System.out.println("Por favor ingrese 10 numeros enteros:");
		//Con un ciclo for se pide que se ingresen 10 numeros enteros.
		for(int i = 0; i<10; i++) {
			inputNumbers.add(input.nextInt());
		}
		
		inputNumbers.forEach(element -> {
			if(checkPrime(element)) {
				primeNumbers.add(element);
				System.out.println(element + " es primo");
			} else {
				nonPrimeNumbers.add(element);
				System.out.println(element + " no es primo");
			}
		});
		
		//Se agregan todos los elementos de ambos arreglos en un 4to arreglo
		orderedNumbers.addAll(primeNumbers);
		orderedNumbers.addAll(nonPrimeNumbers);
		
		//Mostrar el orden original
		System.out.println("Array original");
		for(int i = 0; i<10; i++) {
			System.out.println("pos["+i+"] = "+inputNumbers.get(i));
		}
		System.out.println("Array ordenado");
		//Mostrar el array con nuevo orden
		for(int i = 0; i<10; i++) {
			System.out.println("pos["+i+"] = "+orderedNumbers.get(i));
			//System.out.println(orderedNumbers.get(i));
		}
		
		// 4to array list donde se combian los dos arraylists
		//for(i<10) que imprime el indice y el elemnto del 4to array
		

	}

}
