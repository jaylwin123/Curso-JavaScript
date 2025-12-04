// --- Las funciones más populares del objeto Math en JavaScript ---

// 1. Math.random()
// Genera un número aleatorio entre 0 (inclusive) y 1 (exclusivo).
// Es la base para generar cualquier aleatoriedad.
console.log("--- Math.random() ---");
let aleatorio = Math.random();
console.log("Aleatorio entre 0 y 1:", aleatorio);
// Ejemplo común: Número aleatorio entre 1 y 10
let entre1y10 = Math.floor(Math.random() * 10) + 1;
console.log("Aleatorio entre 1 y 10:", entre1y10);

// 2. Math.floor()
// Redondea hacia ABAJO al entero más cercano. (Quita los decimales sin redondear hacia arriba).
console.log("\n--- Math.floor() (Suelo) ---");
console.log("Math.floor(4.9):", Math.floor(4.9)); // 4
console.log("Math.floor(4.1):", Math.floor(4.1)); // 4

// 3. Math.ceil()
// Redondea hacia ARRIBA al entero más cercano.
console.log("\n--- Math.ceil() (Techo) ---");
console.log("Math.ceil(4.1):", Math.ceil(4.1)); // 5
console.log("Math.ceil(4.9):", Math.ceil(4.9)); // 5

// 4. Math.round()
// Redondea al entero más cercano (el redondeo clásico).
// .5 o más sube, menos de .5 baja.
console.log("\n--- Math.round() (Redondeo) ---");
console.log("Math.round(4.5):", Math.round(4.5)); // 5
console.log("Math.round(4.4):", Math.round(4.4)); // 4

// 5. Math.max() y Math.min()
// Devuelven el número mayor o menor de una lista de argumentos.
console.log("\n--- Math.max() y Math.min() ---");
console.log("Máximo de (1, 5, 10, 2):", Math.max(1, 5, 10, 2)); // 10
console.log("Mínimo de (1, 5, 10, 2):", Math.min(1, 5, 10, 2)); // 1

// Truco: Usar con arrays usando el operador spread (...)
const numeros = [10, 20, 5, 80, 3];
console.log("Máximo de un array:", Math.max(...numeros)); // 80

// 6. Math.pow()
// Eleva un número a una potencia (base, exponente).
console.log("\n--- Math.pow() (Potencia) ---");
console.log("2 elevado a 3:", Math.pow(2, 3)); // 8 (2 * 2 * 2)

// 7. Math.sqrt()
// Raíz cuadrada de un número.
console.log("\n--- Math.sqrt() (Raíz Cuadrada) ---");
console.log("Raíz cuadrada de 64:", Math.sqrt(64)); // 8

// 8. Math.abs()
// Valor absoluto (convierte negativos a positivos).
console.log("\n--- Math.abs() (Valor Absoluto) ---");
console.log("Absoluto de -50:", Math.abs(-50)); // 50
console.log("Absoluto de 50:", Math.abs(50));  // 50

// 9. Math.trunc()
// Elimina los decimales, dejando solo la parte entera (similar a floor para positivos, pero diferente en negativos).
console.log("\n--- Math.trunc() (Truncar) ---");
console.log("Math.trunc(4.9):", Math.trunc(4.9)); // 4
