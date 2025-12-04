numeros.slice(1, 3); // [2, 3] te muestra desde el indice 1 hasta el 3 sin incluir el 3
console.log(subArray); // Muestra [2, 3]

numeros.shift(); // Elimina el primer elemento (1)   
numeros.unshift(0); // Agrega 0 al inicio   

numeros.concat([6, 7, 8]); // Devuelve un nuevo array [0, 2, 3, 4, 5, 6, 7, 8]

numeros.pop(); // Elimina el último elemento (5)
numeros.push(6); // Agrega 6 al final

numeros.indexOf(4); // Devuelve el índice de 4, que es 3, te devuelve del primero que encuentre, si no lo pilla da -1.
console.log(numeros); // Muestra el array modificado
