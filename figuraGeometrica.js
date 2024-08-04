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

// Crea subclases como Rectangulo, Circulo, etc., que hereden de FiguraGeometrica y tengan propiedades adicionales como longitud, ancho, radio, etc.

class Rectangulo extends FiguraGeometrica{

    #longitud; 
    #ancho;

    constructor(nombre, color, longitud, ancho){
        super(nombre, color); 
        this.#longitud = longitud; 
        this.#ancho = ancho; 
    }   
      
}

class Circulo extends FiguraGeometrica {

    #radio; 

    constructor(nombre, color, radio){
        super(nombre, color); 
        this.#radio = radio;  
    }

}