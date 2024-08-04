// Encapsulamiento y Herencia:

// Crea una clase base FiguraGeometrica con propiedades privadas para el nombre y el color de la figura.

class FiguraGeometrica {

    #nombre;  
    #color;  

    constructor(nombre, color){
        this.#nombre = nombre; 
        this.#color = color; 
    }

    // Implementa métodos públicos establecerNombre(), obtenerNombre(), establecerColor() y obtenerColor() para manipular estas propiedades demanera segura.

    establecerNombre(nombre){
        if ( nombre === 'string' && nombre.trim().length > 0) {
            this.#nombre = nombre;
        } else {
            throw new Error('Nombre inválido');
        }

    }

    obtenerNombre(){
        return this.#nombre

    }

    establecerColor(color){
        if ( color === 'string' && nombre.trim().length > 0) {
            this.#color = color;
        } else {
            throw new Error('color inválido');
        }

    }

    obtenerColor(){
        return this.#color
    }
}