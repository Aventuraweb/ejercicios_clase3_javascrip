const Persona = require("./persona");

//Crea una clase Estudiante que herede de la clase Persona
class Estudiante extends Persona {
   
    // Agrega una propiedad adicional para el grado del estudiante
    #gradoEstudiante; 

     // Utiliza constructores para inicializar las propiedades heredadas y propias de la clase Estudiante.

     constructor(nombre, edad, fechaNacimiento, gradoEstudiante){
        super(nombre, edad, fechaNacimiento); 
        this.#gradoEstudiante = gradoEstudiante; 
    }

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

    // Sobrescribe el método toString() para incluir el grado del estudiante al describirlo.
    toString(){
        return `Nombre: ${this.obtenerNombre()}, Edad: ${this.obtenerEdad()}; Fecha de Nacimiento: ${this.obtenerFechaNacimiento()}; Grado del estudiante: ${this.obtenergradoEstudiante()}`; 

}

}

// uso 

const estudiante = new Estudiante ('Jaqueline', 31, '1993-06-20', 'Tecnología'); 
console.log(estudiante.toString()); 

estudiante.obtenergradoEstudiante(); 


