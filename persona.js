// Encapsulamiento:

// Define una clase Persona con propiedades privadas para el nombre, la edad y la fecha de nacimiento.

class Persona {
    #nombre; 
    #edad; 
    #fechaNacimiento; 

    constructor(nombre, edad, fechaNacimiento){
        this.#nombre = nombre; 
        this.#edad = edad;  
        this.#fechaNacimiento = fechaNacimiento;  
    }

    // Implementa métodos públicos establecerNombre(), obtenerNombre(), establecerEdad(), obtenerEdad(), establecerFechaNacimiento() y obtenerFechaNacimiento() para manipular estas propiedades de manera segura.

    establecerNombre(nombre) {
        // Agrega validaciones en los métodos de establecimiento para garantizar que los valores proporcionados sean válidos (por ejemplo, la edad no puede ser negativa).
        if ( nombre === 'string' && nombre.trim().length > 0) {
            this.#nombre = nombre;
        } else {
            throw new Error('Nombre inválido');
        }

    }

    obtenerNombre() {
        return this.#nombre;
    }

    establecerEdad(edad) {
        if ( edad === 'number' && edad >= 0) {
            this.#edad = edad;
        } else {
            throw new Error('Edad inválida');
        }

    }

    obtenerEdad() {
        return this.#edad;
    }

    
    establecerFechaNacimiento(fechaNacimiento) {
        const fecha = new Date(fechaNacimiento);
        if ( !isNaN(fecha) ) {
            this.#fechaNacimiento = fecha;
        } else {
            throw new Error('Fecha de nacimiento inválida');
        }

    }

    obtenerFechaNacimiento() {
        return this.#fechaNacimiento
    }

    // Implementa un método adicional calcularFechaNacimiento() que calcule la fecha de nacimiento a partir de la edad.
    calcularFechaNacimiento(){
        const dia = new Date(); 
        const añoNacimiento = dia.getFullYear() - this.#edad;  
        const fechaNacimiento = new Date(añoNacimiento, dia.getMonth(), dia.getDate()); 
        this.#fechaNacimiento = fechaNacimiento; 
        return this.#fechaNacimiento; 
    }

}

