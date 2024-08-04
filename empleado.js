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

    // Implementa el método calcularSalario() en cada subclase de la siguiente manera: En Gerente, calcula el salario base más un bono.
    Bono; 

    constructor(nombre, salarioBase, Bono){
        super(nombre, salarioBase); 
        this.Bono = Bono; 
    }

    calcularSalario(){
        return this.salarioBase + this.Bono; 

    }

 }

 class Vendedor extends Empleado {

    // Implementa el método calcularSalario() en cada subclase de la siguiente manera: En Vendedor, calcula el salario base más una comisión sobre las ventas
    comision; 
    ventas; 

    constructor(nombre, salarioBase, comision, ventas){
        super(nombre, salarioBase); 
        this.comision = comision; 
        this.ventas = ventas; 
    }

    calcularSalario(){
        return this.salarioBase + this.comision + this.ventas; 
    }

 }

 class JefeVentas extends Empleado {

    // Implementa el método calcularSalario() en cada subclase de la siguiente manera: En otras subclases, define reglas específicas para calcular el salario.
    comision; 
    BonificacionPorAntiguedad;

    constructor(nombre, salarioBase, comision, BonificacionPorAntiguedad){
        super(nombre, salarioBase); 
        this.comision = comision; 
        this.BonificacionPorAntiguedad = BonificacionPorAntiguedad; 
    }

    calcularSalario(){
        return this.salarioBase + this.comision + this.BonificacionPorAntiguedad; 
    }

 }

const gerente = new Gerente('Ana Maria', 9000000, 2000000);
const vendedor = new Vendedor('Catalina', 995724, 470000, 600000); 
const jefeVentas = new JefeVentas('Paola', 2000000, 3000000, 1500000);

const empleados = [gerente, vendedor, jefeVentas];

empleados.forEach(empleado => {
    console.log(`Empleado: ${empleado.obtenerNombre()}`);
    console.log(`Salario: ${empleado.calcularSalario()}`);
});