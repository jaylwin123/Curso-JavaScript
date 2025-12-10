let eventos = document.querySelectorAll("p"); // Es una lista, no un solo elemento


const colores = ["red", "blue", "green", "purple", "orange"];

function color(event){  
    // IMPORTANTEEEEE: Usamos event.target para referirnos al elemento específico que se clickeó
    // 'eventos.style' fallaría porque es una lista.
    if(event.type === "click"){
        event.target.style.color = colores[Math.floor(Math.random()* colores.length)];
    }else if(event.type === "dblclick"){
        event.target.style.color = "blue";
    }else{
        event.target.style.color = "black";
    }
}

// Como querySelectorAll devuelve una lista (NodeList), no tiene el método addEventListener.
// Tenemos que recorrer cada párrafo y agregarle los eventos uno por uno.
eventos.forEach(parrafo => {
    parrafo.addEventListener("click", color);
    parrafo.addEventListener("dblclick", color);
    parrafo.addEventListener("mouseout", color);
});

let cambiar_texto = document.querySelectorAll(".evento");

function cambiarTexto(texto){
    if(texto.type === "click"){
        texto.target.textContent = "Texto cambiado al hacer click";
    }else{
        texto.target.textContent = "Texto original";
    }
}

cambiar_texto.forEach(elemento => {
    elemento.addEventListener("click", cambiarTexto);
    elemento.addEventListener("mouseout", cambiarTexto);
});
