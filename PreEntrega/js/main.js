class Tarea{
    constructor(nombre){
        this.nombre = nombre;
        this.estado = 0;
    }
    setEstado(newEstado){
        this.estado = newEstado;
    }
}

const tareas = [];
let elemento;
let ul = document.getElementById("porHacerList");
let item;
let inputBoton = document.getElementById("botonInput");
inputBoton.addEventListener("click",agregarTarea);
let inputTarea = document.getElementById("inputTarea");
inputTarea.addEventListener("keypress",enterInput);
function agregarTarea() {
    cargarTarea();
}
function enterInput(e){
    if(e.key == "Enter")
        cargarTarea();
}
function cargarTarea(){
    elemento = inputTarea.value;
    if(elemento!=null && elemento.length>0){
        item = document.createElement("li");
        tareas.push(new Tarea(elemento));
        item.innerHTML= elemento;
        ul.append(item);
        inputTarea.value = "";
    }
}
