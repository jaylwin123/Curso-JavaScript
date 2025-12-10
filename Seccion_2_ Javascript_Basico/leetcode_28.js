// Solución 1: Usando el método nativo de JavaScript (La forma fácil y recomendada en el trabajo real)
// indexOf devuelve la posición de la primera ocurrencia, o -1 si no existe.
function strStrNativo(haystack, needle) {
    return haystack.indexOf(needle);
}

// Solución 2: Algoritmo manual (Lo que suelen pedir en entrevistas para ver tu lógica)
// Esto simula lo que hace indexOf por dentro.
function strStrManual(haystack, needle) {
    // Si needle está vacío, por definición devolvemos 0
    if (needle.length === 0) return 0;
    
    // Si needle es más largo que haystack, es imposible que esté dentro
    if (needle.length > haystack.length) return -1;

    // Recorremos el haystack
    // Solo necesitamos ir hasta donde el needle todavía cabe (haystack.length - needle.length)
    for (let i = 0; i <= haystack.length - needle.length; i++) {
        
        // En cada posición i, verificamos si coincide con needle
        let coincide = true;
        
        for (let j = 0; j < needle.length; j++) {
            // Comparamos el caracter actual de haystack (i + j) con el de needle (j)
            if (haystack[i + j] !== needle[j]) {
                coincide = false;
                break; // Si uno no coincide, dejamos de buscar en esta posición i
            }
        }
        
        // Si después del bucle interno 'coincide' sigue siendo true, lo encontramos
        if (coincide) {
            return i;
        }
    }
    
    // Si terminamos de recorrer todo y no lo encontramos
    return -1;
}

// --- Pruebas ---
console.log("Ejemplo 1 (sadbutsad, sad):");
console.log("Nativo:", strStrNativo("sadbutsad", "sad")); 
console.log("Manual:", strStrManual("sadbutsad", "sad")); 

console.log("\nEjemplo 2 (leetcode, leeto):");
console.log("Nativo:", strStrNativo("leetcode", "leeto")); 
console.log("Manual:", strStrManual("leetcode", "leeto")); 

console.log("\nEjemplo 3 (hello, ll):");
console.log("Nativo:", strStrNativo("hello", "ll")); 
console.log("Manual:", strStrManual("hello", "ll")); 
