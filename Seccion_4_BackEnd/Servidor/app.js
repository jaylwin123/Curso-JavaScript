const express = require('express'); // aca obtebnemos express 
const path = require('path'); // Modulo para manejar rutas de archivos
const app = express(); //aca guardamos express en una variable llamada app para futuro uso

const cors = require('cors');
app.use(cors()); // Usamos CORS para utilizar metodos http desde otros dominios, con esto somos libres de usarlos cuando queramos
app.use(express.json()); // Middleware para parsear JSON en las solicitudes entrantes, con esto podemos leer los bodys como JSON

// Servir archivos estáticos desde la carpeta Cliente
app.use(express.static(path.join(__dirname, '../Cliente')));
//Abre la carta.
//Lee el JSON ({"nombre": "Kiwi"}).
//Lo convierte en un objeto JavaScript y lo guarda en req.body.
const dotenv = require("dotenv");
dotenv.config();
const puerto = process.env.PUERTO || 3001;


const frutasImportadas = require('./frutas'); // Importamos el array de frutas desde el archivo frutas.js

// let frutas = ["manzana", "banana", "pera", "naranja", "uva"]; // Comentamos esto porque ya las importamos arriba
let personas = ["Juan", "María", "Pedro", "Lucía", "Ana"];

app.get('/', (req, res) => { // '/' es la ruta principal
    const frutaAleatoria = frutasImportadas[Math.floor(Math.random() * frutasImportadas.length)];
    res.send(`La fruta que te toco es la ${frutaAleatoria.nombre} y su ID es ${frutaAleatoria.id}`);
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
        res.send(frutaEncontrada);// Enviamos el objeto fruta encontrado como respuesta
})

app.get('/fruta', (req, res) => { // '/persona' es la ruta secundaria
    res.send(frutasImportadas);
});

const ids = frutasImportadas.map(fruta => fruta.id); // Creamos un array con los IDs existentes
let maxId = Math.max(...ids); // Obtenemos el ID máximo actual

app.post('/fruta', (req, res) => {
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

app.get('/id-fruta/:id', (req, res) =>{ //estoi es una url, lo primero que debemos hacer es pasar la url a entero o a texo dependiendo la informacion que tengamos
    // 1. Convertimos el ID de la URL (que es texto) a número
    const idBuscado = parseInt(req.params.id); 
    
    // 2. Buscamos la fruta por su ID
    const frutaEncontrada = frutasImportadas.find((fruta) => fruta.id === idBuscado);

    if(frutaEncontrada === undefined){
        res.status(404).send("ID no encontrado");
    }else{
        // 3. Enviamos la fruta que encontramos (NO el array completo)
        res.send(frutaEncontrada);
    }
});

app.delete("/frutas/:nombre", (req,res) =>{
    const name = req.params.nombre.toLowerCase();
    const eliminarFruta = frutasImportadas.findIndex((fruta) => fruta.nombre.toLowerCase() === name);

    if(eliminarFruta === -1){
        res.status(404).send("Fruta no encontrada");
    }else{
        frutasImportadas.splice(eliminarFruta, 1);
        res.status(200).send("Fruta eliminada correctamente");
    }
});

app.put("/frutas/:nombre", (req, res) => {
    const nameU = req.params.nombre.toLowerCase();
    const indexFruta = frutasImportadas.findIndex((fruta) => fruta.nombre.toLowerCase() === nameU);

    if (indexFruta === -1) {
        res.status(404).send('Fruta no existe, debe crearla');
    } else {
        const updatedFruta = {
            ...frutasImportadas[indexFruta],//datos antiguos
            ...req.body //datos nuevos dados por elk usuatui
        };

        updatedFruta.id = frutasImportadas[indexFruta].id; // Mantenemos el ID original, asi no se actualiza sio el usuario da uno nuevo
        frutasImportadas[indexFruta] = updatedFruta;// reemplazamos lo que habia con el nuevo (updated fruta)
        
        res.send(updatedFruta);
    }
});



app.listen(puerto, () => {
    console.log(`Servidor escuchando en http://localhost:${puerto}`);
});
