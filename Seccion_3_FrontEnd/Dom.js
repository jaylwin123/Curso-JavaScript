const h1 =document.querySelector("h1");//Esto selecciona el primer h1 del documento

h1.textContent = "Hola desde JavaScript";

const h2 = document.querySelectorAll(".grande");

h2.forEach((element)=>{
    element.style.fontSize = "50px";
})

const p = document.querySelectorAll("p");

for(let i = 0; i < p.length; i++){
    p[i].textContent = i + " - Modificado desde JavaScript";
}