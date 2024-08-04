// Herencia y Polimorfismo:

// Define una clase Empleado con propiedades como nombre, salario, etc.

class Empleado {

    nombre; 
    salarioBase; 

    constructor(nombre, salarioBase){

        this.nombre = nombre; 
        this.salarioBase = salarioBase; 
    }

    establecerNombre(nombre){
        if ( nombre === 'string' && nombre.trim().length > 0) {
            this.nombre = nombre;
        } else {
            throw new Error('Nombre inválido');
        }
    }

    obtenerNombre(){
        return this.nombre = this.nombre; 
    }

}

// Crea subclases como Gerente, Vendedor, etc., que hereden de Empleado

class Gerente extends Empleado {


 }

 class Vendedor extends Empleado {


 }

 class JefeVentas extends Empleado {

    
 }