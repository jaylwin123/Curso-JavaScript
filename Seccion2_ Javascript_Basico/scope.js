// Scope Funcional vs Scope de Bloque

// 1. SCOPE FUNCIONAL (VAR):
// Las variables creadas con 'var' viven dentro de la FUNCIÓN donde se crearon.
// IMPORTANTE: Ignoran los bloques como if, for, while. Se "escapan" de ellos.

function pruebaVar() {
    if (true) {
        var soyVar = "Soy Var"; // Está dentro del if
    }
    console.log(soyVar); // ¡FUNCIONA! 'var' se escapó del if, pero sigue dentro de la función.
}
// console.log(soyVar); // ERROR: No existe fuera de la función.


// 2. SCOPE DE BLOQUE (LET y CONST):
// Las variables creadas con 'let' o 'const' viven SOLO dentro de las llaves {} donde se crearon.

function pruebaLet() {
    if (true) {
        let soyLet = "Soy Let"; // Está dentro del if
        const soyConst = "Soy Const";
    }
    // console.log(soyLet); // ERROR: soyLet no existe aquí. Murió al cerrar el if.
}