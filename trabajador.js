//Polimorfismo 

//Define una interfaz Trabajador con un método realizarTarea().
class Trabajador {
    realizarTarea() {
        throw new Error('Estudiando desarrollo de software');
    }
}

// Implementa la interfaz en las clases Estudiante y Empleado.

class Estudiante extends Trabajador {
   
}


class Empleado extends Trabajador {
    
}

