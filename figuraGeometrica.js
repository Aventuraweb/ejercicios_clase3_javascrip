// Encapsulamiento y Herencia:

//Crea una clase base FiguraGeometrica con propiedades privadas para el nombre y el color de la figura.

class FiguraGeometrica {

    #nombre;  
    #color;  

    constructor(nombre, color){
        this.#nombre = nombre; 
        this.#color = color; 
    }
}