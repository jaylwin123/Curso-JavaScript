// 1. FUNCIÓN TRADICIONAL (Function Declaration)
// - Tiene su propio 'this' (contexto).
// - Se puede usar ANTES de declararla (Hoisting).
// - Necesita la palabra clave 'return' explícita si tiene llaves {}.
function sumar(a, b) {
    return a + b;
}

// 2. ARROW FUNCTION (Función Flecha - ES6)
// - NO tiene su propio 'this' (hereda el del padre, útil en callbacks).
// - NO se puede usar antes de declararla (debes crearla antes de llamarla).
// - Sintaxis más corta.
// - Si es una sola línea, el 'return' es IMPLÍCITO (automático).

const sumarFlecha = (a, b) => a + b; // ¡Mira qué corto! Sin llaves ni return.

// Ejemplo con cuerpo (necesita return):
const sumarFlechaLarga = (a, b) => {
    console.log("Sumando...");
    return a + b;
};

console.log(sumar(5, 3));       // 8
console.log(sumarFlecha(5, 3)); // 8