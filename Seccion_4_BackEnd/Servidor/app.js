const express = require('express'); // aca obtebnemos express 
const app = express(); //aca guardamos express en una variable llamada app para futuro uso
const puerto = 3000; //el puerto que se utilizara para los endpoints
const cors = require('cors');
app.use(cors()); // Usamos CORS para utilizar metodos http desde otros dominios, con esto somos libres de usarlos cuando queramos
app.use(express.json()); // Middleware para parsear JSON en las solicitudes entrantes, con esto podemos leer los bodys como JSON
//Abre la carta.
//Lee el JSON ({"nombre": "Kiwi"}).
//Lo convierte en un objeto JavaScript y lo guarda en req.body.


const frutasImportadas = require('./frutas'); // Importamos el array de frutas desde el archivo frutas.js

// let frutas = ["manzana", "banana", "pera", "naranja", "uva"]; // Comentamos esto porque ya las importamos arriba
let personas = ["Juan", "María", "Pedro", "Lucía", "Ana"];

app.get('/', (req, res) => { // '/' es la ruta principal
    res.send(`La fruta que te toco es la ${frutasImportadas[Math.floor(Math.random() * frutasImportadas.length)]}`);
});

app.get('/persona', (req, res) => { // '/persona' es la ruta secundaria
    res.send(`La persona que te toco es ${personas[Math.floor(Math.random() * personas.length)]}`);
});

app.get('/fruta/:algo', (req, res) =>{
    const algo = req.params.algo.toLowerCase();
    const frutaEncontrada = frutasImportadas.find(fruta => fruta.nombre.toLowerCase() === algo);

    if(frutaEncontrada === undefined)
        res.status(404).send("Fruta no encontrada");
    else
        res.send(frutaEncontrada);
})

app.get('/fruta', (req, res) => { // '/persona' es la ruta secundaria
    res.send(frutasImportadas);
});

const ids = frutasImportadas.map(fruta => fruta.id); // Creamos un array con los IDs existentes
let maxId = Math.max(...ids); // Obtenemos el ID máximo actual

app.post('/frutas', (req, res) => {
    const frutas = frutasImportadas.find((fruta) => fruta.nombre === req.body.nombre); //find recorrera todo frutas importadas

    if(frutas != undefined){
        return res.status(409).send("La fruta ya existe");
    }else{
        maxId += 1; // Incrementamos el ID máximo para el nuevo registro
        req.body.id = maxId; // Asignamos el nuevo ID al cuerpo de la solicitud

        frutasImportadas.push(req.body);
        res.status(201).send("Fruta agregada correctamente");
    }
});

app.listen(puerto, () => {
    console.log(`Servidor escuchando en http://localhost:${puerto}`);
});
