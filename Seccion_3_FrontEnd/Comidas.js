const comida_introducida = document.querySelector("#Comida_introducida form");

const secComida = document.querySelector("#Seccion_Comidas ol");


comida_introducida.addEventListener("submit", extraerValorComida);//cuanbdo se envie el formulario se ejecuta la funcion (submit)

function extraerValorComida(e){
    e.preventDefault(); // Evita que el formulario se envíe y recargue la página
    agregarComida(e.target.comidas.value);
    e.target.comidas.value = ""; // Limpia el campo después de enviar
}

function agregarComida(comida){
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${comida}`)
    .then((response)=> response.json())
    .then((data)=> seccionComida(data))
    .catch((error)=> alert("Esa comida no existe o hubo un error"));
}

function seccionComida(comida){
    const li = document.createElement("li");
    li.textContent = comida.meals[0].strMeal;
    li.textContent += " - " + comida.meals[0].strArea + " - Ingredientes: ";
    li.addEventListener("click", remover);
    secComida.appendChild(li);
}

function remover(e){
    e.target.remove();
}