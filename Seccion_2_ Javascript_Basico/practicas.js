//practica 1 operadores booleanos

//1 false
//2 true
//3 "true", true
//4 true
//5 false
//6 true

//practica 2 Loops/Bucles

do{
    console.log("El numero es: " + numero);
    numero++;
}while(numero < 10);
// esto es un bucle do while que imprime en consola el valor de la variable numero y luego la incrementa en 1, hasta que numero sea menor que 10

//1-6
let numero = 1
while(numero <= 30){
    if(numero < 10){
        console.log(numero);
    }else if(numero >= 10 && numero <= 20){
        console.log("El numero es " + numero);
    }else{
        console.log(numero * 3);
    }
    numero++;
}

//practica 3 condiciones o ternarias

const num = 7;

if(num >= 11){
    console.log("Alto");
}else if(num < 3){
    console.log("Bajo");
}else if(num === 7){
    console.log("Exacto");
}else{
    console.log("Medio");
}

//practica 4 arrays

var numeros = [];

for(let i = 1; i <= 5; i++){
    numeros.push(i)
}; // tambien funciona numeros.push(1,2,3,4,5);

console.log(numeros);

var numeros_elim = numeros.pop();
console.log(numeros_elim); //elimina el ultimo elemento del array y lo guarda en la variable numeros_elim
console.log(numeros);

var numeros_sum = numeros.unshift(0); //agrega 0 al inicio del array
console.log(numeros_sum);
console.log(numeros);

var posicion_3 = numeros.indexOf(3);
console.log(posicion_3);

var numeros_1 = numeros.slice(1,numeros.length); // desde el indice 1 hasta el final
console.log(numeros_1);

var numeros_ultimos = numeros.concat([6,7,8]) //agrega 6,7,8 al final del array