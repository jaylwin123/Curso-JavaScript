let numero = 1; 
//let nombre = "" o "";
let booleano = true; false;

console.log(numero);


//let variable que cambia a lo largo del codigo
//
//const variable que no cambia a lo largo del codigo pie de ejemplo: const pi = 3.14;

/*
DIFERENCIA ENTRE VAR, LET y CONST:

1. VAR (Antiguo - NO USAR):
   - Tiene "scope de función" (si la declaras dentro de un if, igual existe fuera del if).
   - Permite redeclarar la misma variable (var x = 1; var x = 2; -> No da error, lo cual es peligroso).
   - Se "eleva" (hoisting) de forma rara. Se puede usar antes de declararla, pero su valor será undefined.

2. LET (Moderno - USAR PARA VALORES QUE CAMBIAN):
   - Tiene "scope de bloque" (solo existe dentro de las llaves {} donde se creó).
   - NO permite redeclarar en el mismo bloque. Fuerda del bloque sí (siempre que no haya otra let con el mismo nombre en ese scope).
   - Permite REASIGNAR valor (let x = 5; x = 10; -> OK). A diferencia de var, no se "eleva" de forma rara.

3. CONST (Moderno - USAR POR DEFECTO):
   - Tiene "scope de bloque" (igual que let).
   - NO permite redeclarar.
   - NO permite REASIGNAR valor (const x = 5; x = 10; -> ERROR).
   - Debes inicializarla siempre al declararla.
*/

if (true) {
    var soyVar = "Existo fuera del if";
    let soyLet = "Solo existo aquí dentro";
}

console.log(soyVar); // Funciona
// console.log(soyLet); // Daría ERROR: soyLet is not defined




