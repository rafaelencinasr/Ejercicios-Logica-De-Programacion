/*
 	Crear un pueque;o diccionario Espa;ol-Ingles de 20 palabras donde
 	el usuario pueda ingresar buscar una de estas palabras y conocer 
 	su traduccion al ingles.
 	
 	En caso de que la palabra ingresada no se encuentre en el diccionario,
 	mostrar el siguiente mensaje: "La palabra no se encuentra en el diccionario"
 */

package ejerciciosLogicaProgramacion;

import java.util.HashMap;
import java.util.Scanner;

public class Ejercicio9 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		/*
		 	Utilizando un HashMap se almacenaran 20 palabras en forma de llave: valor,
		 	donde la llave sera la palabra en espa;ol y el valor la traduccion en ingles
		 	
		 	Revisar si el input que ingresa el usuario esta contenido en el HashMap con
		 	el metodo .containsKey
		 	- Si la llave existe, mostrar su valor
		 	- Si la llave no existe, mostrar el mensaje de error
		 */

		//Se crea el HashMap con las 20 palabras y sus traducciones
		HashMap<String, String> diccionario = new HashMap<String, String>();
		diccionario.put("tiempo", "time");		//1
		diccionario.put("persona", "person");	//2
		diccionario.put("cosa", "thing");		//3
		diccionario.put("hombre", "man");		//4
		diccionario.put("mujer", "woman");		//5
		diccionario.put("mundo","world");		//6
		diccionario.put("vida","life");			//7
		diccionario.put("mano","hand");			//8
		diccionario.put("ojo","eye");			//9
		diccionario.put("lugar","place");		//10
		diccionario.put("semana","week");		//11
		diccionario.put("ver","see");			//12
		diccionario.put("gustar","like");		//13
		diccionario.put("pensar","think");		//14
		diccionario.put("comer","eat");			//15
		diccionario.put("decir","say");			//16
		diccionario.put("hacer","do");			//17
		diccionario.put("trabajar","work");		//18
		diccionario.put("usar","use");			//19
		diccionario.put("dar","give");			//20
		
		System.out.println("El diccionario contiene las siguientes palabras: ");
		for (String keys : diccionario.keySet()) {
			System.out.println(keys);
		}
		
		System.out.println("*******************************************");
		
		System.out.println("Ingrese la palabra que quiere traducir: ");
		
		Scanner input = new Scanner(System.in);

				
		//Para que el usuario continue ingresando palabras y recibiendo respuestas
		while(input.hasNext())
		{
			//Se toma el input y se guarda en la variabla palabra
			String palabra=input.nextLine();
			
			//Se revisa si el input existe como llave de algun elemento en el HashMap
			if(diccionario.containsKey(palabra)) {
				//Si existe se imprime la palabra y su traduccion
				System.out.println(palabra+" - "+ diccionario.get(palabra));
			} else {
				//Si no existe se imprime el mensaje de error
				System.out.println("La palabra '" + palabra +"' no se encuentra en el diccionario");
			}
			System.out.println("Ingrese una nueva palabra para buscar su traduccion: ");
				
		}
		
		
		
	}//Fin del main

}//Fin de la clase
