
/*
 	Este programa elige 5 palabras en espa;ol al azar de entre 20 que existen
 	en un diccionario Espa;ol-Ingles, y pide que el usuario ingrese
 	la traducccion al ingles, al final mostrar cuantas palabras fueron
 	traducidas correctamente.
 	
 */

package ejerciciosLogicaProgramacion;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Random;
import java.util.Scanner;

public class ejercicio10 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
/*
		Se crea un HashMap con las 20 palabras y sus respectivas traducciones
		
		Se crea un ArrayList que contengan las 20 llaves utilizando un forEach y .keySet()
		
		Por medio de un for(i<5), se genera un indice aleatorio para obtener cada palabra
		
		Metodo random desde 0 hasta ArrayList.length
		
		
		Se toma el elemento en el indice random, y se utiliza como llave para buscar en el
		Hashmap su valor correspondiente.
		(Se elimina el elemento del ArrayList para evitar que se vuelva a repetir)
		
		Se pide al usuario ingresar la traduccion y se compara contra el valor que tenemos
		en el HashMap:
		- Si es igual, una variable que utilizaremos como contador se incrementa por 1
			-Se muestra un mensaje al usuario que su traduccion fue correcta y el numero actual
			 de aciertos
		- Si no es igual, el contador no se modifica.
			-Se muestar un mensaje al usuario que su traduccion fue incorrecta, y el numero actual
			 de aciertos
*/
		//HashMap con las 20 palabras y sus traducciones
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
		//ArrayList donde guardaremos las 20 llaves
		ArrayList<String> llaves = new ArrayList<String>();
		
		//Ciclo forEach para guardar las llaves en el ArrayList
		for (String keys : diccionario.keySet()) {
			llaves.add(keys);
			System.out.println(keys);
		}
		
		System.out.println("*******************************************");
		
//		for(int i =0; i<llaves.size();i++) {
//			System.out.println(llaves.get(i));
//		}
		//Se crea un nuevo objeto tipo Random
		Random random = new Random();
		//Se crea un scanner
		Scanner input = new Scanner(System.in);
		//Variable que acumula el numero de aciertos
		int contadorAciertos = 0;
		
		//Ciclo para obtener 5 llaves aleatorias desde el ArrayList
		for(int i = 1; i<6 ; i++) {
			//Genera un numero random entre 0 y llaves.size()-1
			int randomIndex = random.nextInt(llaves.size());
			System.out.println("Por favor ingrese la traduccion para la siguiente palabra: ");
			//Se muestra la palabra que se busca traducir
			System.out.println(i+". " + llaves.get(randomIndex) );
			//Se obtiene el input del usuario y se guarda en una variable String
			String traduccion = input.nextLine();

			//Se revisa si el dato ingresado por el usuario es igual a lo que tenemos en el HashMap
			if(diccionario.get(llaves.get(randomIndex)).equalsIgnoreCase(traduccion)) {
				//Si son iguales, se muestra un mensaje y se incremente el contador de aciertos
				System.out.println("⭐ Traduccion correcta ⭐");
				contadorAciertos++;
			} else {
				//Si son diferentes se muestra un mensaje
				System.out.println("❌ Traduccion incorrecta ❌");
			}
			//Se elimina el elemento del ArrayList con el index random para
			//evitar que se repitan las llaves
			llaves.remove(randomIndex);
		}
		
		//Se imprime la cantidad de aciertos obtenidos
		System.out.println("Usted tuvo " + contadorAciertos +" aciertos.");

		
		
		
	}//Fin del main

}//Fin de la clase
