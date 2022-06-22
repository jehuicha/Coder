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
do{
    elemento = prompt("ingrese una tarea");
    if(elemento!=null && elemento.length>0){
        item = document.createElement("li");
        tareas.push(new Tarea(elemento));
        item.innerHTML= elemento;
        ul.append(item);
    }
}while(elemento!=null);

let finalText = document.createElement("p");
finalText.innerHTML = `Se agregaron ${tareas.length} tareas nuevas`;
document.body.append(finalText);
