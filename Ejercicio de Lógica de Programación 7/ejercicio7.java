
/*
 
  Este programa toma un dia y hora de la semana y se calcula cuantos
  minutos faltan para que comience el fin de semana (Viernes a las 15:00)
 
 */


package ejerciciosLogicaProgramacion;



import java.time.LocalDateTime;
import java.time.temporal.ChronoUnit;
import java.util.Scanner;

public class Ejercicio7 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		/*
		 
			Solicitar al usuario que ingrese un dia de la semana (Lunes a Viernes)
			Tomar el input del usuario y guardarlo en una variable.
			Solicitar y guardar hora y minutos del dia ingresado.
		  	Con un switch case, asignar un numero de dia especifico de una semana real en marzo de 2023
		  	Establecer el dia, hora y minutos del objeto tipo LocalDateTime en un dia real de marzo, del 2023
		  	Crear un objeto tipo LocalDateTime de un viernes a las 15:00 en un dia real de marzo, del 2023
		  
		  	Obtener la diferencia entre ambas fechas en minutos
		  	Verificar si el resultado es mayor de 0, y mostrar la diferencia en minutos.
		  	
		 
		 */
		
		//Se crea el scanner
		Scanner input = new Scanner(System.in);
		System.out.println("Por favor ingrese el dia de la semana (Lunes-Viernes):");
		
		//Se guarda el dia ingresado
		String dia = input.nextLine().toLowerCase();
		System.out.println(dia);
		System.out.println("Por favor ingrese la hora en formato 'HH' de 24 horas (ejemplo: 14, 05, 21, 10):");
		//Se guarda la hora
		String hora = input.nextLine();
		System.out.println("Por favor ingrese los minutos en formato 'MM' (ejemplo: 44, 25, 01, 00, 30):");
		//Se guardan los minutos
		String minutos = input.nextLine();

		//Dependiendo del dia ingresado, se cambia la variable por un dia en especifico
		
		switch (dia) {
		case "lunes":
			dia="27";
			break;
		case "martes":
			dia="28";
			break;
		case "miercoles":
			dia="29";
			break;
		case "jueves":
			dia="30";
			break;
		case "viernes":
			dia="31";
			break;
		default:
			dia="31";
			System.out.println("Dia ingresado invalido, se tomara como dia Viernes");
			break;
		}
		//Se crea una fecha especifica en el mes de marzo del presente a;o,
		//con el dia, horas y minutos previamente obtenidos en el formato de
		//"AAAA-MM-DDTHH-MM-SS"
	    LocalDateTime fechaIngresada = LocalDateTime.parse("2023-03-"+dia+"T"+hora+":"+minutos+":00");
	   
	    //La fecha contra la que se hara la comparacion viernes 31 de marzo a las 15:00
	    LocalDateTime fechaViernes = LocalDateTime.parse("2023-03-31T15:00:00");
	    
	    //Con el metodo .between de ChronoUnit, podemos calcular el tiempo entre 2 fechas
	    //Al definir que queremos MINUTES, recibimos el resultado en minutos.
	    long minutes = ChronoUnit.MINUTES.between(fechaIngresada, fechaViernes);
	   
	    //Si minutes es igual o menor a 0, ya es fin de semana
	    if(minutes<=0) {
	    	System.out.println("Ya es fin de semana.");
	    } else {
	    	//Si minutes es mayor a 0, todavia no es fin de semana
	    	System.out.println("Faltan: " + minutes+" minutos para el fin de semana.");
	    }


	}//Fin del main

}
