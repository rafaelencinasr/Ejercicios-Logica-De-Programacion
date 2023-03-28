
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
		Scanner input = new Scanner(System.in);
		String cadena = input.nextLine();
		StringBuilder cadenaReversed = new StringBuilder();
		cadenaReversed.append(cadena);
		System.out.println("Cadena invertida resultante:");
		System.out.println(cadenaReversed.reverse());	
	}

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		reverseString();


	}

}
