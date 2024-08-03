class Persona {
    #nombre; 
    #edad; 
    #fechaNacimiento; 

    constructor(nombre, edad, fechaNacimiento){
        this.#nombre = nombre; 
        this.#edad = edad;  
        this.#fechaNacimiento = fechaNacimiento;  
    }

    establecerNombre(nombre) {
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


    calcularFechaNacimiento(){
        const dia = new Date(); 
        const añoNacimiento = dia.getFullYear() - this.#edad;  
        const fechaNacimiento = new Date(añoNacimiento, dia.getMonth(), dia.getDate()); 
        this.#fechaNacimiento = fechaNacimiento; 
        return this.#fechaNacimiento; 
    }

}