const Persona = require("./persona");

//Crea una clase Estudiante que herede de la clase Persona
class Estudiante extends Persona {
   
    // Agrega una propiedad adicional para el grado del estudiante
    #gradoEstudiante; 

    establecergradoEstudiante(gradoEstudiante){
        if ( gradoEstudiante == 'String' && gradoEstudiante.trim().length > 0){
            this.#gradoEstudiante = gradoEstudiante; 
        }else{
            throw new Error('Grado del estudiante inválida');
        }
    }
    
   obtenergradoEstudiante(){
        return this.#gradoEstudiante; 
    }

    //Sobrescribe el método toString() para incluir el grado del estudiante al describirlo.
    toString(){
        return `Nombre: ${this.obtenerNombre()}, Edad: ${this.obtenerEdad()}; Fecha de Nacimiento: ${this.obtenerFechaNacimiento()}; Grado del estudiante: ${this.obtenergradoEstudiante()}`; 

}




