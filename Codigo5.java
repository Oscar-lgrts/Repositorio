package com.generation.ejercicios;
import java.util.Scanner;

public class Codigo5 {
	
	public static void main (String[] args) { 

    Scanner scanner = new Scanner(System.in);
    System.out.println("Introduzca un número: ");
    int numeroElegido = scanner.nextInt();
    // int c = ni;
    
    int afortunado = 0;
    int noAfortunado = 0;
   
	while (numeroElegido > 0) {
	    	// Se elimina el casteo (int)
		  int digito = (numeroElegido % 10);
	      if ((digito == 3) || (digito == 7) || (digito == 8) || (digito == 9)) {
	    	  afortunado++;
	      } else {
	    	  noAfortunado++;
	      }
	      numeroElegido /= 10;
	     // else
	    if (afortunado > noAfortunado) {
	    	//Se sustituye c -> ni debido a que c ya no es utilizado
	    	// Se cambia el .prinln -> println
	      System.out.println("El " + numeroElegido + " es un número afortunado.");
	    } else {
	      System.out.println("El " + numeroElegido + " no es un número afortunado.");
	    } // else
	    
	  } // while
	    
	    scanner.close(); // Cerramos el Scanner para liberar recursos
  
	} 
} 
