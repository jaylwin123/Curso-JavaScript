const seccion_Usuarios = document.querySelector("#seccion_usuarios form");
const mUsuarios = document.querySelector("#Muestra_Usuarios ol");
const totalUsuarios = document.querySelector("#Usuarios_Totales p");

seccion_Usuarios.addEventListener("submit", extraerValorUsuario);//cuanbdo se envie el formulario se ejecuta la funcion (submit)

function extraerValorUsuario(e){
    e.preventDefault(); // Evita que el formulario se envíe y recargue la página
    e.target.input_Usuario.value !== "" ? fetchUsuario(e.target.input_Usuario.value) : console.log("Ingrese un Usuario");
    e.target.input_Usuario.value = "";
}

async function fetchUsuario(usuario){
    try{
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${usuario}`)
        const data = await response.json();
        GuardarUsuario(data);

    }catch(e){
        console.log("Error al obtener el usuario:", e);
    }
}
let cant_usuarios = 0;
function GuardarUsuario(usuario){
    // 1. Primero verificamos si existe. Si no tiene ID, cortamos la función aquí.
    if(usuario.id === undefined){
        alert("Usuario no encontrado");
        return; // El return hace que la función se detenga y no siga leyendo abajo
    }

    // 2. Si llegamos aquí, es porque el usuario SÍ existe
    const li = document.createElement("li");
    // Clases de Bootstrap para que se vea bonito (list-group-item) y cursor pointer para indicar click
    li.className = "list-group-item list-group-item-action d-flex justify-content-between align-items-center cursor-pointer";
    
    li.textContent = `ID: ${usuario.id} - ${usuario.title}`;
    
    // Agregamos un badge (etiqueta) para mostrar si está completado
    if(usuario.completed){
        li.innerHTML += ' <span class="badge bg-success rounded-pill">Completado</span>';
    } else {
        li.innerHTML += ' <span class="badge bg-warning text-dark rounded-pill">Pendiente</span>';
    }

    li.addEventListener("click", remover);
    mUsuarios.appendChild(li);

    // 3. Sumamos al contador
    cant_usuarios++;
    totalUsuarios.textContent = `Total de usuarios: ${cant_usuarios}`;
}



function remover(e){
    e.target.remove();
    cant_usuarios--;
    totalUsuarios.textContent = `Total de usuarios: ${cant_usuarios}`;
}
