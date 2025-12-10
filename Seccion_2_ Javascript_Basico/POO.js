class Animal {
    constructor(nombre, especie) { //si no le damos estas propiedades al crear el objeto, dara error
        this.nombre = nombre;//this hace referencia al objeto que se esta creando
        this.especie = especie;
    }
}

class Perro extends Animal { //extends hace que perro herede de animal
    ladrar(){
        console.log("Guau Guau");
    }
}

class Gato extends Animal {
    maullar(){
        let numero = 0;
        for(let i = 0; i < 3; i++){
            numero++;
            let miau = "Miau " + numero;
            console.log(miau);
        }
    }
}

const miPerro = new Perro("Firulais", "Canino");
console.log(miPerro.nombre);
miPerro.ladrar();

const miGato = new Gato("Misu", "Felino");
console.log(miGato.nombre);
miGato.maullar();