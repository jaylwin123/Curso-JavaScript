let numero1 =15;
let numero3 = "15";

if(numero1 > numero3){
    console.log(numero1 + " es mayor que " + numero3);
}else{
    console.log(numero3 + " es mayor que " + numero1);
}

//Operadores de Comparacion
//== igual en valor
//=== igual en valor y tipo
let igualQue = numero1 === numero3; //compara valor y tipo de dato
//let igualQue = numero1 == numero3; //solo compara valor, no tipo. Osea que si es un string con un numero, los convierte y los compara
//!== diferente en valor o tipo
console.log("¿Son iguales? " + igualQue);


//Operadores Logicos
//AND (&&) -> true si ambos son true
//OR (||) -> true si al menos uno es true
//NOT (!) -> invierte el valor


