class Tarea{
    constructor(name,state, id){
        this.nombre = name;
        this.estado = state;
        this.key = id;
    }
    setEstado(newEstado){
        this.estado = newEstado;
    }
}

const tareas = [];
let elemento;
let ul = document.getElementById("porHacerList");
let li = document.getElementById("li");
let item;
let inputBoton = document.getElementById("botonInput");
let inputTarea = document.getElementById("inputTarea");
let index = 0;

inputBoton.addEventListener("click",agregarTarea);
inputTarea.addEventListener("keypress",enterInput);
ul.addEventListener("click", eliminar);

let clave;
for(let i=0; i<localStorage.length; i++){
    clave = localStorage.key(i);
    tareas.push( JSON.parse(localStorage.getItem(clave)));
    item = document.createElement("li");
    item.innerHTML= tareas[i].nombre;
    ul.append(item);
}
index = parseInt(clave,10) + 1;

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
        index++;
        item = document.createElement("li");
        item.id = index.toString();
        tareas.push(new Tarea(elemento, 0, index));
        localStorage.setItem(index, JSON.stringify(tareas[tareas.length-1]))
        item.innerHTML= elemento;
        ul.append(item);
        inputTarea.value = "";
    }
}
function eliminar(e){
    console.log("Texto clickeado",e.target.innerText);
}
