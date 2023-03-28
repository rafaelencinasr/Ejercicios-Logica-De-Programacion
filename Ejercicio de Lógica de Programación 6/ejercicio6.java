
/*
 * Este programa toma una cadena de texto ingresada por el usuario,
 * la invierte y la muestra el usuario
 */

package ejerciciosLogicaProgramacion;

import java.util.Scanner;

public class Ejercicio6 {
	
	public static void reverseString() {
		System.out.println("Este programa recibe una cadena ingresada por el usuario y la inverte.");
		System.out.println("Por favor ingrese la cadena que desea invertir:");
		//Se crea un scanner para que el usuario pueda ingresar la cadena de caracteres
		Scanner input = new Scanner(System.in);
		
		//Se crea una variable del tipo String donde se almacena lo que el usuario ingresa en el scanner
		String cadena = input.nextLine();
		
		//Se crea una variable StringBuilder ya que esta contiene el metodo .reverse() que nos
		//permite invertir cadenas
		StringBuilder cadenaReversed = new StringBuilder();
		
		//Se agrega la cadena original a la cadena StringBuilder con .append()
		cadenaReversed.append(cadena);
		System.out.println("Cadena invertida resultante:");
		
		//Se aplica el metodo .reverse() y se muestra aqui mismo el resultado
		System.out.println(cadenaReversed.reverse());	
	}

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		reverseString();


	}

}
