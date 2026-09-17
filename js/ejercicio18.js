const input = document.getElementById("nuevoE");
const botonAgregar = document.getElementById("agregarBtn");
const lista = document.getElementById("lista");

function agregarE(){
    let texto = input.value.trim();
    if(texto==""){
        alert("Escribe algooo");
        return;
    }
    let li = document.createElement("li");
    li.classList.add(
        "list-group-item",
        "d-flex",
        "justify-content-between",
        "align-items-center"
    );
    let textoElemento = document.createTextNode(texto);
    li.appendChild(textoElemento);
    let botonEliminar = document.createElement("button");
    botonEliminar.textContent="Eliminar";
    botonEliminar.classList.add(
        "btn",
        "btn-danger",
        "btn-sm"
    );
    botonEliminar.addEventListener("click", function(){
        li.remove();
    });
    li.appendChild(botonEliminar);
    lista.appendChild(li);
    input.value="";
}
botonAgregar.addEventListener("click",agregarE);