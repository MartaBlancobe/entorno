package codigo;

import java.util.Scanner; 

/**
 * Clase codigo 
 * Contiene los metodos necesarios para calcular la nota definitiva de un estudiante
 * 
 * @author Marta Blanco
 * @version 17.0
 * @since 31/03/2024
 * 
 */

public class codigo { 

//Declaramos las variables
	/**
	 * Nombre de las notas que seran 3 uf1, uf2, uf3 de tipo double para que sea decimal
	 *acu1, acu2, acu3 y def son variables que utilizaremos para almacenar las notas de las uf
	 * 
     */
double unidad1, unidad2, unidad3; 

double acumulado1, acumulado2, acumulado3, definitiva; 

//utilizames ecaner para poder introducir datos 
/**
 * con Scanner pediremos los valores de las notas al usuario
 */

Scanner entrada = new Scanner(System.in); 

 

///vamos ca crear un metodo para ingresar  

/**
 * Metodo que nos pide el valor de las notas de cada uf
 * 
 */

public void IngresaNotas() { 

//cuando ejeuctamos este metodo lo primnero que queremos es que nos pida notas 
	

System.out.println("ingrese las notas del estudiante"); 

 

System.out.print("ingrese nota 1: "); 

 

unidad1= entrada.nextDouble(); 

 
/**
 *Valor para cada una de las notas
 * 
 */
 

System.out.print("ingrese nota 2: "); 

 

unidad2= entrada.nextDouble(); 

System.out.print("ingrese nota 3: "); 

 

unidad3= entrada.nextDouble(); 

 

 

} 

 

// metodo para comprobar bien entroduccion de notas 
/**
 * Metodo que comprueba que los valores de las notas sean correctos
 * 
 */

 

public void comprobarcion(){ 

 
	/**
	 *A traves de  if comprobaremos que cada una de las notas sea mayor o igual a 0 y menor o igual que 10
	 */
if (unidad1>10) { 

System.out.println(" nota1 mal introducida"); 

 

}else { 

System.out.println(" nota1 correcta"); 

} 

 

if (unidad2>10) { 

System.out.println(" nota2 mal introducida"); 

 

}else { 

System.out.println(" nota2 correcta"); 

} 

if (unidad3>10) { 

System.out.println(" nota3 mal introducida"); 

 

}else { 

System.out.println(" nota3 correcta"); 

} 

 

 

 

 

} 

// metodo para calcular nota 
/**
 * Metodo para calcular la nota final
 * 
 */
 

public void Calculonotas() { 
	
	/**
	 *A traves de los acumulados calcularemos las notas teniendo en cuenta el porcentaje que vale cada uf
	 *Def se refiere a la nota definitiva siendo esta la suma de los 3 acumulados
	 */

acumulado1= unidad1*0.35; 

acumulado2 = unidad2 * 0.35; 

acumulado3 = unidad3 * 0.30; 

 

definitiva = acumulado1 + acumulado2+ acumulado3; 

 

//hasta aqui la tenemos calculada peor no la mostramos 

} 

/**
 * Metodo que nos muestra las notas desglosadas y la final
 * 
 */
public void Mostrar() { 
	

//print ln lo que hace es que al terminar el print baja la linea 
	
	/**
	 *Nos muestra por pantalla el valor de cada nota
	 * 
	 */

System.out.println(" notas introducidas son:"); 

System.out.println(" nota1 = " + unidad1); 

System.out.println(" nota2 = " + unidad2); 

System.out.println(" nota3 = " + unidad3); 

/**
 *Nos muestra por pantalla el valor de cada acumulado
 * 
 */

System.out.println(" acumuado 1 = "+ acumulado1); 

System.out.println(" acumuado 2 = "+ acumulado2); 

System.out.println(" acumuado 3 = "+ acumulado3); 

 
/**
 *Nos muestra por pantalla el valor de la nota definitiva
 * 
 */
System.out.println(" nota definitiva es = "+ definitiva); 

 

} 

/**
 * Metodo que nos indica segun las notas si es aprobado o suspenso o hay errores
 * 
 */

public void aprobado() { 
	

	/**
	 *A traves de if comprobaremos si la nota definitiva esta entre 5 y 0 para que se considere suspenso
	 *Si esta entre 5 y 10 ambos incluidos para que se considere aprobado
	 *Si esta fuera de ese rango para que muestre error
	 */

if(definitiva<5 && definitiva>=0) { 

System.out.println("suspendio"); 

}else {  

if (definitiva>=5 && definitiva<=10 ) { 

System.out.println("aprobado"); 

}else { 

System.out.println(" error en la notas"); 

} 

} 

} 

 
/**
 * Metodo principal donde se invocan los demas metodos
 * @param args Argumentos de la linea de comandos
 */

public static void main(String[] args) { 

// creamos mecanimos para llamar a cualquier metodo fuero de la clase 
	

codigo fc= new codigo(); 

/**
 * Invocar los metodos para ingresar notas, calcularlas, mostrarlas y definir aprobado/suspenso/error
 */

fc.IngresaNotas(); 

fc.comprobarcion(); 

fc.Calculonotas();  

fc.Mostrar(); 

fc.aprobado(); 

 

} 

 

} 

 