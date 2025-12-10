const frutas = require("../Servidor/frutas");

const submitFruta = document.querySelector("#Valor_Introducido form");
const secFruta = document.querySelector("#Seccion_Frutas ol");
const totalCalorias = document.querySelector("#Seccion_Nutricional p");

submitFruta.addEventListener("submit", extraerValorFruta);//cuanbdo se envie el formulario se ejecuta la funcion (submit)


function extraerValorFruta(e){
    e.preventDefault(); 
    // Limpiamos espacios y ponemos minúsculas para asegurar que la API entienda
    const nombreLimpio = e.target.Tipo_Fruta.value.trim().toLowerCase();
    if(nombreLimpio){
        jsonFruta(nombreLimpio);
    }
    e.target.Tipo_Fruta.value = ""; 
}

async function jsonFruta(fruta){ //async porque usamos await adentro esto es para una funcion que no depende de nosotros
    try{
        // Usamos un "Proxy" (api.allorigins.win) para evitar el bloqueo de CORS
        const buscar = await fetch(`https://curso-javascript-7iga.onrender.com/fruta/${fruta}`)
        
        if(!buscar.ok) throw new Error("Fruta no encontrada");

        const data = await buscar.json();
        seccionFruta(data); 
    }catch(e){
        console.log("Error al obtener la fruta:", e);
        alert("No encontré esa fruta (Intenta escribirlo en inglés: Apple, Banana...)");
    }
}

let cal = 0;
let cal_frutas = {}


function seccionFruta(fruta){
    console.log("Fruta recibida:", fruta); // Para depurar

    const li = document.createElement("li"); 
    
    // Usamos Template Strings (``) que son más seguros y limpios
    li.textContent = `${fruta.name} (Calorías: ${fruta.nutritions.calories})`;
    
    li.addEventListener("click", remover);
    secFruta.appendChild(li);
    
    cal_frutas[fruta.name] = fruta.nutritions.calories;
    cal += fruta.nutritions.calories;
    
    if(totalCalorias) {
        totalCalorias.textContent = `Total de calorías: ${cal}`;
    }
}   

function remover(e){
    const nombreFruta = e.target.textContent.split(" (")[0];
    
    if(cal_frutas[nombreFruta]){
        cal -= cal_frutas[nombreFruta];
        cal = Math.round(cal * 100) / 100;
        
        if(totalCalorias) {
            totalCalorias.textContent = `Total de calorías: ${cal}`;
        }
    }

    e.target.remove();
}