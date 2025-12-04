const numeros = [1, 2, 3, 4];

// 1. forEach: "Para cada uno, haz algo"
// - Solo recorre el array y ejecuta una acción.
// - NO devuelve nada (undefined).
// - Modifica el array original o hace efectos secundarios (como imprimir).
console.log("--- forEach ---");
numeros.forEach((num, index) => { // aqui num es cada elemento del array.Y si pusieramos num, index seria el indice del elemento en el array
    console.log(num * 2); // Imprime: 2, 4, 6, 8
});


// 2. map: "Transforma y dame uno nuevo"
// - Recorre el array y crea un NUEVO array con los resultados.
// - NO modifica el array original.
// - SIEMPRE devuelve un array del mismo tamaño.
console.log("--- map ---");
const dobles = numeros.map((num) => {
    return num * 2;
});

console.log(dobles); // [2, 4, 6, 8] (Nuevo array)
console.log(numeros); // [1, 2, 3, 4] (El original sigue igual)