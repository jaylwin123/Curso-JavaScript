// --- EJERCICIO 1: Clases Básicas ---
// Crea una clase 'Coche' con marca, modelo y un método para mostrar info.

class Coche {
    constructor(marca, modelo, anio) {
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
        
    }

    mostrarInfo() {
        console.log(`Coche: ${this.marca} ${this.modelo} (${this.anio})`);
    }
}

console.log("--- Ejercicio 1 ---");
const auto1 = new Coche("Toyota", "Corolla", 2020);
auto1.mostrarInfo();


// --- EJERCICIO 2: Herencia (extends) y super() ---
// Crea una clase 'Cuadrado' que herede de una clase 'Rectangulo'.
// El cuadrado usa el mismo valor para ancho y alto.

class Rectangulo {
    constructor(ancho, alto) {
        this.ancho = ancho;
        this.alto = alto;
    }

    calcularArea() {
        return this.ancho * this.alto;
    }
}

class Cuadrado extends Rectangulo {
    constructor(lado) {
        // 4. Llama al constructor del padre (super) pasándole el lado dos veces (ancho y alto)
        super(lado, lado);
    }
}

console.log("\n--- Ejercicio 2 ---");
const miCuadrado = new Cuadrado(5); // Lado de 5
console.log("Área del cuadrado (Debería ser 25):", miCuadrado.calcularArea());


// --- EJERCICIO 3: Lógica dentro de Métodos ---
// Una cuenta bancaria donde puedes depositar y retirar, pero no puedes quedar en negativo.

class CuentaBancaria {
    constructor(titular, saldoInicial = 0) {
        this.titular = titular;
        this.saldo = saldoInicial;
    }

    depositar(cantidad) {
        // 5. Suma la cantidad al saldo e imprime el nuevo saldo
        this.saldo += cantidad;
        console.log(`${this.titular} depositó $${cantidad}. Nuevo saldo: $${this.saldo}`);
    }

    retirar(cantidad) {
        // 6. Verifica si la cantidad es mayor al saldo.
        if (cantidad > this.saldo) {
            console.log(`Error: Fondos insuficientes. Saldo actual: $${this.saldo}`);
        } else {
            this.saldo -= cantidad;
            console.log(`${this.titular} retiró $${cantidad}. Saldo restante: $${this.saldo}`);
        }
    }
}

console.log("\n--- Ejercicio 3 ---");
const cuenta = new CuentaBancaria("Juan", 100);
cuenta.depositar(50);  // Debería quedar en 150
cuenta.retirar(200);   // Debería dar error
cuenta.retirar(30);    // Debería quedar en 120