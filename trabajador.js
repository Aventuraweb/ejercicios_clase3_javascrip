//Polimorfismo 

//Define una interfaz Trabajador con un método realizarTarea().
class Trabajador {
    realizarTarea() {
        throw new Error('Estudiando desarrollo de software');
    }
}

// Implementa la interfaz en las clases Estudiante y Empleado.



class Estudiante extends Trabajador {

    // En la implementación de realizarTarea() de Estudiante, imprime "Realizando tarea escolar".
    realizarTarea() {
        console.log('Realizando tarea escolar');
    }
}

class Empleado extends Trabajador {

    // En la implementación de realizarTarea() de Empleado, imprime "Realizando tarea laboral".
    realizarTarea() {
        console.log('Realizando tarea laboral');
    }
}

// Utiliza clases anónimas o lambdas para implementar la interfaz Trabajador de manera más concisa.

const estudiantes = {
    realizarTarea: () => {
        console.log('Realizando tarea escolar');
    }
};

const empleados = {
    realizarTarea: () => {
        console.log('Realizando tarea laboral');
    }
};

// Ejecución de las tareas
const estudiante = new Estudiante();
const empleado = new Empleado();

estudiante.realizarTarea();
empleado.realizarTarea();

estudiantes.realizarTarea();
empleados.realizarTarea();